 
describe('Home Page Spec', () => {
    beforeEach(() => {
      cy.visit('')
    })
  
    it('deve visitar a pagina e cliclar no resultado, depois no botão voltar', () => {
        const query = 'Ethereum'
        cy.intercept('GET', `${Cypress.env('API_URL')}/${query}`, {
          body: this.apiResponse,
        })
    
        cypress.performSearch(query)
    })
  
    it('should reset counter correctly', () => {
      const times = 10
      const incrementButton = cy.get('[data-cy="increment-button"]')
      for (let i = 0; i < times; i++) {
        incrementButton.click()
      }
  
      cy.get('[data-cy="reset-button"]').click()
      cy.get('[data-cy="counter-value"]').should('have.text', 0)
    })
  })