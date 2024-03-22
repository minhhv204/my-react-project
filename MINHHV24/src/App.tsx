import { Route, Routes } from 'react-router-dom'
import LayoutWebsite from './Layout/LayoutWebsite.tsx'
import ProductPageWebsite from './pages/Website/ProductPageWebsite.tsx'
import ProductDetail from './pages/Website/ProductDetail.tsx'
function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route path='/products' element={<ProductPageWebsite />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
