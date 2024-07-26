import { useNavigate } from "react-router-dom"


export function Logout(){

    const navigate = useNavigate();
    function logoutHandler(){

       localStorage.clear();
       navigate('/signin')

    }

    return<>
    
    <button onClick={logoutHandler} type="button" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 ">Logout</button>

    
    </>
}