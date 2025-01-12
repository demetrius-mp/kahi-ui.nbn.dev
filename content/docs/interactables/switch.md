+++
[[properties.Switch]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Switch]]
name="sizing"
description="Renders the `Switch` at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Switch]]
name="active"
description="Renders the `Switch` with `aria-pressed` attribute, and styles the `Switch` as if it where being clicked."
types=["boolean"]

[[properties.Switch]]
name="disabled"
description="Renders the `Switch` with `disabled` attribute, and styles the `Switch` partially transparent."
types=["boolean"]

[[properties.Switch]]
name="name"
description="Sets the form name of the `Switch`."
types=["string"]

[[properties.Switch]]
name="state"
description="Sets the checked state of the `Switch`."
types=["boolean"]

[[properties.Switch]]
name="value"
description="Sets the value sent whenever the parent `<form>` is submitted."
types=["string"]

[[events.Switch]]
name="change"
description="Fires whenever the `Switch` has its value changed."
types=["InputEvent"]

[[events.Switch]]
name="input"
description="Fires whenever the `Switch` has its value changed."
types=["InputEvent"]

[[custom_properties.Switch]]
name="--switch-palette-background-bold"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties.Switch]]
name="--switch-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties.Switch]]
name="--switch-size-text-size"
description="Controls the default font size used for as relative base for `padding` and dot `font-size`."
types=["<length>", "<percentage>"]

[[custom_properties.Switch]]
name="--switch-size-text-line-height"
description="Controls the default `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Switch]]
name="--switch-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Switch]]
name="--switch-padding"
description="Controls the `padding` used."
types=["<length>"]

[[custom_properties.Switch]]
name="--switch-active-scale"
description="Controls the `transform: scale` used when clicked."
types=["<number>"]

[[custom_properties.Switch]]
name="--switch-disabled-opacity"
description="Controls the `opacity` used when disabled."
types=["<alpha-value>"]

[[custom_properties.Switch]]
name="--switch-dot-active-clip-path"
description="Controls the `clip-path: inset` used when clicked."
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage> round <length/percentage>"]

[[custom_properties.Switch]]
name="--switch-dot-checked-clip-path"
description="Controls the `clip-path: inset` used when checked."
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage> round <length/percentage>"]

[[custom_properties.Switch]]
name="--switch-dot-unchecked-clip-path"
description="Controls the `clip-path: inset` used when unchecked."
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage> round <length/percentage>"]

[[custom_properties.Switch]]
name="--switch-dot-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties.Switch]]
name="--switch-block-background-opacity"
description="Controls the default `background` opacity used."
types=["<alpha-value>"]

[[custom_properties.Switch]]
name="--switch-block-checked-active-background-opacity"
description="Controls the `background` opacity used when checked and clicked."
types=["<alpha-value>"]

[[custom_properties.Switch]]
name="--switch-block-unchecked-active-background-opacity"
description="Controls the `background` opacity used when unchecked and clicked."
types=["<alpha-value>"]
+++

# Switch

> **NOTE**: New since `v0.2.7`.

> **WARNING**: Received a breaking change in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Switch` is typically used to present to the end-user features, settings, and other toggles that they can turn on / off.

```svelte {title="Switch Preview" mode="repl"}
<script>
    import {Form, Switch} from "@kahi-ui/framework";
</script>

<Form.Label for="switch-preview">
    Remember Login?
    <Switch palette="affirmative" />
</Form.Label>
```

## Imports

```svelte {title="Switch Imports"}
<script>
    import {Switch} from "@kahi-ui/framework";
</script>
```

## States

You can control the state of the `Switch` via the `active`, `disabled`, and `state` properties.

```svelte {title="Switch States" mode="repl"}
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="switch-states"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Switch />
    </div>

    <div>
        <Text is="strong">STATE</Text>
        <Switch state />
    </div>

    <div>
        <Text is="strong">ACTIVE NO-STATE</Text>
        <Switch active />
    </div>

    <div>
        <Text is="strong">ACTIVE STATE</Text>
        <Switch active state />
    </div>

    <div>
        <Text is="strong">DISABLED NO-STATE</Text>
        <Switch disabled />
    </div>

    <div>
        <Text is="strong">DISABLED STATE</Text>
        <Switch disabled state />
    </div>
</Stack>

<style>
    :global(.switch-states strong) {
        display: block;
    }
</style>
```

## Palette

You can change the color palette of the `Switch` via the `palette` property.

```svelte {title="Switch Palette" mode="repl"}
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="switch-palette"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Switch />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Switch palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Switch palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Switch palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Switch palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Switch palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Switch palette="negative" />
    </div>
</Stack>

<style>
    :global(.switch-palette strong) {
        display: block;
    }
</style>
```

## Sizing

> **DEPRECATED**: This property will be renamed `size` -> `sizing` in `v0.6.0`.

You can change the size of the `Switch` via the `sizing` property.

```svelte {title="Switch Sizing" mode="repl"}
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="switch-sizing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Switch />
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Switch sizing="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Switch sizing="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Switch sizing="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Switch sizing="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Switch sizing="huge" />
    </div>
</Stack>

<style>
    :global(.switch-sizing strong) {
        display: block;
    }
</style>
```
