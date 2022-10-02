describe('To-do app', () => {
  before(() => {
    cy.resetDb()
  })

  beforeEach(() => {
    cy.visit('http://localhost:3000/')

    cy.log('Creating new todo')
    const newItem = 'Feed the cat'
    cy.get('[data-testid=new-todo-input]').type(`${newItem}{enter}`)

    cy.get('[data-testid="menu-button"]')
      .click()
      .then(() => {
        cy.get('[data-testid="menu-list"] li').first().click()
      })

    // set network request watcher
    cy.intercept('GET', '**/todos/*').as('getTodo')

    cy.log('fetch todo item from nuxt server')
    cy.wait('@getTodo')
      .its('response.statusCode')
      .should('be.oneOf', [200, 304])

    cy.log('Wait for page load after ssr request')
    cy.url().then(() => {
      cy.url().should('contain', '/todos/')
      cy.get('[data-testid=save-button]').should('be.visible')
    })
  })

  afterEach(() => {
    cy.log('Delete todo item')
    cy.get('[data-testid="menu-button"]').click()
    cy.get('[data-testid="menu-list"] li').last().click()
  })

  it('can edit todo title', () => {
    const newItem = 'New Task title'

    cy.get('[data-testid=edit-todo-input]').clear().type(`${newItem}`)

    cy.get('[data-testid=save-button]').click()
    cy.contains(newItem)
  })

  it('can select due date', () => {
    const today = new Date()
    const date = `${today.getDate()} ${today.toLocaleString('default', {
      month: 'short',
    })}`

    cy.get('[data-testid=date-picker]').click()
    cy.get('.rdp-months').find('.rdp-day_today').click()

    cy.get('[data-testid=save-button]').click()
    cy.get('[data-testid=tag]').contains(date)
  })

  it('can check off todo', () => {
    cy.get('[data-testid=edit-todo-input]')
      .parent()
      .find('input[type=checkbox]')
      .check({ force: true })

    cy.get('[data-testid=save-button]').click()

    cy.contains('Feed the cat')
      .parents('li')
      .get('[data-testid=todo-item-title]')
      .should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
      .should('have.css', 'font-style', 'italic')
  })
})

export {}
