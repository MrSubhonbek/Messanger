import { IState } from '../../../../redux/state'
import st from './Post.module.scss'


interface IProps {
    state: IState
}

export const Post = (props: IProps) => {

    const posts = props.state.posts.map(
        (e, index) => {
            return (
                <div key={index} className={st.post}>
                    <div className={st.ava}>Ava</div>
                    <div className={st.wrapperAva}>
                        <div className={st.wrapperText}>
                            <div className={st.title}>{e.title}</div>
                            <div className={st.time}>{e.time}</div>
                        </div>
                        <div className={st.text}>{e.text}</div>
                    </div>

                </div>
            )
        }
    )


    return (
        <div>
            {posts}
        </div>
    )
}