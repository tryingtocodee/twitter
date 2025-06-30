import { lazy, useState } from "react"
import GeneralForm from "./components/form"
import GeneralButton from "./components/ui/button"

function App() {
  const [username , setUsername] = useState("")
  const input = [
    {
     label : "username",
     placeholder : "add username",
     onChange : (e : React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
     type : "text"
    },

    {
     label : "username",
     placeholder : "add username",
     onChange : (e : React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
     type : "text"
    }
]
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <GeneralForm formText="Submit" input={input} formOnClick={()=> console.log("submitted form")}/>
      </div>
    </>
  )
}

export default App
