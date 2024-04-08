import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const LoginPage = () => {
    const {user, setUser} = useContext(UserContext);

  const onSetLogin = () => {
    console.log('login');

    setUser({
      name: 'Ricardo Montes',
      email: 'rm@gmail.com'
    });
  }

  return (
    <>
      <h2> Login Page </h2>
      <br />

      <div>
        <span> User data</span>

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>

        <button
          onClick={onSetLogin}
        >
          Login
        </button>

      </div>
    </>
  )
}
