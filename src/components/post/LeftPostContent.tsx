import React from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function LeftPostContent() {
  return (
    <div className="w-3/5 border-r border-themeBgNotification p-5">
    <div className="TogglePostsButtons flex gap-x-5 text-themeLabelQuard text-base items-center">
      <div className="cursor-pointer hover:bg-themeBgSecondary hover:text-themeLabelTertiary text-themeLabelQuard p-3 rounded-lg">
        <SlArrowLeft></SlArrowLeft>
      </div>

      <div className="cursor-pointer hover:bg-themeBgSecondary hover:text-themeLabelTertiary text-themeLabelQuard p-3 rounded-lg">
        <SlArrowRight></SlArrowRight>
      </div>
    </div>
    <p className='my-5 font-bold text-white '>React: Performing Authentication with JWT</p>
    <p className='text-base border-l-2 px-4 border-themePurpleButton text-themeLabelSeconday'>This article will discuss how to perform JWT authentication in a React app. We will cover the steps involved in setting up a backend JWT endpoint, signing up and signing in from your React app, and protecting routes with JWT validation. You will use a custom-built Express server API to relay the JWT token for a user.</p>
    <div className='flex flex-wrap flex-row my-5 gap-2'>
      <p className='text-base px-4 py-0.5 bg-themeBgNotification rounded-md text-themeLabelQuard'>#react</p>
      <p className='text-base px-4 py-0.5 bg-themeBgNotification rounded-md text-themeLabelQuard'>#react</p>
      <p className='text-base px-4 py-0.5 bg-themeBgNotification rounded-md text-themeLabelQuard'>#react</p>
      <p className='text-base px-4 py-0.5 bg-themeBgNotification rounded-md text-themeLabelQuard'>#react</p>
    </div>

    <div className="max-w-lg mx-auto ">
        <img
          src={'https://picsum.photos/600/400'}
          alt="Image"
          className="w-full h-40 rounded-lg object-cover "
        ></img>
      </div>
  
  </div>
  )
}

export default LeftPostContent