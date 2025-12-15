import React from 'react'

function Home() {
  return (
    <div className='px-4 mt-5 flex flex-col justify-around items-center h-full'>
      <div className='flex flex-col gap-5 h-1/5'>
        <p className='text-yellow-500 text-2xl '>Hello I'am Manish</p>
        <p className='text-gray-300'>I’m a passionate web developer who builds clean, responsive, and user-friendly websites.
          I enjoy turning ideas into functional digital experiences using modern web technologies.
          I’m constantly learning and improving to create better and more impactful web solutions.
        </p>
      </div>
      <button className='bg-yellow-600 px-10 py-3 uppercase rounded mt-5'>about me</button>
      <div className='h-1/2'>
        <svg
          width="360"
          height="360"
          viewBox="0 0 100 100"
          className="rounded-3xl overflow-hidden"
        >
          <image
            href="/hero.jpeg"
            x="0"
            y="0"
            width="100"
            height="100"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </div>
  )
}

export default Home