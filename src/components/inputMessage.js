import { useState } from "react"

const InputMessage = ({ onClickSendMessage }) => {
    const [message, setMessage] = useState("")
    const handleonClick = () => {
        onClickSendMessage(message)
        setMessage("")
    }
    return (
        <div className="h-full flex items-center justify-center">
            <input className="w-5/6 border-cyan-800 border-solid  h-14" type="text" placeholder="input your message" onChange={ (env) => setMessage(env.target.value) } value={ message } />
            <button className="w-1/6 right-0 bg-stone-950 text-white h-14 " onClick={ handleonClick } > SEND</button>

        </div>
    )
}
export default InputMessage