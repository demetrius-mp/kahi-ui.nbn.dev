+++
[[properties."Menu.Container"]]
name="orientation"
description="Renders the `Menu.Container` horizontally."
types=["horizontal", "{VIEWPORT}:horizontal"]

[[properties."Menu.Container"]]
name="sizing"
description="Changes how big the `Menu` components will be rendered."
types=["tiny", "small", "medium", "large", "huge"]

[[properties."Menu.Anchor"]]
name="active"
description="Renders the `Menu.Anchor` with `aria-pressed` attribute, and styles the `Menu.Anchor` as if it where being clicked."
types=["boolean"]

[[properties."Menu.Anchor"]]
name="disabled"
description="Renders the `Menu.Anchor` with `aria-disabled` attributes, and styles the `Menu.Anchor` partially transparent."
types=["boolean"]

[[properties."Menu.Anchor"]]
name="href"
description="Renders the `Menu.Anchor` as a `<a role=\"button\">` and links to the specified `href` property."
types=["string"]

[[properties."Menu.Anchor"]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties."Menu.Anchor"]]
name="rel"
description="Sets how the `Menu.Anchor` relates to the current page, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) for more information."
types=["string"]

[[properties."Menu.Anchor"]]
name="target"
description="Sets the target of the `Menu.Anchor` being navigated, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more information."
types=["string"]

[[properties."Menu.Anchor"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties."Menu.Button"]]
name="active"
description="Renders the `Menu.Button` with `aria-pressed` attribute, and styles the `Menu.Button` as if it where being clicked."
types=["boolean"]

[[properties."Menu.Button"]]
name="disabled"
description="Renders the `Menu.Button` with `disabled` attributes, and styles the `Menu.Button` partially transparent."
types=["boolean"]

[[properties."Menu.Button"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties."Menu.Label"]]
name="active"
description="Renders the `Menu.Label` with `aria-pressed` attribute, and styles the `Menu.Label` as if it where being clicked."
types=["boolean"]

[[properties."Menu.Label"]]
name="disabled"
description="Renders the `Menu.Label` with `disabled` attributes, and styles the `Menu.Label` partially transparent."
types=["boolean"]

[[properties."Menu.Label"]]
name="for"
description="Sets the ID used by the `<label>` to target it's child form Component."
types=["string"]

[[properties."Menu.Label"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[slots."Menu.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Anchor"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Button"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Divider"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Divider"]]
name="default"
description="Slot for rendering `Menu.Section` Components."
types=["{}"]

[[slots."Menu.Heading"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Heading"]]
name="default"
description="Slot for rendering `Menu.Section` Components."
types=["{}"]

[[slots."Menu.Item"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Label"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Menu

> **NOTE**: New since `v0.2.2`.

`Menu` renders a nestable list of actionable buttons and links. Typically used in context menus or used as the main content body of [`Aside`](./aside.md).

```svelte {title="Menu Preview" mode="repl"}
<script>
    import {
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Menu.Container>
    <Menu.Button>
        Copy
        <Spacer />
        <Text is="kbd">CTRL+C</Text>
    </Menu.Button>

    <Menu.Button>
        Cut
        <Spacer />
        <Text is="kbd">CTRL+X</Text>
    </Menu.Button>

    <Menu.Divider />

    <Menu.Button>
        Delete
        <Spacer />
        <Text is="kbd">DEL</Text>
    </Menu.Button>
</Menu.Container>
```

## Imports

```svelte {title="Menu Imports"}
<script>
    import {Menu} from "@kahi-ui/framework";

    const {
        Container,
        Anchor,
        Button,
        Divider,
        Heading,
        Item,
        Label,
        Section,
    } = Menu;
</script>
```

## Orientation

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `orientation={["tablet:horizontal", "mobile:horizontal"]}`

> **IMPORTANT**: You should never use sub menus whenever using horizontal `Menu.Container` Components.

You can alter the orientation of how the `Menu.Container` lays out the children.

```svelte {title="Menu Orientation" mode="repl"}
<script>
    import {Menu} from "@kahi-ui/framework";
</script>

<Menu.Container orientation="horizontal">
    <Menu.Button>Documentation</Menu.Button>
    <Menu.Button>Github</Menu.Button>
    <Menu.Button>Releases</Menu.Button>
</Menu.Container>
```

## Section

> **DEPRECATED**: `<Menu.SubMenu>` will be renamed to `<Menu.Section>` in `v0.6.0`.

You can nest more menus via `<Menu.Section>` Component and using `<svelte:fragment slot="sub-menu">` in `<Menu.Divider>` or `<Menu.Heading>` Components.

```svelte {title="Menu Section" mode="repl"}
<script>
    import {
        Box,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Box palette="negative" padding="medium">
    <Menu.Container>
        <Menu.Heading>
            FEEDBACK
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button active>
                        Dot
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>

        <Menu.Heading>
            OVERLAYS
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button>
                        Overlay
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>
</Box>
```

## Text Divider

In place of `<Menu.Heading>` you can also use `<Menu.Divider>` with text content.

```svelte {title="Menu Text Divider" mode="repl"}
<script>
    import {
        Box,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Box palette="negative" padding="medium">
    <Menu.Container>
        <Menu.Divider>
            FEEDBACK
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button active>
                        Dot
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Divider>
    </Menu.Container>
</Box>
```

## Palette

You can change the color palette of the `Menu.Anchor` / `Menu.Button` / `Menu.Label` via the `palette` property.

```svelte {title="Menu Palette" mode="repl"}
<script>
    import {
        Menu,
        Mosaic,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Mosaic sizing="medium" spacing="medium">
    <Menu.Container>
        <Menu.Heading>
            DEFAULT
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button active>
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>
            ACCENT
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button
                        palette="accent"
                        active
                    >
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button palette="accent">
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>
            DARK
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button palette="dark" active>
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button palette="dark">
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>
            LIGHT
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button
                        palette="light"
                        active
                    >
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button palette="light">
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>
            ALERT
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button
                        palette="alert"
                        active
                    >
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button palette="alert">
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>
            AFFIRMATIVE
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button
                        palette="affirmative"
                        active
                    >
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button palette="affirmative">
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>
            NEGATIVE
            <svelte:fragment slot="sub-menu">
                <Menu.Section>
                    <Menu.Button
                        palette="negative"
                        active
                    >
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button palette="negative">
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>
</Mosaic>
```
