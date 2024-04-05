import React, { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({ children }: { children: ReactNode }) => {
  const userString = sessionStorage.getItem('user')
  const user = userString ? JSON.parse(userString) : null
  
  if (!user.id || user.id !=1) {

    alert('Bạn không có quyền truy cập')
    return <Navigate to='/' />
  } 
    return children ? children : <Outlet />
  //   if (!user || user.id !== "1") {

  //     alert("Bạn không có quyền truy cập");
  //     return <Navigate to="/" />;
  //   }
  //   return children ? children : <Outlet />;
}

export default PrivateRouter
