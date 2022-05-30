import { Posts } from './posts/Posts'
import st from './Profile.module.scss'
import { YourProfile } from './yourProfile/YourProfile'
import { store } from '../../../redux/state'
interface IProps {

}

export const Profile = (props: IProps) => {
    return (
        <div className={st.profile}>
            <YourProfile />
            <Posts
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                changeTextTitle={store.changeTextTitle.bind(store)}
                changeTextPost={store.changeTextPost.bind(store)}
            />
        </div>
    )
}