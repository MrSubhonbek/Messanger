import st from './Header.module.scss'

interface IProps {

}

export const Header = (props:IProps) => {
    return (
        <header className={st.header}>
            <div className={st.logo}></div>
        </header>
    )
}