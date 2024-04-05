import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <div>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Bootstrap 5 404 Error Page</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet' />
        <div className='d-flex align-items-center justify-content-center vh-100'>
          <div className='text-center'>
            <h1 className='display-1 fw-bold'>404</h1>
            <p className='fs-3'>
              {' '}
              <span className='text-danger'>Opps!</span> Page not found.
            </p>
            <p className='lead'>The page you’re looking for doesn’t exist.</p>
            <Link to={`/`} className='btn btn-primary'>
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
