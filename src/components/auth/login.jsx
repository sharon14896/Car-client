import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LOGIN_ROUTE } from '../../shared/constant/url'
import { useNavigate } from 'react-router-dom'
import { apiPost } from '../../shared/services/services'

const Login = () => {
  const { getValues, register, handleSubmit, formState: { errors } } = useForm()

  const nav = useNavigate()
  const [errMsg,setErrMsg] = useState(null)
  const login = async(_bodyData) =>{
      try{
          setErrMsg(null)
          const {data} = await apiPost(LOGIN_ROUTE,_bodyData);
          console.log(LOGIN_ROUTE);
          nav('/')
          console.log(data)
      }catch(err){
          console.log(err.response.data.err_msg)
              
              setErrMsg(err.response.data.err_msg)

              
          
      }
  }

  const fixJsonFormat = (_bodyData) => {
      const format = {
          password: _bodyData.password,
          email: _bodyData.email
      } 

      return format
  }

  const onSub = (_bodyData) => {

 
    login(fixJsonFormat(_bodyData))
  }
  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  return (
    <div>
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center  ">
<div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden  " style={{maxWidth:'1000px'}}>
    <form onSubmit={handleSubmit(onSub)}  className="md:flex w-full ">
        <div style={{backgroundImage:'url(https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/8718/Porsche-911-GT3-with-Touring-Package/1642402319549/front-left-side-47.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}  className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10 ">
  
        </div>
        <div className="w-full md:w-1/2  px-5 md:px-10 h-96 ">
            <div className="text-center   ">
                <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                <p>Enter your information to Login</p>
            </div>
            <div>
                
                <div className="flex-mx-1  ">
                    <div className="w-full px-3 mb-2">
                        <label  className="text-xs font-semibold px-1">Email:</label>
                        <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                            <input {...register('email')} type="email" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email..."/>
                        </div>

                    </div>
                </div>
                
                <div className="flex-mx-3">
                    <div className="w-full px-3 mb-2">
                        <label  className="text-xs font-semibold px-1">password:</label>
                        <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                            <input {...register('password')} type="password" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="password..."/>
                        </div>
                        {errMsg && <p className="text-red-500 ">{errMsg}</p>}

                    </div>

                </div>
                
             

                <div className="flex -mx-3">
                    <div className="w-full px-3 mb-2 my-3 ">
                        <button className="block w-72 max-w-xs mx-auto bg-slate-500 hover:bg-slate-700 focus:bg-slate-700 text-white rounded-lg px-3 py-3 font-semibold">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
</div>


</div>
  )
}

export default Login