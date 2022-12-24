This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Our Setup

In the repository there are two main branches, `prod` and `dev`. The `prod` branch is where we push changes to the live website
that are ready to be seen and utilized by people who visit it. However, because the website is live and can be viewed at anytime,
a separate branch where we can work on and test these changes without disrupting the users experience is necessary.
This separate branch is the `dev` branch and serves as our developmental playground. Put together, these two branches allow us
to make effective changes and present our product, the website, as we envision it.

## Getting Started

Clone the repository so that there is a local version on your machine with the following command.

`git clone https://github.com/acm-ucr/acm-hydra.git`

Once installed, run `npm i` to install all nessecary dependencies for the project.

Next, install the following plug ins.

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - [Documentation](https://prettier.io/docs/en/index.html)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - [Documentation](https://eslint.org/docs/latest/)
-   [Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - [Documentation](https://tailwindcss.com/docs/installation)

When combined, these two extensions ensure that all code conforms to the style being used in other files while also making debugging and error catching easier.

## Development Commands

Use the following command to format code with Prettier.

`npm run format`

To check if a file has already been formatted, enter the following.

`npm run check`

These two commands replace `npx prettier --write .` and `npx prettier --check .` through the use of scripts in the `package.json` file.
Similar shortcuts can be found for different commands besides Prettier commands in this file.

The following command runs ESLint.

`npm run eslint`

As with Prettier, this and all later commands are shortcuts whose original commands can be found in the `package.json` file.

For building and exporting, use the following commands.

`npm run build` and `npm run export`

Because the website is made up of multiple JS and CSS files, having to load each page on the site and their respective files
each time a user wants to visit them would be very impractical. To circumvent this, we use the build command to make the site run more efficiently
by combining all JS and CSS files into one JS file and one CSS file, reducing the number of files that need loading to two.

The export command lets us export the pages in the website to static HTML files. We do this as the website is currently being
hosted on UCR servers, and in order to follow security guidelines given to us by the university, the website must be static and not dynamic.
