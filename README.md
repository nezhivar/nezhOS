<h3 align="center">NezhOS</h1>
<!-- <h3 align="center">Exploring the world and questioning everything</h3> -->
<p align="center">
  A monorepo that holds all of Nezhivar's open source projects . Bootstrapped with Turborepo.
</p>

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `notifications`: an electron app built to serve as a notification center for my different services
- `web`: a nextjs app to serve as my personal site
- `clickup-docs-export`: a nodejs app to extract ClickUp network urls from log files, download those files, and group them correctly 
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`) as well as `terminal`, and `vscode` configurations
- `fig`: custom plugins for `fig.io`
- `tools`: a toolkit used throughout the monorepo including the `cli`
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tools`: `cli`s used throughout the monorepo
- `ui`: a stub React component library shared by both web and docs applications

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
