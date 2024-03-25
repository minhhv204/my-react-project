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
    <div>
      <div className='container mt-5 mb-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10'>
            <div className='card'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='images p-3'>
                    <div className='text-center p-4'>
                      {' '}
                      <div className='images p-3'>
                        <div className='text-center p-4'>
                          {' '}
                          <img id='main-image' src={products?.thumbnail} width={350} />{' '}
                        </div>
                        <div className='thumbnail text-center'>
                          {' '}
                          <div className='d-flex justify-content-between'>
                            <img src={products?.images[1]} width={100} /> <img src={products?.images[2]} width={100} />{' '}
                            <img src={products?.images[0]} width={100} />{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='product p-4'>
                    <div className='mt-4 mb-3'>
                      {' '}
                      <span className='text-uppercase text-muted brand'>Chi Tiết Sản Phẩm</span>
                      <h5 className='text-uppercase'>Tên SP: {products?.title}</h5>
                      <div className='price d-flex flex-row align-items-center'>
                        {' '}
                        <span className='act-price '>Giá: {products?.price}$</span>
                      </div>
                    </div>
                    <p className='about'>Mô tả: {products?.description}</p>
                    <div className='cart mt-4 align-items-center'>
                      {' '}
                      <button className='btn btn-danger text-uppercase mr-2 px-4'>Add to cart</button>{' '}
                      <i className='fa fa-heart text-muted' /> <i className='fa fa-share-alt text-muted' />{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
