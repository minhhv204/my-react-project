import { Route, Routes } from 'react-router-dom'
import LayoutWebsite from './Layout/LayoutWebsite.tsx'
import ProductPageWebsite from './pages/Website/ProductPageWebsite.tsx'
import ProductDetail from './pages/Website/ProductDetail.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { useEffect, useState } from 'react'
import instance from './apis/index.ts'
import ProductPage from './pages/Admin/ProductsPage.tsx'
import ProductAddPage from './pages/Admin/ProductAddPage.tsx'
import { TProduct } from './interfaces/Product.ts'
const App: React.FC = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products`)
      setProducts(data)
    })()
  }, [])
  const onHandleRemove = () => {};
  const onHandleAdd = async (product: TProduct) => {
    try {
      const { data } = await instance.post(`/products`, product);
      setProducts([...products, data])
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route path='/products' element={<ProductPageWebsite />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Route>
        <Route path='/admin' element={<LayoutWebsite />}>
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/add' element={<ProductAddPage onAdd={onHandleAdd} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
