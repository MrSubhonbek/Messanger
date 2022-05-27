import { IMessages } from '../../../../redux/state';
import st from './Dialogs.module.scss'

interface IProps {
    name: string,
    ava: string,
    text: Array<IMessages>
}

export const Dialogs = (props: IProps) => {
    return (
        <div className={st.dialogs}>
            <div className={st.wrapper}>
                <div className={st.ava}>
                    <img src={props.ava} className={st.ava}></img>
                </div>
                <div className={st.wrapperAva}>
                    <div className={st.name}>{props.name}</div>
                    <div className={st.text}>{props.text[props.text.length - 1].who}: {props.text[props.text.length - 1].message}</div>
                </div>
            </div>
        </div>
    );
}