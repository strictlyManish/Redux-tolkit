import GradientText from './../components/GradientText';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../app/features/authSlice';


function Login() {

  const {register,handleSubmit,reset,formState:{errors} } = useForm()

  const dispatch = useDispatch();

  const handellogin = async (data) =>{
    const {email,password} = data;
      dispatch(loginUser({email,password}))
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
            Welcome <br /> Back!
          </GradientText>
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/4 flex flex-col gap-4 p-6 sm:p-8 lg:p-25">
        <form onSubmit={handleSubmit(handellogin)}>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize font-semibold">login</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Welocome back! Please login your account</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input {...register('email')} className="p-3 bg-gray-700 outline-0 rounded" type="text" id="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input {...register("passowrd")} className="p-3 bg-gray-700 outline-0 rounded" type="text" id="password" placeholder="Password" />
          </div>
          <br />
          <button type='submit' className="bg-blue-700 w-full p-3 rounded cursor-pointer text-sm sm:text-base font-medium active:bg-pink-600">Login</button>
        </form>
        <p className="text-xs sm:text-sm text-gray-400">Don't have an account ? <a className="text-blue-600 underline" href="/register">Register</a></p>
      </div>
    </div>
  )
}

export default Login