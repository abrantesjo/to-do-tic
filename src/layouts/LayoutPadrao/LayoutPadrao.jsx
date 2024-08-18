import { Outlet } from "react-router-dom"
import { Content, Footer, Header } from "../../components"
import { useAppContext } from '../../hooks'

const LayoutPadrao = () => {
    const { criador } = useAppContext();
    return(
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer creatorName={criador} />
        </>
    )
}

export { LayoutPadrao }