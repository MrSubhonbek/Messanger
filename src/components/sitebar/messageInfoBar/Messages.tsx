import st from './Messages.module.scss'

interface IProps {

}

export const Messages = (props:IProps) => {
    return (
        <div className={st.message}>
            <div className={st.wrapper}></div>
            <div className={st.input}></div>
        </div>
    )
}