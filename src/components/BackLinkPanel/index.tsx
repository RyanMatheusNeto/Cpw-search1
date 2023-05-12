import { BackButton, BackLink, BackLinkPanel } from "../../pages/CoinInfo/styles"

const BackLinkPanel2 = ()=> {
    return(
    <BackLinkPanel>
        <BackLink to='/'>
          <BackButton data-cy="botão-voltar">Voltar</BackButton>
        </BackLink>
      </BackLinkPanel>
    )
}

export default BackLinkPanel2


