const UserList = ({ users = [] }) => {

    return (
        <div className="bg-slate-100  overflow-y-auto ">
            <center><h1 className="bg-slate-400 p-3">User Connected</h1></center>
            <hr></hr>
            <div className=" py-3">
                {
                    users.map((user, index) =>
                        (<div className="hover:bg-slate-200 p-2 hover:text-center" key={ user.nickName + index }> { user.nickName } </div>)
                    )
                }
            </div>
        </div>
    )
}
export default UserList
