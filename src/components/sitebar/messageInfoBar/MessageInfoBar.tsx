import { Messages } from "./Messages"
import st from './MessageInfoBar.module.scss'
import { Chats } from "./Chats"
import { peoplesType } from "../Sitebar"

interface IProps {
    peoples:peoplesType
}

export const MessageInfoBar = (props: IProps) => {
    return (
        <div className={st.messageInfoBar}>
            <Chats peoples={props.peoples}/>
            <Messages />
        </div>
    )
}