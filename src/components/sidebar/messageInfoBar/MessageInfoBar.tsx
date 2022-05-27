import { Messages } from "./Messages"
import st from './MessageInfoBar.module.scss'
import { Chats } from "./chats/Chats"
import { peoplesType } from "../../../redux/state"

interface IProps {
    peoples:peoplesType
}

export const MessageInfoBar = (props: IProps) => {
    return (
        <div className={st.messageInfoBar}>
            <Chats peoples={props.peoples}/>
            <Messages peoples={props.peoples}/>
        </div>
    )
}