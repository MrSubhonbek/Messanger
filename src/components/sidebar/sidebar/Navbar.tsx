import { useNavigate } from 'react-router-dom'
import { GlobalSvgSelector } from '../../../assets/icons/GlobalSvgSelector'
import st from './Navbar.module.scss'

interface IProps {

}

export const Navbar = (props: IProps) => {
    const navigate = useNavigate();

    return (
        <div className={st.navbar}>
            <div className={st.wrapper}></div>
            <div className={st.icons}>
                <div className={st.overview} onClick={()=>navigate('/')}><GlobalSvgSelector id='overview' /></div>
                <div className={st.people} onClick={()=>navigate('/people')}><GlobalSvgSelector id='people' /></div>
                <div className={st.calendar} onClick={()=>navigate('/calendar')}><GlobalSvgSelector id='calendar' /></div>
                <div className={st.files} onClick={()=>navigate('/files')}><GlobalSvgSelector id='files' /></div>
                <div className={st.video} onClick={()=>navigate('/video')}><GlobalSvgSelector id='video' /></div>
                <div className={st.setting} onClick={()=>navigate('/setting')}><GlobalSvgSelector id='setting' /></div>
            </div>
        </div>
    )
}