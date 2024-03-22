import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/Product'

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [products, setProducts] = useState<TProduct | null>(null)
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProducts(data)
    })()
  }, [])
  return (
    <div className='container'>
      <h1>Chi Tiết Sản Phẩm</h1>
      <h2>Name: ${products?.title}</h2>
      <img src={products?.thumbnail} alt={products?.title} />
      <p>Gia San Pham: ${products?.price}</p>
      <p>Mô tả: ${products?.description}</p>
    </div>
  )
}

export default ProductDetail
