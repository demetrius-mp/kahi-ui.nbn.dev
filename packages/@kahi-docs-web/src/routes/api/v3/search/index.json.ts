import {relative} from "path";

import {dev} from "$app/env";
import {load} from "cheerio";
import fg from "fast-glob";
import type {RequestHandler} from "@sveltejs/kit";

import type {ISearchIndex} from "@kahi-docs/shared";
import {memoize} from "@kahi-docs/shared";

import {GLOB_CONTENT, PATH_CONTENT} from "../../../../lib/server/constants";
import type {ISearchGet} from "../../../../lib/shared/api";
import {read_content} from "../../../../lib/server/content";

async function get_search_index(): Promise<ISearchIndex> {
    const file_paths = await fg(GLOB_CONTENT);
    const index = await Promise.all(
        file_paths.map(async (file_path) => {
            const identifier = relative(PATH_CONTENT, file_path).replace(".md", "");

            // TODO: error handling
            const content = await read_content(file_path);
            const $ = load(content.render);

            $("iframe, hr, pre").remove();

            return {
                identifier,
                title: content.properties.title,
                text: $.text(),
            };
        })
    );

    index.sort((entry_a, entry_b) => {
        return entry_a.identifier > entry_b.identifier ? 1 : -1;
    });

    return index;
}

const _get_search_index = dev ? get_search_index : memoize(get_search_index)[0];

export const get: RequestHandler = async (request) => {
    return {
        status: 200,

        // HACK: Apparently `JSONValue` doesn't like my purely JSON data?
        body: {
            data: await _get_search_index(),
        } as ISearchGet as any,
    };
};
