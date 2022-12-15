This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone the repository so that there is a local version on your machine with the following command.

`git clone https://github.com/acm-ucr/acm-hydra.git`

Once installed, run `npm i` to install all nessecary dependencies for the project.

Next, install the following plug ins.

-   [Prettier](https://prettier.io/docs/en/index.html) 
-   [ESLint](https://eslint.org/docs/latest/)

When combined, these two extensions ensure that all code conforms to the style being used in other files while also making debugging and error catching easier.

## Important Commands

Use the following command to format code with Prettier.

`npm run format` 

To check if a file has already been formatted, enter the following.

`npm run check`

These two commands replace `npx prettier --write` and `npx prettier --check` through the use of scripts in the `package.json` file.
Similar shortcuts can be found for different commands besides Prettier commands in this file.



The following command runs ESLint.

`npm run eslint`

As with Prettier, this and all later commands are shortcuts whose original commands can be found in the `package.json` file.


For building and exporting, use the following commands.

`npm run build` and `npm run export`



## Running localhost

When working on the website, enter either of the following commands.

```bash
npm run dev
# or
yarn dev
```

Once entered, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

When you being making changes to the file you're working on, you'll see that the page updates automatically each time you save.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
