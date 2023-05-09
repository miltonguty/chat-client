import { useState } from "react"

const RegistreForm = ({ onclickJoin }) => {
    const [nickName, setNickName] = useState("")
    const handleOnClick = () => {
        onclickJoin(nickName)
    }
    return (
        <div className=" flex justify-center  items-center">
            <div className="w-90  border-2 border-solid p-5" >
                <input className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" placeholder=" input nickName" onChange={ (env) => setNickName(env.target.value) } />
                <button className="w-full mt-5 bg-transparent hover:bg-slate-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-slate-700 hover:border-transparent rounded" onClick={ handleOnClick } disabled={ nickName === "" }> join .. Connect </button>
            </div>
        </div >
    )
}
export default RegistreForm