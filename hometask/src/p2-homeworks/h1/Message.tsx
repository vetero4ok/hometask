import React from 'react'
import s from './Message.module.css'

type PropsMessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string


}

function Message(props: PropsMessageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>

            <div className={s.angle}/>

            <div className={s.text_area}>
                <div className={s.name_user}>{props.name} </div>
                <div className={s.text_message}> {props.message}</div>
                <div className={s.time}>{props.time}</div>

            </div>

        </div>
    )
}

export default Message
