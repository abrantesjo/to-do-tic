import { Link } from 'react-router-dom';
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.Header}>
            <Link to="/">
                <h1>
                    Get your things done!
                </h1>
            </Link>
            <Link to="/sobre-nos">Sobre Nós</Link>
        </div>
    )
}

export { Header }; //facilita em programação com grandes grupos
//.jsx é a junção de javascript e xml