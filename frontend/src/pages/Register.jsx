import { useForm } from 'react-hook-form';
import GradientText from './../components/GradientText';

function Register() {

  const {
    handleSubmit,
    register,
    reset,
    formState: { error }

  }= useForm()


  const loginform = (data) =>{
    console.log(data)
  }


  return (
    <div className="flex flex-col lg:flex-row h-screen items-center justify-center">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-around items-center px-4 py-8 lg:py-0">
        <p className="text-4xl sm:text-6xl lg:text-8xl font-medium text-center lg:text-left">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Warm <br /> Welcome!
          </GradientText>
        </p>
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/4 flex flex-col gap-4 p-6 sm:p-8 lg:p-25">
        <form onSubmit={handleSubmit(loginform)}>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize font-semibold">Register</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Welocome ! Enter your details and create your account</p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="fullanem">Full Name</label>
            <input {...register('email',{required:'*'})} className="p-3 bg-gray-700 outline-0 rounded" type="text" id="fullname" placeholder="fullname" />
            <label htmlFor="email">Email</label>
            <input className="p-3 bg-gray-700 outline-0 rounded" type="text" id="email" placeholder="Email" />
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