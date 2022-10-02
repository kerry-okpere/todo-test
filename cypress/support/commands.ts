import { deleteAll } from './firebase.cypress'

/// <reference types="cypress" />

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      resetDb(): Promise<void>
    }
  }
}

Cypress.Commands.add('resetDb', async () => {
  await deleteAll()
})

export {}
