import { useForm } from 'react-hook-form';
import GradientText from './../components/GradientText';
// import axios from '../api/api';
import axios from "axios"


function Register() {

  const {
    handleSubmit,
    register,
    reset,
    formState: { error }

  }= useForm()


  const Registercontroller = async (data) =>{
    console.log(data)
    //  fullname, email, password
    const response = await axios.post("http://localhost:4000/api/register",{
      fullname: data.fullname,
      email:data.email,
      passowrd:data.passowrd
    });

    console.log(response)
  }


  return (
    <div className="flex flex-col lg:flex-row h-screen items-center justify-center">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-around items-center px-4 py-8 lg:py-0">
        
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-8xl"
          >
            Warm <br /> Welcome!
          </GradientText>
       
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/4 flex flex-col gap-4 p-6 sm:p-8 lg:p-25">
        <form onSubmit={handleSubmit(Registercontroller)}>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize font-semibold">Register</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Welocome ! Enter your details and create your account</p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="fullanem">Full Name</label>
            <input {...register('fullname',{required:'*'})} className="p-3 bg-gray-700 outline-0 rounded" type="text" id="fullname" placeholder="fullname" />
            <label htmlFor="email">Email</label>
            <input {...register("email")} className="p-3 bg-gray-700 outline-0 rounded" type="text" id="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input {...register('password',{required:'*'})} className="p-3 bg-gray-700 outline-0 rounded" type="text" id="password" placeholder="Password" />
          </div>
          <br />
          <button type='submit' className="bg-blue-700 w-full active:bg-pink-600 cursor-pointer p-3 rounded text-sm sm:text-base font-medium">Register</button>
        </form>
        <p className="text-xs sm:text-sm text-gray-400">Already have an account ? <a className="text-blue-600 underline" href="/login">login</a></p>
      </div>
    </div>
  )
}

export default Register