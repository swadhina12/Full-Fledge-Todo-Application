
import { useNavigate } from "react-router-dom"
import { useImmer } from 'use-immer'



import AddTodo from "./AddTodo"

import todosContext from "../../context/todosContext"





const Todos = () => {

    const [todos, setTodos] = useImmer([])
   
    const navigate = useNavigate()

  

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }



    return (
        <todosContext.Provider value={{
            todos,
            setTodos,
        }}>
           
            <section className="vh-100" style={{ backgroundColor: `#gray`, paddingTop: 100 }}>
                <i className="fa fa-sign-out signout" id="sign-out" title="log-out" onClick={logOut}>logout</i>
               
                                   
                                    <AddTodo />
                                   

            </section>
        </todosContext.Provider>
    )
}

export default Todos