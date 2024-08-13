import style from './Footer.module.css'

const Footer = (props) => {
    const { creatorName } = props;
    const year = (new Date()).getFullYear();
    return (
        <div className={style.Footer}>
            React Básico - {year} - {creatorName}
        </div>
    )
}

export { Footer };