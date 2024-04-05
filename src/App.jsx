import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import { addUser, deleteUser, updateUser} from './features/Users.js'
import {useState} from 'react'

function App() {
const dispatch = useDispatch();
const userList= useSelector((state)=> state.users.value)
const [name,setName]= useState("");
const [userName, setUserName] = useState("");
const [newUsername, setNewUserName] = useState("");
  return (
    <>
      <div className="flex flex-col items-center bg-white h-[200vh]">
            <div className="bg-slate-500 mt-12 h-[130px] w-[400px] shadow-[2px_2px_4px_white]">
              <h1 className=" font-bold text-white text-[18px] mt-1">Please Register your Name and Username</h1>
              <input className="mt-4 mr-[8px] text-black shadow-[5px_5px_20px_black] rounded-sm" type="text" placeholder="Name . . ." onChange={(e)=>setName(e.target.value)} />
            <input className="mt-2 text-black shadow-[5px_5px_20px_black] mb-3 rounded-sm" type="text" placeholder="Username . . ." onChange={(e)=>setUserName(e.target.value)} /><br></br>
            <button className="mt-2 bg-black text-white py-1 px-5 rounded-sm font-bold hover:text-black hover:bg-[#f9977B] hover:shadow-[2px_2px_20px_white]" 
            onClick={()=>{dispatch(addUser({id: userList[userList.length - 1].id+1, name: name, username: userName,}))}} >Add User</button>
            </div>
            <div className=" bg-slate-400 w-[400px] h-[80vh] mt-[5px] ">
              {userList.map((user, index)=>{
                  return <div key={index} className="w-[400px] h-[130px] bg-slate-500 text-cyan-100 mb-[15px]">
                          <h1 className="text-3xl">{user.name}</h1>
                          <h2 className="text-3xl">{user.username}</h2>
                          <input className="mr-[10px] text-black rounded-sm" type="text" placeholder="Update Username....." onChange={(e)=>setNewUserName(e.target.value)}/>
                          <button className="mt-2 bg-blue-900 text-white py-1 px-3 rounded-sm font-bold mr-2 hover:text-black hover:bg-[#f9977B] hover:shadow-[2px_2px_20px_white]"
                          onClick={()=>{dispatch(updateUser({id: user.id, username: newUsername}))}}>update</button>
                          <button className="mt-2 bg-red-600 text-white py-1 px-3 rounded-sm font-bold mr-2 hover:text-black hover:scale-[1.2] hover:shadow-[2px_2px_20px_black]"
                          onClick={()=>{dispatch(deleteUser({id: user.id}))}}>delete</button>
                        </div> 
              })}
            </div>
      </div>
    </>
  )
}

export default App
