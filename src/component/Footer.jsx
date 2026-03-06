import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <p>Copyright: 2026 Design and Developed by  <span className='text-primary'>Vinayak</span>.</p>

          </div>
          <div className="col-6 text-end d-flex justify-content-end align-items-center">
            <i className='bi bi-facebook fs-5 m-3'></i>
            <i className='bi bi-twitter fs-5 m-3'></i>
            <i className='bi bi-instagram fs-5 m-3'></i>
            <i className='bi bi-linkedin fs-5 mr-3'></i>
          </div>


        </div>
      </div>
    </div>
  )
}
