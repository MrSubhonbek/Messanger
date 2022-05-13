import st from './SharedMedia.module.scss'

interface IProps {

}

export const SharedMedia = (props:IProps) => {
    return (
        <div className={st.sharedMedia}>
            <div className={st.wrapper}></div>
        </div>
    )
}