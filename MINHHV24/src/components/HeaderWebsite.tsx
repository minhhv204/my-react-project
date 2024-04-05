import { Link } from 'react-router-dom';

const HeaderWebsite = () => {
  return (
    <div>
      <header data-bs-theme='dark'>
        <div className='navbar  bg-dark '>
          <div className='container '>
            <Link to='/' className='navbar-brand d-flex align-items-center '>
              <img
                className='tw-w-[100px] tw-h-[80px] '
                src='https://res.cloudinary.com/dh9hnswr2/image/upload/v1706685688/ECMA/logoshop_oh1phn.jpg'
                alt=''
              />
            </Link>
            <div className='tw-m-2 '>
              <Link to='/register' className='navbar-toggler tw-mr-2 tw-no-underline ' type='button'>
                <p className='tw-text-white  '>Tài Khoản</p>
              </Link>

              <Link to='/admin/products' className='navbar-toggler tw-no-underline' type='button'>
                <p className='tw-text-white'>Admin Page</p>
              </Link>
              <Link to='/products' className='navbar-toggler tw-no-underline tw-mr-2' type='button'>
                <p className='tw-text-white'>Products</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderWebsite;
