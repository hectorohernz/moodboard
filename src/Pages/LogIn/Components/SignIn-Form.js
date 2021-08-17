import useInput from "../../Utility/Form/UseInput";
import {React, /*useState*/} from "react";

function SignInForm(){

    const {
        value: username,
        bind:bindUsername,
        reset: resetUsername
    } = useInput("");

    const {
        value: password,
        bind: bindPassword,
        reset: resetPassword,
      } = useInput("");

      //const [user, setUser] = useState(null);
      
      const fetchUser = (username, password) => {
        console.log(username,password);
      }

      const handleSubmit = (evnt) =>{
        evnt.preventDefault();
        fetchUser(username,password);
        resetPassword();
        resetUsername();
      }

      return(
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" {...bindUsername} placeholder="Username" />
            <label>Password:</label>
            <input type="text" {...bindPassword} placeholder="Password" />
            <input type="submit" value="Log In" disabled={!password || !username}/>
          </form>
      )

}

export default SignInForm;