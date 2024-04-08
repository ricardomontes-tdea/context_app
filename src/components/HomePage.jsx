import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export const HomePage = () => {
  const { user } = useContext(UserContext)
  
  return (
   <>
    <h2> Home Page </h2>

    <br />
    
    <h3>Welcome { user?.name } </h3>
    <hr />

    <pre>
      { JSON.stringify(user) }
    </pre>
   </>
  )
}
