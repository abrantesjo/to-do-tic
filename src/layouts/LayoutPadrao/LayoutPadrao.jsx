import { Outlet } from "react-router-dom"
import { Content, Footer, Header } from "../../components"

const LayoutPadrao = () => {
    return(
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer creatorName="Joyce" />
        </>
    )
}

export { LayoutPadrao }