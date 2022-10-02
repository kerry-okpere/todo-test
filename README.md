This is [Todo app](https://kerry-todo-app.vercel.app/) built with [Next.js](https://nextjs.org/)

## Getting Started

Trying to run this app on your local machine?
Here are a few things to do:

Install packages:

```bash
yarn install
```

### Test app

This app uses firebase. Connect your firebase app using the `.env.example` as reference for required keys.

To Run the development server:

Rename `.env.example` to `.env.local`

```bash
yarn dev
```

### Run tests

This app supports e2e test with [Cypress](https://www.cypress.io/) and component testing with [Jest](https://jestjs.io/)

#### Run e2e tests

To Run the cypress:

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
