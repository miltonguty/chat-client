import logo from './logo.svg'
import { createContext, useEffect, useState } from 'react'
import { socket } from './services/socket'
import RegistreForm from './components/registreForm'
import ChatForm from './components/chatForm'
export const UserContext = createContext()

function App () {
  const [connected, setConnected] = useState(false)

  const [user, setUser] = useState(null)

  const [ListUser, setListUser] = useState([])
  const [message, setMessage] = useState()

  const onclickJoin = (nickName) => {
    socket.connect()
    socket.emit('registre', nickName)
    console.log(nickName)
  }
  const handleOnclickSendMessage = (message) => {
    socket.emit("sendMesssage", { user, message })

  }

  const handleOnCloseSession = () => {

    socket.close()
    setUser(null)
  }
  useEffect(() => {

    function onConnect () {
      setConnected(true)
    }
    function onDisconnect () {

      setConnected(false);
    }
    function onReciveMessage (message) {
      setMessage(message)
    }
    function onNewUser (user) {
      setUser(user)
    }
    function onReciveUsers (listUsers) {
      setListUser(listUsers)
    }
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('newUser', onNewUser)
    socket.on('reciveMessage', onReciveMessage)
    socket.on('reciveUsers', onReciveUsers)
    return () => {

    };
  }, [])
  return (
    <>
      <header className="App-header min-h-screen mt-5 ">
        { !connected && !user && (<>
          <center><img src={ logo } className=" w-32" alt="logo" /></center>
          <center><h1 className="text-3xl font-bold underline pb-5"> Guty-Chat</h1></center>
        </>
        )
        }
        { connected && user && (<div className='p-5'>

          <center> <div className=" inline-block text-3xl font-bold  pb-5 "> Guty</div> <img src={ logo } className="inline-block w-24 -mt-10 " alt="logo" /><div className='inline-block text-3xl font-bold  pb-5'>Chat</div></center>
        </div>
        )
        }
        { !user && (<RegistreForm onclickJoin={ onclickJoin } />) }
        { !connected && (<div className='text-center pt-5 text-red-600 text-[10px]'> please set your nickname to start chatting</div>) }
        { !connected && (<div className='text-center pt-5 text-red-600 text-[10px]'> connected with server { process.env.REACT_APP_SERVER_URL }</div>) }
        { connected && user && (
          <UserContext.Provider value={ user }>
            <div className='w-full md:flex md:justify-center md:items-center md:hmd:-96'>
              <ChatForm ListUser={ ListUser } message={ message } handleOnclickSendMessage={ handleOnclickSendMessage } handleOnCloseSession={ handleOnCloseSession } />
            </div>
          </UserContext.Provider>
        ) }


      </header >

    </>
  );
}

export default App;
