import React from 'react'
import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";

function Auth() {
  return (
    <div className='h-[100vh] w-[100vw]  flex justify-center items-center' >
        <div className='h-[80vh] bg-white  border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw]  rounded grid xl:grid-clos-2 '>
            <div className='flex flex-col gap-10 items-center justify-center' 
            >
                <div className='flex flex-col  items-center justify-center'>
                    <div
                    className='flex items-center justify-center'>
                        <h1 className="text-5xl font-bold md:6xl">WELCOME
                        </h1>
                        <img src={Victory} alt="victory emoji" className='h-[100px]'/>

                    </div>

                </div>

            </div>

        </div>


    </div>
  )
}

export default Auth