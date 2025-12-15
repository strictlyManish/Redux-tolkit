import React from 'react'

function Home() {
  return (
    <div className='px-4 mt-5'>
      <div className='flex flex-col gap-5'>
        <p className='text-yellow-500 text-2xl '>Hello I'am <span className='underline'>Manish</span></p>
        <p>I’m a passionate web developer who builds clean, responsive, and user-friendly websites.
          I enjoy turning ideas into functional digital experiences using modern web technologies.
          I’m constantly learning and improving to create better and more impactful web solutions.
        </p>
      </div>
      <button className='bg-yellow-600 px-10 py-3 uppercase rounded mt-5'>about me</button>
      <div></div>
    </div>
  )
}

export default Home