import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/Product'

const ProductPageWebsite = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products`)
      setProducts(data)
    })()
  }, [])
  return (
    <div className='container'>
      <h2 className='tw-text-center tw-mt-4 tw-border-b-2'>Danh Sách Sản Phẩm</h2>
      <div className='tw-mt-5 '>
        <div className='row row-cols-1 row-cols row-cols-md-5 g-1  '>
          {products?.map((product: TProduct, index: number) => (
            <div className='card shadow-sm tw-m-8  ' key={index}>
              <Link to={`/products/${product.id}`}>
                <img className='tw-w-[300px] tw-h-[250px] tw-p-3' src={product.thumbnail}></img>
              </Link>

              <div className='card-body tw-text-center'>
                <Link className='tw-no-underline tw-text-black tw-hover:no-underline' to={`/products/${product.id}`}>
                  <h4>{product.title}</h4>
                </Link>
                <span>Giá: {product.price}$</span>
                <br />
                <Link className='btn btn-primary' to={''}>
                  Thêm Vào Giỏ Hàng
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPageWebsite
