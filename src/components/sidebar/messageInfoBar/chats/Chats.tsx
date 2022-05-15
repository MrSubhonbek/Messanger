import { fchownSync } from 'fs';
import { AvaSvgSelector } from '../../../../assets/icons/AvaSvgSelector';
import { peoplesType } from '../../Sidebar';
import st from './Chats.module.scss'
import { Dialogs } from './Dialogs';

interface IProps {
    peoples: peoplesType
}

interface IAva {
    url: string
}

const Ava = (url: IAva) => {
    return (
        <img src={url.url} className={st.ava}></img>
    );
}

export const Chats = (props: IProps) => {

    const urlHandler = props.peoples.slice(0, 4).map((element, index) => {
        return (
            <Ava key={index} url={element.img} />
        )
    })

    const dialogsHandler = props.peoples.map(
        (element) => {
            return (
                <Dialogs ava={element.img} name={element.name} text={element.dialog} />
            )
        }
    )

    return (
        <div className={st.chats}>
            <div className={st.wrapper}>
                <div className={st.avatars}>
                    <div className={st.plus}> <AvaSvgSelector id={1} /></div>
                    {urlHandler}
                </div>
            </div>
            {dialogsHandler}
        </div>
    )
}


