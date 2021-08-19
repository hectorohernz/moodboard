import React from "react";
import Nav from "../Utility/Nav/unAuth/Nav";
import SignInForm from "./Components/SignIn-Form";
import useWindowSize from "../Utility/Window/WIndowSize";


function IndexMobileScreen() {
  return (
    <section className="pt-2 px-4	flex flex-col items-center">
      <div className="font-medium text-2xl">
        <h2>Sign in into MoodBoard</h2>
      </div>
      <SignInForm />
      <div className="text-center flex justify-center pt-2">
        <img src="./Static-Images/puzzle-14.png" className="w-2/4	 text-center" alt="" />
      </div>
    </section>
  );
}

function IndexLargerScreen(){
  return(
      <>
        <h1>Phone Screener</h1>
      </>
  );
}


function Index() {
  const windowSize = useWindowSize();
  let properMarkUpViaScreenSize;

  if(windowSize.width <= 700){
      properMarkUpViaScreenSize =  <IndexMobileScreen/>;
  } else{
      properMarkUpViaScreenSize = <IndexLargerScreen/>;
  }
  
  // Declare a new state variable, which we'll call "count"s
  return (
    <>
      <Nav />
      {properMarkUpViaScreenSize}
    </>
  );
}

export default Index;
