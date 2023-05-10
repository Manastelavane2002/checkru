This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

Dependencies

- [nvm](https://github.com/nvm-sh/nvm)
- [yarn](https://classic.yarnpkg.com)


First, make sure to install the correct version of the node contained in `.nvmrc`.

```bash
nvm use
```

Windows users:

```bash
type .\.nvmrc | %{$_ -replace "v",""} | %{nvm install $_}
type .\.nvmrc | %{$_ -replace "v",""} | %{nvm use $_}
```

## Getting Started

First, run the development server:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing code



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
