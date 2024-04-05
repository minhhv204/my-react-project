import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { TProduct } from '~/interfaces/Product'
import { useEffect } from 'react'
import instance from '~/apis'

const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  thumbnail: Joi.string().allow(''),
  description: Joi.string().allow('')
}).unknown()
type Props = {
  onUpdate: (product: TProduct) => void
}
const ProductUpdate = ({ onUpdate }: Props) => {
  const { id } = useParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TProduct>()
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      reset(data)
    })()
  }, [id])
  const navigate = useNavigate()
  const onSubmit = (product: TProduct) => {
    // Validate product data manually
    const validationResult = productSchema.validate(product)

    // Nếu có lỗi trong quá trình validation
    if (validationResult.error) {
      // Xử lý lỗi ở đây, có thể thông báo cho người dùng về lỗi
      alert(validationResult.error)
      return
    }

    // Nếu không có lỗi validation, tiến hành update
    try {
      console.log(product)

      // Thực hiện update với ID dạng string
      onUpdate({ ...product, id: String(id) })

      navigate('/admin/products')
    } catch (error) {
      console.error('Update error:', error)
    }
  }
  return (
    <form className='container tw-m-5' onSubmit={handleSubmit(onSubmit)}>
      <div className=' tw-items-center d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3   '>
        <h1 className='h2 '>Sửa Sản Phẩm</h1>
      </div>
      <div className='mb-3'>
        <label htmlFor='productName' className='form-label'>
          Tên Sản Phẩm
        </label>
        <input type='text' className='form-control' {...register('title')} id='title' />
      </div>
      <div className='mb-3'>
        <label htmlFor='productImage' className='form-label'>
          Ảnh Sản Phẩm
        </label>
        <br />

        <input
          multiple
          type='text'
          className='form-control '
          accept='image/*'
          id='imageUrl'
          {...register('thumbnail')}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='productPrice' className='form-label'>
          Giá Sản Phẩm
        </label>
        <input
          type='number'
          className='form-control'
          {...register('price', { required: true, min: 0 })}
          id='productPrice'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='productDesc' className='form-label'>
          Mô tả sản phẩm
        </label>
        <textarea className='form-control' {...register('description')} id='productDesc'></textarea>
      </div>
      <button type='submit' className='btn btn-primary'>
        Cập nhật
      </button>
    </form>
  )
}

export default ProductUpdate
