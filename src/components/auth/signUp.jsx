import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const { getValues, register, handleSubmit, formState: { errors } } = useForm()
    const nav = useNavigate()

    const onSub = (_bodyData) => {
      }
    const validateConfirmPassword = (value) => {
        if (value !== getValues('password')) {
          return 'Passwords do not match';
        }
      };
      const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      
    return (
    <div>
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth:'1000px'}}>
        <form onSubmit={handleSubmit(onSub)}  className="md:flex w-full">
            <div style={{backgroundImage:'url(https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/11/Tesla-Roadster-103.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}  className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
      
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-4">
                    <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 ">
                            <label  className="text-xs font-semibold px-1">First name:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="First name..."/>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-2">
                            <label  className="text-xs font-semibold px-1">Last name:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Last name..."/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <label  className="text-xs font-semibold px-1">Email:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email..."/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <label  className="text-xs font-semibold px-1">Image Profile Link:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Image Profile Link..."/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <label  className="text-xs font-semibold px-1">password:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="password..."/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label  className="text-xs font-semibold px-1">Confirm Password:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="confirm password..."/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.tesla.com/he_il" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://www.jbedgelitsigns.com.au/wp-content/uploads/2022/05/Tesla-Logo-4.jpg"/>
        </a>
    </div>
</div>
    </div>
  )
}

export default SignUp