import { GlobalSvgSelector } from '../../../assets/icons/GlobalSvgSelector'
import st from './Navbar.module.scss'

interface IProps {

}

export const Navbar = (props: IProps) => {
    return (
        <div className={st.navbar}>
            <div className={st.wrapper}></div>
            <div className={st.icons}>
                <div className={st.overview}><GlobalSvgSelector id='overview' /></div>
                <div className={st.people}><GlobalSvgSelector id='people' /></div>
                <div className={st.calendar}><GlobalSvgSelector id='calendar' /></div>
                <div className={st.files}><GlobalSvgSelector id='files' /></div>
                <div className={st.video}><GlobalSvgSelector id='video' /></div>
                <div className={st.setting}><GlobalSvgSelector id='setting' /></div>
            </div>
        </div>
    )
}