import { useState } from 'react'
import { GlobalSvgSelector } from '../../../assets/icons/GlobalSvgSelector'
import { peoplesType } from '../../../redux/state'
import st from './Messages.module.scss'

interface IProps {
    peoples: peoplesType
}

export const Messages = (props: IProps) => {

    const [text, setText] = useState('')
    const [dialog, setDialog] = useState(props.peoples)

    const printText = dialog[2].dialog.map(
        (e,index) => (e.who === 'He') ? (<div key={index} className={st.dialogMessageHe}><p>{e.message}</p></div>) : (<div key={index} className={st.dialogMessageMe}><p>{e.message}</p></div>)
    )

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }




    const setMessage = (text: string) => {
        let date = new Date();
        let time = String(date.getHours()) + ':' + date.getMinutes();
        
        let newMessage = {
            who: "You",
            message: text,
            time: time
        }

        let message = dialog[2].dialog
        dialog[2].dialog = [...message, newMessage]

        setDialog({ ...dialog })
    }

    const setTaskHandler = () => {
        if (text.trim()) {
            setMessage(text)
            setText('')
        }
    }

    return (
        <div className={st.message}>
            <div className={st.border}>
                <div className={st.wrapper}>
                    <div className={st.content}>
                        <div className={st.ava}>
                            <img src={dialog[2].img} className={st.ava}></img>
                        </div>
                        <div className={st.name}>{dialog[2].name}</div>
                    </div>
                    <div className={st.call}><GlobalSvgSelector id='call' /></div>
                </div>
            </div>
            <div className={st.dialog}>
                {printText}
            </div>
            <div className={st.input}>
                <div className={st.formGroup}>
                    <input
                        type="text"
                        placeholder='Type your message'
                        className={st.formField}
                        value={text}
                        onChange={onChangeHandler}
                    />
                    <div className={st.sendText} onClick={setTaskHandler}>
                        <GlobalSvgSelector id='send' />
                    </div>
                </div>
            </div>
        </div>
    )
}