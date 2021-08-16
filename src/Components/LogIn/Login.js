import React from 'react';
import PhotoCollage from "./Components/Photo-Collage";

function Login(){
    return(
        <>
            <section className="overflow-hidden">
                <div className="text-center my-12 text-xl font-light">
                    <h2>Express yourself in a modern way</h2>
                </div>
                <PhotoCollage/>
                <div className="text-center my-12 text-xl font-light">
                    <h3>with moodboard.</h3>
                </div>
                <button>Create an account</button>
            </section>
        </>
    )
}

export default Login
