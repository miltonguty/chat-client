import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App";

const Messages = ({ message }) => {
    const [messages, setMessages] = useState([])
    const user = useContext(UserContext);
    useEffect(() => {
        if (message) {
            const msg = [...messages, message]
            setMessages(msg)
        }
    }, [message])
    return (
        <>
            {
                messages.map((msg, index) => (
                    <div key={ msg + index } >
                        {
                            msg.id === user.socketId && (
                                <div className="text-right w-full  p-2">
                                    <span className="bg-slate-400 w-auto p-1 rounded-xl ">
                                        <span className="text-slate-500"> { msg.message }</span>
                                    </span>
                                </div>)
                        }
                        {
                            msg.id !== user.socketId && (
                                <div className="text-left w-full ">
                                    <div className="inline-block">
                                        <span className="bg-slate-100 text-slate-500 rounded-xl px-2 inline-block w-full"> { msg.message }</span>
                                        <span className=" relative -top-3  bg-slate-100 text-slate-800  text-[10px] rounded-xl  px-2 inline-block"> { msg.nickName }</span>
                                    </div>

                                </div>
                            )
                        }

                    </div>
                )
                )
            }
        </>
    )
}
export default Messages