describe('To-do app', () => {
  before(() => {
    cy.resetDb()
  })

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays an input component by default', () => {
    cy.get('[data-testid=new-todo-input]').should('have.length', 1)
  })

  it('can add new todo item', () => {
    const newItem = 'Feed the cat'

    cy.log('Creating new title')
    cy.get('[data-testid=new-todo-input]').type(`${newItem}{enter}`)

    cy.get('[data-testid=todo-list] li')
      .should('have.length', 1)
      .last()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {
    cy.contains('Feed the cat')
      .parent()
      .find('input[type=checkbox]')
      .check({ force: true })

    cy.contains('Feed the cat')
      .parents('li')
      .get('[data-testid=todo-item-title]')
      .should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
      .should('have.css', 'font-style', 'italic')
  })

  it('can delete todo item', () => {
    cy.get('[data-testid="menu-button"]').click()
    cy.get('body').find('[data-testid="menu-list"]').should('have.length', 1)

    cy.get('[data-testid="menu-list"] li').last().click()
    cy.get('[data-testid=todo-list] li').should('have.length', 0)
  })
})

export {}
