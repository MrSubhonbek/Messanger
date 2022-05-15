import { AvaSvgSelector } from '../../../assets/icons/AvaSvgSelector';
import { peoplesType } from '../Sitebar';
import st from './Chats.module.scss'

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

    const urlHendler = props.peoples.map((element) => {
        return (
            <Ava url={element.img} />
        )
    })


    return (
        <div className={st.chats}>
            <div className={st.wrapper}>
                <div className={st.avatars}>
                    <div className={st.plus}> <AvaSvgSelector id={1} /></div>
                    {urlHendler}
                </div>
            </div>
        </div>
    )
}
