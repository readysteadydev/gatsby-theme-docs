<h1 align="center">
  ReadySteady: Gatsby docs theme
</h1>

A Gatsby theme for creating a documentation site.

<div align="center">
<img style="width: 400px; height: 300px; margin-right:10px;" src="assets/desktop.png?raw=true" aria-label="Desktop example" alt="Desktop example" />
<img style="width: 200px; height: 300px;" src="assets/mobile-daynight.png?raw=true" aria-label="Mobile example" alt="Mobile example" />
</div>

## Features

- Markdown documentation for your site sourced from a documentation folder.
- Light / Dark mode.
- [PrismJS](https://prismjs.com/) code highlighting.
- [MermaidJS](https://mermaidjs.github.io/) diagrams.
- [MDX](https://mdxjs.com/) for super extensible documentation.
- Customization using [Theme-UI](http://theme-ui.com) by shadowing the `theme.js` file.
- Configurable navigation menu using simple YAML format.
- New `DocPost` node interface that allows other sources for documentation (advanced useage).

## Installation

### Create a new Gatsby site and add theme to your project

```bash
npm install --save @readysteady/gatsby-theme-docs
```

## Usage

Add the theme as a plugin in your `gatsby-config.js` file.

```javascript
module.exports = {
    plugins: [`@readysteady/gatsby-theme-docs`],
}
```

Or to use options...

```javascript
module.exports = {
    plugins: [
        {
            resolve: `@readysteady/gatsby-theme-docs`,
            options: {
                contentPath: 'docs',
                basePath: '/',
            },
        },
    ],
}

```

### Theme options

| Key              | Default value | Description|
| ---------------- | ------------- | ------------ |
| `basePath`       | `/`           | Root url for all document posts |
| `contentPath`    | `docs`        | Location of markdown documents and `navigation.yaml`|
| `docsSourceName` | `docs`        | Alternate `gatsby-source-filesystem` source name |
| `proxyType`      | `MdxDocPost`  | Alternate GraphQL proxy node type |
| `mdx`            | `true`        | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off)<br />**Note:** If you do turn this off you will need to configure your MDX to enable `mermaid` and `prismjs` plugins if you wish to use these features. |


### Additional configuration

In addition to the theme options, you can configure some options via the `siteMetadata` object in your site's `gatsby-config.js`

```javascript
// gatsby-config.js
module.exports = {
    siteMetadata: {
        // Your documentation site title
        title: `My Documentation Site`,
        // Text in the site footer
        footer: `Copyright(C) 2019 My Company`
    },
}
```

## Documentation Folder

### Sample site out of the box
If no documentation folder is found a new folder will be created with some example documentation.

If no `navigation.yaml` file is found an example one will be created within your documentation folder.

### Document Format

Documents are created using markdown and requires some markdown frontmatter. The front matter currently supported are:

| Key       | Importance | Description|
| --------- | ------------- | ------------ |
| `title`   | **Required**  | The title of the document |
| `slug`    | Optional      | Slug is the path of the document which will be added to the `basePath`.<br />If no slug is provided it will be derived from the filename.|

#### Example Document

```markdown
---
title: "A very important document"
---

Nullam id dolor id nibh ultricies vehicula ut id elit.
Vestibulum id ligula porta felis euismod semper.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum.

```


## Navigation

To configure the navigation menu for your site you will need to crate a `navigation.yaml` file in the same folder as your markdown documents (default: `docs`)

The YAML file allows you to define the structure of your navigation.

### Example
```yaml
# Navigation supports up to 4 levels of nesting.
# This file is an example.
# Title will be ignored, but keep it here.
- title: Docs
  # `key` has to be `docSidebar` for navigation to work.
  key: docSidebar
  items:
    # Level 0
    - title: Introduction
      link: /
    # Level 0
    - title: Expandable
      link: /expandable/
      items:
        # Level 1
        - title: Level One
          link: /level-1/
          items:
            # Level 2
            - title: Level Two
              link: /level-2/
            - title: Also Level Two
              link: /also-level-2/
              items:
                # Level 3
                - title: Level Three
                  link: /level-3/
    # Level 0
    - title: The End.
      link: /end/
```
