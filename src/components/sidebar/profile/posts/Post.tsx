import st from './Post.module.scss'


interface IProps {
    text: string
    time: string
    title: string
  }

export const Post = (props: IProps) => {
    
    return (
        <div className={st.post}>
            <div className={st.ava}>Ava</div>
            <div className={st.wrapperAva}>
                <div className={st.wrapperText}>
                    <div className={st.title}>{props.title}</div>
                    <div className={st.time}>{props.time}</div>
                </div>
                <div className={st.text}>{props.text}</div>
            </div>
        </div>
    )
}