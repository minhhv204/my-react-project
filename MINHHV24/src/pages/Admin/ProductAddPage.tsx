import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TProduct } from '~/interfaces/Product'
type Props = {
  onAdd: (product: TProduct) => void
}
const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  thumbnail: Joi.string().allow(''),
  description: Joi.string().allow('')
})
const ProductAddPage = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(productSchema)
  })
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<TProduct> = (product) => {
    onAdd(product)
    console.log(product)
    navigate('/admin/products')
  }
  return (
    <form className='container tw-m-5' onSubmit={handleSubmit(onSubmit)}>
      <div className=' tw-items-center d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3   '>
        <h1 className='h2 '>Thêm Sản Phẩm</h1>
      </div>
      <div className='mb-3'>
        <label htmlFor='productName' className='form-label'>
          Tên Sản Phẩm
        </label>
        <input type='text' className='form-control' {...register('title')} id='title' />
        {errors.title && <p>{errors.title.message}</p>}
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
        {errors.thumbnail && <p>{errors.thumbnail.message}</p>}
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
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='productDesc' className='form-label'>
          Mô tả sản phẩm
        </label>
        <textarea className='form-control' {...register('description')} id='productDesc'></textarea>
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <button type='submit' className='btn btn-primary'>
        🔥🔥Thêm🔥🔥
      </button>
    </form>
  )
}

export default ProductAddPage
