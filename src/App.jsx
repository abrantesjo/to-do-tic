import './App.css'

import { Header, Content, Footer } from './components'
import { Inicial } from './pages'

const App = () => {
  return (
    <>
      <Header/>
      <Content>
        <Inicial />
      </Content>
      <Footer creatorName="Joyce" />
    </>
  )
}

export { App };
