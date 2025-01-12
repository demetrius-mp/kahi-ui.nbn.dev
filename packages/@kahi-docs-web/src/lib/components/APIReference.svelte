<script lang="ts">
    import {Code, Heading, Scrollable, Stack, Table, Text} from "@kahi-ui/framework";

    import type {IReference, IReferenceMap} from "@kahi-docs/markdown";

    export let id: string;
    export let references: IReferenceMap;

    $: _components = Object.entries(references) as [string, IReference[]][];
</script>

{#each _components as [component, properties]}
    <Heading is="h3" id="api-reference-{id}-{component.toLowerCase()}">
        <Code>
            {component}
        </Code>
    </Heading>

    <Scrollable>
        <Table.Container min-width={["mobile:content-max", "tablet:content-max"]}>
            <Table.Header>
                <Table.Row>
                    <Table.Heading>Name</Table.Heading>
                    <Table.Heading>Description</Table.Heading>
                    <Table.Heading>Types</Table.Heading>
                </Table.Row>
            </Table.Header>

            <Table.Section>
                {#each properties as property}
                    <Table.Row>
                        <Table.Column>
                            <Code>{property.name}</Code>
                        </Table.Column>

                        <Table.Column>
                            {@html property.description}
                        </Table.Column>

                        <Table.Column>
                            <Stack
                                orientation="horizontal"
                                alignment_x="right"
                                spacing="small"
                                variation="wrap"
                                max_width="prose"
                            >
                                {#each property.types as type (type)}
                                    <Code>
                                        {type}
                                        {#if type === property.default}
                                            <Text is="strong">(DEFAULT)</Text>
                                        {/if}
                                    </Code>
                                {/each}
                            </Stack>
                        </Table.Column>
                    </Table.Row>
                {/each}
            </Table.Section>
        </Table.Container>
    </Scrollable>
{/each}
