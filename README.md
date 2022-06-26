# petitecalcy

## References

<https://mathworld.wolfram.com/Precedence.html>

> 1. Parenthesization,
>
> 2. Factorial,
>
> 3. Exponentiation,
>
> 4. Multiplication and division,
>
> 5. Addition and subtraction.

## Database

### Setup

```shell
npm install @supabase/supabase-js
```

```shell
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
```

### Troubleshooting

### Supabase + Vercel Deployment

**Source**: <https://stackoverflow.com/a/70597662>

```js
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      define: {
        'process.env': process.env,
      },
    },

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
}

export default config
```

- **Source**: <https://github.com/supabase/supabase-js>
- **Docs**: <https://supabase.com/docs>

<!-- Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment. -->
<!-- cspell:ignore supabase -->