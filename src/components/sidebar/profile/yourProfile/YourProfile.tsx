import st from './YourProfile.module.scss'

interface IProps {

}

export const YourProfile = (props:IProps) => {
    return (
        <div>
        <div className={st.yourProfile}>
            <div className={st.avatar}>Ava</div>
            <div className={st.description}>Description: Tra la la</div>
        </div>
        </div>
    )
}