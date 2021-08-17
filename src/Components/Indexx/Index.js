import React from 'react';
import PhotoCollage from "./Components/Photo-Collage";
import useWindowSize from '../Utility/Window/WIndowSize';
import Nav from "../Utility/Nav/unAuth/Nav";

function Login(){
    const windowSize = useWindowSize();
    let phoneTemplate;

    if(windowSize.width <= 700){
        phoneTemplate = <PhotoCollage/>;
    } else{
        phoneTemplate = (
          <div className="flex justify-center">
              <img src="../Static-Images/phone-image.jpg" alt="" className="w-60"/>
          </div>
        );
    }

    return(
        <>
            <Nav/>
            <section className="overflow-hidden">
                <div className="text-center my-12 text-xl md:text-2xl lg:text-5xl font-light">
                    <h2>Express yourself in a modern way</h2>
                </div>

                { phoneTemplate}
                
                <div className="text-center my-12 text-xl font-light md:text-2xl lg:text-5xl">
                    <h3>with moodboard.</h3>
                </div>
                <div className="flex justify-center py-3 pb-16">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-72">Create an account</button>
                </div>
            </section>
        </>
    )
}

export default Login
