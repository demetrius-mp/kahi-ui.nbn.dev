# Getting Started

## Installation

Using a terminal inside of your project's directory, use `npm` to install the package.

```bash
npm install @kahi-ui/framework
```

## Importing Stylesheet

First if your toolchain supports it, import the required CSS files from `@kahi-ui/framework/dist`:

```javascript
// For non-minified:
import "@kahi-ui/framework/dist/kahi-ui.framework.css";

// For minified:
import "@kahi-ui/framework/dist/kahi-ui.framework.min.css";
```

Otherwise download the required CSS files from [Releases](https://github.com/novacbn/kahi-ui/releases/latest) and use `<link rel="stylesheet">`:

```html
<html>
    <head>
        <!-- For non-minified: -->

        <link
            rel="stylesheet"
            href="/path/to/kahi-ui.framework.css"
        />

        <!-- For minified: -->

        <link
            rel="stylesheet"
            href="/path/to/kahi-ui.framework.min.css"
        />
    </head>
</html>
```

## Usage

Import Components by their variable name from `@kahi-ui/framework`:

```svelte {title="Getting Started Usage" mode="repl"}
<script>
    import {Button, Heading} from "@kahi-ui/framework";

    let clicks = 0;

    function on_click(event) {
        clicks++;
    }
</script>

<Heading>
    Clicks: {clicks}
</Heading>

<Button on:click={on_click}>Add +1</Button>
```

Some Components are multi-part patterns, so you'll need to import their namespaces:

```svelte {title="Getting Started Patterns" mode="repl"}
<script>
    import {
        Button,
        Card,
        Text,
    } from "@kahi-ui/framework";
</script>

<Card.Container
    class="getting-started-patterns"
    palette="auto"
>
    <Card.Figure>
        <img src={IMAGE_BACKGROUND} />
    </Card.Figure>

    <Card.Header>Lorem Ipsum</Card.Header>

    <Card.Section>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Card.Section>

    <Card.Footer>
        <Button palette="affirmative">
            Open Details
        </Button>
    </Card.Footer>
</Card.Container>

<style>
    :global(.getting-started-patterns) {
        max-width: 35ch;
    }
</style>
```
