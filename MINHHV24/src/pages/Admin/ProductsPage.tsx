import { Link } from 'react-router-dom'
import { TProduct } from '~/interfaces/Product'
interface ProductPageProps {
  products: TProduct[]// Khai báo kiểu dữ liệu cho mảng products
  onRemove: (id: number) => void // Khai báo kiểu dữ liệu cho hàm onRemove
}
// eslint-disable-next-line no-unused-vars
const ProductPage: React.FC<ProductPageProps> = ({ products,onRemove }) => {
  return (
    <>
      <div className='table-responsive small tw-p-5'>
        <div className=' tw-items-center d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3   '>
          <h1 className='h2 '>Quản Lý Sản Phẩm</h1>
          <div className='btn-toolbar mb-2 mb-md-0 '>
            <Link
              to='/admin/products/add'
              className='tw-bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
            >
              Thêm Mới Sản Phẩm
            </Link>
          </div>
        </div>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Ảnh</th>
              <th scope='col'>Tên Sản Phẩm</th>
              <th scope='col'>Giá</th>
              <th scope='col'>Mo Ta</th>
              <th scope='col'>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: TProduct, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img className='tw-w-[150px] tw-h-[150px]' src={product.thumbnail} alt={product.title} />
                </td>
                <td>
                  <h4>{product.title}</h4>
                </td>
                <td>
                  <span>{product.price}</span>
                </td>
                <td className='tw-w-[300px]'>
                  <span>{product.description}</span>
                </td>
                <td>
                  <button className='btn btn-danger tw-m-2' onClick={() => onRemove(product.id)}>
                    Xóa
                  </button>
                  <Link to={`/admin/products/${product.id}/edit`} className='btn btn-primary'>
                    Cập Nhật
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductPage
