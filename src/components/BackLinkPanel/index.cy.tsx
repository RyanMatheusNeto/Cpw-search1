import { BrowserRouter } from "react-router-dom"
import FontStyles from "../../assets/fonts/fonts"
import cypress from "cypress"


describe('<BackLinkPanel />', () => {
    it('should render Title correctly', () => {
    
  
        cy.mount(
          <BrowserRouter>
            <FontStyles />
          </BrowserRouter>
        )
  
        const title = 'Crypto Search'
  
  
        cy.get('[data-cy="botão-voltar"]').click('', title)
      })
    })