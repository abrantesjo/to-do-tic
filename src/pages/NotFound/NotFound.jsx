import { Link } from "react-router-dom"
import { Content, Footer, Header } from "../../components"

const NotFound = () => {
    return (
        <>
            <Content>
                <h1>Ops! A página solicitada não existe.</h1>
                <Link to="/">Clique aqui para voltar para a Home.</Link>
            </Content>
        </>
    )
}

export { NotFound }