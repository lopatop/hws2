import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios, {AxiosError} from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const disabled = info === '...loading'


    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc'
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')


        axios
            .post(url, {success: x})
            .then((res) => {
                const errorText =res.data.errorText
                const info =res.data.info
                setCode('Код 200!')
                setImage(success200)
                setText(errorText);
                setInfo(info)
                console.log(res)
            })
            .catch((e) => {
                if (axios.isAxiosError(e)) {
                    const err = e as AxiosError<{ info: string, errorText:string }>
                    const status = err.response?.status
                    const message = err.response?.data?.info || e.message
                    const errorText = err.response?.data?.errorText || e.message
                    console.log(e)

                    if (status === 500) {
                        setCode('Ошибка 500')
                        setImage(error500)
                        setText(errorText )
                        setInfo(message)
                    } else if (status === 400) {
                        setCode('Ошибка400')
                        setImage(error400)
                        setText(errorText  )
                        setInfo(message)
                    } else {
                        setCode('Error!')
                        setImage(errorUnknown)
                        setText(e.name)
                        setInfo(e.message)

                    }
                }
            })

    }

    return (
        <div id={'hw13'} className={s.wrapper} >
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton id={'hw13-send-true'} onClick={send(true)} xType={'secondary'} disabled={disabled}>
                        Send true
                    </SuperButton>
                    <SuperButton id={'hw13-send-false'} onClick={send(false)} xType={'secondary'} disabled={disabled}>
                        Send false
                    </SuperButton>
                    <SuperButton id={'hw13-send-undefined'} onClick={send(undefined)} xType={'secondary'} disabled={disabled}>
                        Send undefined
                    </SuperButton>
                    <SuperButton id={'hw13-send-null'} onClick={send(null)} xType={'secondary'} disabled={disabled}>
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>{code}</div>
                        <div id={'hw13-text'} className={s.text}>{text}</div>
                        <div id={'hw13-info'} className={s.info}>{info}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
