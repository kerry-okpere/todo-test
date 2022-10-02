This is [Todo app](https://todo-gv5yzm0ob-kerry-okpere.vercel.app/) built with [Next.js](https://nextjs.org/)

## Getting Started

Trying to run this app on your local machine?
Here are a few things to do:

Install packages:

```bash
yarn install
```

### Test app

This app supports e2e test with [Cypress](https://www.cypress.io/) and component testing with [Jest](https://jestjs.io/)

This app uses firebase. Connect your firebase app using the `.env.example` as reference for required keys.

To Run the development server:

Rename `.env.example` to `.env.local`

```bash
yarn dev
```

### Run e2e tests

Rename `.env.example` to `.env.local`

Source environment variables

```bash
source .env.local
```

Start cypress

```bash
yarn cypress
```

#### Run unit tests

```bash
yarn test
```
