import { Messages } from "./Messages"
import st from './MessageInfoBar.module.scss'
import { Chats } from "./Chats"
interface IProps {

}

export const MessageInfoBar = (props:IProps) => {
    return (
        <div className={st.messageInfoBar}>
            <Chats/>
            <Messages/>
        </div>
    )
}