import React from "react";
import Nav from "../Utility/Nav/unAuth/Nav";
import SignInForm from "./Components/SignIn-Form";

function Index() {
  // Declare a new state variable, which we'll call "count"s
  return (
    <>
      <Nav/>
      <section className="pt-2 px-4	">
          <div className="font-medium text-xl">
            <h2>Log In</h2>
          </div>
          <SignInForm/>
      </section>
    </>
  );
}

export default Index;