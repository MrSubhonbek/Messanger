import { MessageInfoBar } from "./messageInfoBar/MessageInfoBar"
import { Navbar } from "./sidebar/Navbar"
import { SharedMedia } from "./media/SharedMedia"
import st from './Sidebar.module.scss'
import { Profile } from "./profile/Profile"


import { Routes, Route } from 'react-router-dom'
import {peoples} from '../../redux/state'

interface IProps {

}

export const Sidebar = (props: IProps) => {
    return (
        <div className={st.container}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/people" element={<MessageInfoBar peoples={peoples} />} />
            </Routes>
            <SharedMedia />
        </div>
    )
}