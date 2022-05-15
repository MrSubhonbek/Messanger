import { GlobalSvgSelector } from '../../../assets/icons/GlobalSvgSelector'
import { peoplesType } from '../Sidebar'
import st from './Messages.module.scss'

interface IProps {
    peoples: peoplesType
}

export const Messages = (props: IProps) => {
    return (
        <div className={st.message}>
            <div className={st.border}>
                <div className={st.wrapper}>
                    <div className={st.content}>
                        <div className={st.ava}>
                            <img src={props.peoples[2].img} className={st.ava}></img>
                        </div>
                        <div className={st.name}>{props.peoples[2].name}</div>
                    </div>
                    <div><GlobalSvgSelector id='call' /></div>
                </div>
            </div>
            <div className={st.input}>
                <div className={st.formGroup}>
                    <input type="text" placeholder='Type your message' className={st.formField} />
                    <div className={st.sendText}>
                        <GlobalSvgSelector id='send' />
                    </div>
                </div>
            </div>
        </div>
    )
}