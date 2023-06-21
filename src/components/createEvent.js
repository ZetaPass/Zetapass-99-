import React from 'react'
import Navbar from './Navbar';
import Strokebtn from './Strokebtn';
import "./css/createEvent.css";
import profile from "./Images/profile.jpeg";
export const CreateEvent = () => {
    const buttonStyle ={
        position: 'absolute',
        marginTop:'-20rem',
        marginLeft:'35rem',

    }
    const gradientBackgroundStyle = {
        background: 'linear-gradient(to bottom, black, #012137 60%, black)'
      };

    return (
        <div style={gradientBackgroundStyle}>
          <Navbar />
          <div className='page-name'>
            <Strokebtn title="" fill="" />
          </div>
          <div className="absolute top-30 right-0 mr-20 mt-20">
            <div className="rounded-full h-20 w-20 overflow-hidden border-white border-2">
              <img
                className="object-cover h-full w-full"
                src={profile}
                alt="Profile"
              />
            </div>
          </div>
          <img
            className="mt-60 ml-44 brightness-50"
            src={profile}
            alt="profile"
          />
          <button
          style={buttonStyle}
            className="h-12 w-52 rounded-full bg-white ml-96 -mt-80 text-gray-600"
          >
            Add a banner
          </button>
        </div>
      );
    };

    export default CreateEvent;