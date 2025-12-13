function Home() {
  return (
    <div className='p-4 flex flex-col justify-between items-center gap-10' >
        <div>
            <img src="hero.png"/>
        </div>
        <div className=" text-center">
            <div>
                <p>Web Developer</p>
                <h1>MANISH KUMAR</h1>
            </div>
            <div className="flex gap-5 mt-5">
                 <button className="bg-gray-600 px-5 py-2">Hire me !</button>
                 <button className="bg-gray-600 px-5 py-2">Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Home