import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { TUser } from '~/interfaces/User'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import instance from '~/apis'


const productSchema = Joi.object({
  email: Joi.string().email({ tlds: false }),
  password: Joi.string().required()
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TUser>({
    resolver: joiResolver(productSchema)
  })


  const navigate = useNavigate()

  const onSubmit = async (user: TUser) => {
    try {
      const {data} = await instance.post('http://localhost:3000/signin', user);
      console.log(data);
      
      if (data.user && data.accessToken) {
        // Lưu thông tin người dùng vào sessionStorage
        sessionStorage.setItem("user", JSON.stringify(data.user));
        // Lưu accessToken vào sessionStorage
        sessionStorage.setItem("accessToken", data.accessToken);
       
        
        alert("Đăng Nhập Thành Công");
    } else {
        console.log('Dữ liệu trả về từ server không hợp lệ');
    }
     

   
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div>
      <form className='container tw-m-5 w-50  ' onSubmit={handleSubmit(onSubmit)}>
        <div className=' tw-items-center d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3   '>
          <h1 className='h1  '>Đăng Nhập</h1>
        </div>
        <div className='mb-3'>
          <label htmlFor='productName' className='form-label'>
            Email
          </label>
          <input type='email' className='form-control' {...register('email')} id='title' />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='productPrice' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            {...register('password', { required: true })}
            id='productPrice'
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type='submit' className='btn btn-primary '>
          Đăng Nhập
        </button>
        <p className='tw-pl-[500px]'>
          Chưa có tài khoản ? <Link to={`/register`}>Đăng Kí</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
