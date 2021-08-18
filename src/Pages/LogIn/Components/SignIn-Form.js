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
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name"> Username </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" type="text" {...bindUsername} />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password"> Password </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" {...bindPassword} />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold">
      <input className="mr-2 leading-tight" type="checkbox" />
      <span className="text-sm">Remember Me</span>
    </label>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-full">
      <input type="submit" value="Log In" disabled={!password || !username} className="w-full border-black shadow bg-transparent hover:bg-purple-400 bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  disabled:opacity-25" />
    </div>
  </div>
</form>
    )

}

export default SignInForm;