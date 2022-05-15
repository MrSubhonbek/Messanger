import { Posts } from './posts/Posts'
import st from './Profile.module.scss'
import { YourProfile } from './yourProfile/YourProfile'

interface IProps {

}

export const Profile = (props:IProps) => {
    return (
        <div className={st.profile}>
            <YourProfile/>
            <Posts />
        </div>
    )
}