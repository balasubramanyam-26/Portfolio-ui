import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='row mt-100'>
        <div className='col'>

          <div className='row mb-5 mb-xs-5'>
            <div className="col-12 col-lg-6 mx-auto text-center">
              <h2 className='semi-bold text-black text-center font-s50 mb-2'>Lets Design Together</h2>
              <p className='text-black text-center font-s18'>Let’s combine creativity and technology to craft memorable digital experiences.</p>
            </div>
          </div>

          <div className="col-12 col-md-9 mx-auto text-center my-5 my-xs-5">

            <input type="password" className="form-control me-3" id="exampleInputPassword1" placeholder="Enter Your Email" />
            <button className='btn-round btn-orange me-md-1 mt-xs-2 border-0'>Contact Me </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact