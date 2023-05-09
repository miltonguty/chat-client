
import UserList from "./userList"
import Messages from "./messages"
import InputMessage from "./inputMessage"

const ChatForm = ({ ListUser, message, handleOnclickSendMessage, handleOnCloseSession }) => {

    return (
        <div className="w-4/6 relative h-full">

            <button className='absolute -right-6 -top-11 border-4 rounded-md mt-5 bg-transparent hover:bg-slate-500 text-black-700 font-semibold hover:text-black py-2 px-4  border-slate-700 hover:border-transparent ' onClick={ handleOnCloseSession }> X </button>
            <div className='border-4 border-black overflow-hidden relative m-5'>

                <div className=' float-left w-1/4 '>
                    <UserList users={ ListUser }></UserList>
                </div>
                <div className='  w-3/4 float-left    h-96 '>
                    <div className=' h-80 overflow-y-auto p-3'>
                        <Messages message={ message } ></Messages>
                    </div>
                    <div className=' border-t-2 px-3 py-3 h-14 '>
                        <InputMessage onClickSendMessage={ handleOnclickSendMessage }></InputMessage>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatForm