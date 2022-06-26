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

- **Source**: <https://stackoverflow.com/a/70597662>

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

- **Source**: <https://timdeschryver.dev/blog/environment-variables-with-sveltekit#the-problem>
- When the environment variable is defined, we can now use the import.meta.env.VITE_PUBLIC_BASE_PATH variable in our code. These variables will be replaced by their corresponding values.

- THE PROBLEM
But as I mentioned before, there's one problem. When the application is served you don't notice the issue, but with the build command, the following error is thrown when the component file (which uses an environment variable) includes a style tag.

- THE WORKAROUND
The workaround to this problem is to extract the environment variables into a separate module. Next, you can simply import the environment variable into your component from this module.

```ts title=variables.ts
export const variables = {
  basePath: import.meta.env.VITE_PUBLIC_BASE_PATH
};
```

```svelte title=index.svelte
<script lang="ts">
  import { variables } from '$lib/variables';
</script>

<div>basePath: {variables.basePath}</div>

```

- TYPESCRIPT SUPPORT
Lastly, you can make the environment variables type-safe by adding their types to the global.d.ts declaration file.

```ts title=global.d.ts
interface ImportMetaEnv {
  VITE_PUBLIC_BASE_PATH: string;
}
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