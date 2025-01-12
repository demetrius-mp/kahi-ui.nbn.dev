<script context="module" lang="ts">
    import {viewports} from "@kahi-ui/framework";

    import Book from "./icons/Book.svelte";
    import Code from "./icons/Code.svelte";
    import Edit from "./icons/Edit.svelte";
    import MessageCircle from "./icons/MessageCircle.svelte";
    import Package from "./icons/Package.svelte";

    const LINKS_APPLICATION = [
        {href: "/docs/framework/getting-started", text: "Documentation", icon: Book},
        {href: "/playground", text: "Playground", icon: Edit},
        {href: "https://github.com/novacbn/kahi-ui", text: "Source", icon: Code},
        {
            href: "https://github.com/novacbn/kahi-ui/releases",
            text: "Releases",
            variation: "flush",
            icon: Package,
        },
        {href: "/chat", text: "Chat", variation: "flush", icon: MessageCircle},
    ];

    // HACK: This is here so when the parent changes
    // (e.g. `LandingLayout` -> `AsideLayout`), the value doesn't get reset

    const _collapse_viewports = viewports({mobile: true, tablet: true, desktop: true});
    const _search_viewports = viewports({mobile: true, tablet: true});
</script>

<script lang="ts">
    import {browser} from "$app/env";
    import {base} from "$app/paths";
    import {Box, Divider, Menu, Popover, Portal, Omni, Text, TextInput} from "@kahi-ui/framework";

    import {search_keybind} from "../client/keybind";
    import {PACKAGE_VERSION} from "../shared/constants";

    import MoreVertical from "./icons/MoreVertical.svelte";
    import Search from "./icons/Search.svelte";

    import AppAnchor from "./AppAnchor.svelte";
    import PromptSearch from "./PromptSearch.svelte";
    import ThemeButton from "./ThemeButton.svelte";

    let logic_state: boolean = false;
    let search_state: boolean = false;

    function on_search_active(event: Event): void {
        event.preventDefault();

        const target = event.target as HTMLElement | null;
        if (target) target.blur();

        logic_state = false;
        search_state = true;
    }

    $: if (!$_collapse_viewports) logic_state = false;
</script>

<svelte:window use:search_keybind={on_search_active} />

<Omni.Container class="app-navigation" palette="dark">
    <Omni.Header>
        <AppAnchor href={base || "/"} no_handle prefetch>Kahi UI</AppAnchor>
        <Divider orientation="vertical" />

        <AppAnchor href="https://github.com/novacbn/kahi-ui/releases/v{PACKAGE_VERSION}">
            <Text is="small">
                v{PACKAGE_VERSION}
            </Text>
        </AppAnchor>
    </Omni.Header>

    <Omni.Section
        class="app-navigation-search"
        hidden={!browser || $_search_viewports}
        margin_x="medium"
    >
        <TextInput
            type="search"
            placeholder="[CTRL+/] Search"
            size="small"
            variation="block"
            align="center"
            max_width="prose"
            on:focusin={on_search_active}
        />
    </Omni.Section>

    <Omni.Footer>
        <Popover.Container
            logic_id="app-navigation"
            hidden={["widescreen"]}
            dismissible
            bind:logic_state
        >
            <Popover.Button palette="light" variation="clear" size="huge">
                <MoreVertical />
            </Popover.Button>

            <Popover.Section alignment_x="left" spacing="small">
                <Box elevation="high" padding="medium" shape="rounded">
                    <Menu.Container>
                        {#each LINKS_APPLICATION as item (item.href)}
                            <Menu.Item>
                                <AppAnchor href={item.href} no_handle prefetch>
                                    <svelte:component this={item.icon} />
                                    {item.text}
                                </AppAnchor>
                            </Menu.Item>
                        {/each}

                        {#if browser}
                            <Menu.Item>
                                <ThemeButton has_text />
                            </Menu.Item>

                            <Menu.Button hidden={!$_search_viewports} on:click={on_search_active}>
                                <Search />
                                Search
                            </Menu.Button>
                        {/if}
                    </Menu.Container>
                </Box>
            </Popover.Section>
        </Popover.Container>

        <Menu.Container
            hidden={["mobile", "tablet", "desktop"]}
            orientation="horizontal"
            sizing="small"
        >
            {#each LINKS_APPLICATION as item (item.href)}
                <Menu.Item>
                    <AppAnchor href={item.href} no_handle prefetch>
                        <svelte:component this={item.icon} />
                        {item.variation === "flush" ? "" : item.text}
                    </AppAnchor>
                </Menu.Item>
            {/each}

            {#if browser}
                <Menu.Item>
                    <ThemeButton />
                </Menu.Item>
            {/if}
        </Menu.Container>
    </Omni.Footer>
</Omni.Container>

{#if browser}
    <Portal>
        <PromptSearch bind:logic_state={search_state} />
    </Portal>
{/if}

<style>
    :global(.app-navigation) {
        grid-area: header;

        position: fixed;
        top: 0;

        width: 100%;
        height: 4.4rem;
    }

    :global(.app-navigation) :global(header) :global(small) {
        font-size: 65%;
    }

    :global(.app-navigation) :global(.app-navigation-search) {
        flex-grow: 1;
    }
</style>
