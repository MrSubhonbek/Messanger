import { Post } from './Post'
import st from './Posts.module.scss'
import { IState } from '../../../../redux/state'
import { GlobalSvgSelector } from '../../../../assets/icons/GlobalSvgSelector'
import { useState } from 'react'
interface IProps {
    state: IState
    addPost: ()=>void
}

export const Posts = (props: IProps) => {

    const [addPost, setAddPost] = useState<boolean>(false)
    const onClickAddPostHandler = () => {
        setAddPost(!addPost)
    }
    const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.state.currentTitleText = e.currentTarget.value
        console.log(props)
    }

    return (
        <div className={st.posts}>
            <div className={st.title}>
                <div className={st.myPost}>My Posts</div>
                {!addPost && <div className={st.addPost} onClick={onClickAddPostHandler}><GlobalSvgSelector id={'plus'} /></div>}
            </div>
            {
                addPost &&
                <div className={st.wrapper}>
                    <div className={st.formGroup}>
                        <input
                            type="text"
                            placeholder='Title'
                            onChange={onChangeTitleHandler}
                            className={st.formField}
                        />
                        <div className={st.sendText} onClick={props.addPost}>
                            <GlobalSvgSelector id='send' />
                        </div>
                        <div className={st.sendText} onClick={onClickAddPostHandler}>
                            <GlobalSvgSelector id='cancel' />
                        </div>
                    </div>
                    <div className={st.newPost}>
                        <textarea name="textPost" placeholder='Type your post' rows={10} id=""></textarea>
                    </div>
                </div>
            }
            <Post state={props.state} />
        </div>
    )
}