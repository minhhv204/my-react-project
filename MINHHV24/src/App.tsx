import { Route, Routes } from 'react-router-dom'
import LayoutWebsite from './Layout/LayoutWebsite.tsx'
import ProductPageWebsite from './pages/Website/ProductPageWebsite.tsx'
function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route path='/' element={<ProductPageWebsite />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
