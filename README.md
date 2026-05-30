# Trip template for Travelens (Travels Through a Lens)

Trip template for my travelogue web site. This is used to create a new repository for storing a trip.

This template is written in HTML5, CSS, [UnoCSS](https://uno.antfu.me/)
[Typescript](https://www.typescriptlang.org) and
[MarkDoc](https://markdoc.dev) using
[Astro](https://astro.build) as a web framework and static site generator.

- Astro is the all-in-one web framework designed for speed. Pull your content from anywhere and deploy everywhere, all powered by your favorite UI components and libraries.
- Markdoc is a Markdown-based document format and a framework for content publishing.
- TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- UnoCSS is an atomic-CSS engine instead of a framework. Everything is designed with flexibility and performance in mind. There are no core utilities in UnoCSS, all functionalities are provided via presets.

It is open source (MIT licence), and trips created using this template should be deployed using Github Pages as a subsite underneath the travelens master site eg. `travelens.github.io/trip`.

The site supports search via Fuse.js, sitemap, rss, SEO tags. The sitemap, rss and fuse search indexes are meant to be copied into the parent site (travelens) rather than used directly.

The site design is based on [Digizu's TailwindCSS templates](https://templates.digizu.co.uk/), particularly Impulse.

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content.config.ts
│   ├── components/
│   │   └── Card.astro
│   ├── gallery/
│   │   └── gallery1/
|   │       └── image.jpeg
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   |   └── index.astro
│   ├── post/
│   │   └── article.md
│   └── trip/
│       └── my-trip.md
│       └── trip.jpeg
└── package.json
```

In addition, each trip will be stored as a separate repository in the
`travelens` organization. This project integrates all the individual
repositories into a single seamless website.

## 🧞 Commands

`pnpm` is used as a package manager.

### Git Submodules

This project uses git submodules. If you are cloning this repository for the first time or updating it, you must initialize and update the submodules before installing dependencies or building the site:

```bash
git submodule update --init --recursive
```

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |
