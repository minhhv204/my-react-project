import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return <>

     <div>
      

       {/* <Header /> */}
      <div className="wrapper">
          {/* <Sidebar/> */}

         <main className="main">
            <Outlet/>
          {/* <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="admin" element={<Dashboard/>} />
            
            <Route path="admin/products" element={<ProductPage products={products} onRemove={onHandleRemove} />} />

            <Route path="admin/products/add" element={<ProductAddPage onAdd={onHandleAdd} />} />
            <Route path="admin/products/:id/edit" element={<ProductEditPage onUpdate={onHandleUpdate} />} />
          </Routes> */}
          

        </main> 



      </div>
      
    </div>
    </>
}

export default LayoutAdmin