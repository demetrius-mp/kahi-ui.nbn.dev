+++
[[properties.Portal]]
name="target"
description="Sets the `HTMLElement` or CSS selector used to target the new container element."
default="document.body"
types=["document.body", "HTMLElement", "string"]

[[properties.Portal]]
name="loading"
description="When the property is set and the `Portal` Component is not mounted, the child content is not rendered to DOM."
types=["lazy"]

[[properties.Portal]]
name="prepend"
description="Sets the `Portal` to mounts its self before all other elements in the new container element, instead of after."
types=["boolean"]

[[events.Portal]]
name="mount"
description="Fires whenever the `Portal` mounts to the target."
types=["CustomEvent<void>"]

[[slots.Portal]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Portal

> **NOTE**: New since `v0.2.0`.

`Portal` is used to render a layout outside of its original containing DOM tree, moving it somewhere else.

```svelte {title="Portal Preview" mode="repl"}
<script>
    import {Box, Portal} from "@kahi-ui/framework";

    let container = null;
</script>

<Box
    bind:element={container}
    palette="accent"
    padding="small"
>
    I am the new container element!
</Box>

<Portal target={container}>
    <Box padding="small">And I was moved to here!</Box>
</Portal>
```

## Imports

```svelte {title="Portal Imports"}
<script>
    import {Portal} from "@kahi-ui/framework";
</script>
```

## Compatibility

`Portal` wraps your slotted content in a `display: contents` containing element, so keep that in mind in your CSS selectors. It also only remounts its self to the target on clientside Browsers with Javascript enabled. So you need to plan a SSR-compatible fallback if using in a SSR scenario.

## Loading

> **NOTE**: New since `v0.3.5`.

> **NOTE**: Use the in-Browser developer tools to see this functionality in action.

You can customize the slot loading behavior of `Portal` Components to not render their children, via the `loading` property.

```svelte {title="Portal Loading" mode="repl"}
<script>
    import {Box, Portal} from "@kahi-ui/framework";

    let container = null;
</script>

<Box
    bind:element={container}
    palette="accent"
    padding="small"
>
    I am the new container element!
</Box>

<Portal target={container} loading="lazy">
    <Box padding="small">And I was moved to here!</Box>
</Portal>
```
