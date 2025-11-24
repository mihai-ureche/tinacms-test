# Astro + TinaCMS Project

A basic Astro project integrated with TinaCMS for content management.

## 🚀 Getting Started

### Development

Start the development server with TinaCMS:

```sh
npm run dev
```

The site will be available at `http://localhost:4321`

**Access TinaCMS Admin:** `http://localhost:4321/admin/index.html`

### Build

Build the project for production:

```sh
npm run build
```

### Preview

Preview the production build:

```sh
npm run preview
```

## 📁 Project Structure

```text
/
├── content/
│   └── posts/          # Blog posts managed by TinaCMS
│       └── hello-world.md
├── public/             # Static assets
│   └── admin/          # TinaCMS admin interface (generated)
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro         # Homepage listing all posts
│       └── posts/
│           └── [...slug].astro # Dynamic post pages
├── tina/
│   ├── config.ts       # TinaCMS configuration
│   └── __generated__/  # Generated TinaCMS client
└── package.json
```

## 🎨 Features

- **Astro** - Fast, modern static site generator
- **TinaCMS** - Git-backed headless CMS
- **TypeScript** - Type-safe TinaCMS configuration
- **Markdown** - Write content in Markdown with frontmatter

## 📝 Using TinaCMS

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:4321/admin/index.html`
3. Edit your content in the visual editor
4. Changes are saved to your local files in `content/posts/`

### Adding Content

To add a new post:
1. Go to the TinaCMS admin at `/admin/index.html`
2. Click "Posts" in the sidebar
3. Click "Create New" and fill in the fields
4. Save your changes

### TinaCMS Cloud (Optional)

For production use, you can connect to TinaCMS Cloud:
1. Sign up at https://tina.io
2. Create a new project and get your Client ID and Token
3. Add them to your environment variables:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id
   TINA_TOKEN=your-token
   ```

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm run dev`          | Starts local dev server with TinaCMS            |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [TinaCMS Documentation](https://tina.io/docs/)
- [Astro Discord](https://astro.build/chat)
