import { MessageInfoBar } from "./messageInfoBar/MessageInfoBar"
import { Navbar } from "./sidebar/Navbar"
import { SharedMedia } from "./media/SharedMedia"
import st from './Sitebar.module.scss'
import { Profile } from "./profile/Profile"

interface IProps {

}

export const Sitebar = (props: IProps) => {
    return (
        <div className={st.container}>
            <Navbar />
            {/*<MessageInfoBar />*/}
            <Profile/>
            <SharedMedia />
        </div>
    )
}