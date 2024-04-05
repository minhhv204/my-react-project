import { Route, Routes, useNavigate } from 'react-router-dom'
import LayoutWebsite from './Layout/LayoutWebsite.tsx'
import ProductPageWebsite from './pages/Website/ProductPageWebsite.tsx'
import ProductDetail from './pages/Website/ProductDetail.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { useEffect, useState } from 'react'
import instance from './apis/index.ts'
import ProductPage from './pages/Admin/ProductsPage.tsx'
import ProductAddPage from './pages/Admin/ProductAddPage.tsx'
import { TProduct } from './interfaces/Product.ts'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductUpdate from './pages/Admin/ProductUpdate.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import PrivateRouter from './components/PrivateRouter.tsx'
const App: React.FC = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products`)
      setProducts(data)
    })()
  }, [])
  const onHandleRemove = async (id: number) => {
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')
    if (confirmDelete) {
      try {
        const { data } = await instance.delete(`/products/${id}`)
        setProducts(products.filter((product) => product.id !== id))
        alert('Xóa sản phẩm thành công')
      } catch (error) {
        console.log(error)
      }
    }
  }
  const onHandleAdd = async (product: TProduct) => {
    try {
      const { data } = await instance.post(`/products`, product)
      alert('Thêm sản phẩm thành công')
      setProducts([...products, data])
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleUpdate = async (product: TProduct) => {
    try {
      const { data } = await instance.put(`/products/${product.id}`, product)
      alert("Update Thành Công ! ");
      setProducts(products.map((item) => (item.id === data.id ? data : item)))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='/products' element={<ProductPageWebsite />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Route>
        <Route path='/admin' element={<PrivateRouter><LayoutWebsite /></PrivateRouter>}>
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/add' element={<ProductAddPage onAdd={onHandleAdd} />} />
          <Route path='products/:id/edit' element={<ProductUpdate onUpdate={onHandleUpdate} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
