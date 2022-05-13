import { Post } from './Post'
import st from './Posts.module.scss'

interface IProps {

}

const text: string = 'Some Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const time: string = '10:10'
const title: string = 'Some Title'

export const Posts = (props: IProps) => {

    return (
        <div className={st.posts}>
            <div className={st.title}>My Posts</div>
            <Post text={text} time={time} title={title} />
        </div>
    )
}