
import UserList from "./userList"
import Messages from "./messages"
import InputMessage from "./inputMessage"
import users from '../users.svg'
import { useState } from "react"
const ChatForm = ({ ListUser, message, handleOnclickSendMessage, handleOnCloseSession }) => {
    const [showUsers, setShowUsers] = useState(false)
    const handleOnshowUsers = (env) => {
        setShowUsers(!showUsers)
    }
    return (
        <div className="w-full  md:w-4/6 relative ">

            <button className='absolute right-5 md:-right-6 -top-16 md:-top-11 border-4 rounded-md mt-5 bg-transparent hover:bg-slate-500 text-black-700 font-semibold hover:text-black py-2 px-4  border-slate-700 hover:border-transparent ' onClick={ handleOnCloseSession }> X </button>
            <button className='md:hidden absolute left-5 -top-[45px] border-4 rounded-md md:mt-5 bg-transparent hover:bg-slate-500 text-black-700 font-semibold hover:text-black h-12 w-12  border-slate-700 hover:border-transparent ' onClick={ handleOnshowUsers }>
                <center>  <img src={ users } className=" w-5" alt="user logo" /> </center>
            </button>
            <div className=' bg-slate-100  border-4 border-black overflow-hidden relative m-5'>

                <div className={ showUsers ? "hidden md:block float-left w-1/4" : "md:block  md:float-left md:w-1/4" }>
                    <UserList users={ ListUser }></UserList>
                </div>
                <div className=' w-full  md:w-3/4 float-left md:h-96  border-l-2 border-solid'>
                    <div className='h-[640px] md:h-80 overflow-y-auto p-3 bg-white '>
                        <Messages message={ message } ></Messages>
                    </div>
                    <div className=' border-t-2 px-3 py-3 md:h-14 bg-white  '>
                        <InputMessage onClickSendMessage={ handleOnclickSendMessage }></InputMessage>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatForm