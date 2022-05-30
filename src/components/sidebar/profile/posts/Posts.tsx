import { Post } from './Post'
import st from './Posts.module.scss'
import { IState } from '../../../../redux/state'
import { GlobalSvgSelector } from '../../../../assets/icons/GlobalSvgSelector'
import { ChangeEvent, ChangeEventHandler, useState } from 'react'
interface IProps {
    state: IState
    addPost: ()=>void
    changeTextTitle: (title:string)=>void
    changeTextPost: (text:string)=>void
}

export const Posts = (props: IProps) => {

    const [addPost, setAddPost] = useState<boolean>(false)
    const onClickAddPostHandler = () => {
        setAddPost(!addPost)
    }
    const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.changeTextTitle(e.currentTarget.value)
    }
    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextPost(e.currentTarget.value)
    }
    const addPostHandler = () => {
        props.addPost();
        setAddPost(false)
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
                            value={props.state.currentTitleText}
                        />
                        <div className={st.sendText} onClick={addPostHandler}>
                            <GlobalSvgSelector id='send' />
                        </div>
                        <div className={st.sendText} onClick={onClickAddPostHandler}>
                            <GlobalSvgSelector id='cancel' />
                        </div>
                    </div>
                    <div className={st.newPost}>
                        <textarea 
                        name="textPost" 
                        onChange={onChangeTextHandler}
                        value = {props.state.currentPostText}
                        placeholder='Type your post' 
                        rows={10} 
                        id=""
                        ></textarea>
                    </div>
                </div>
            }
            <Post state={props.state} />
        </div>
    )
}