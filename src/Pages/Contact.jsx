import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='row' style={{ marginTop: '100px' }}>
        <div className='col'>

          <div className='row mb-5'>
            <div className="col-6 mx-auto text-center">
              <h2 className='semi-bold text-black text-center font-s60 mb-2'>Lets Design Together</h2>
              <p className='text-black text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            </div>
          </div>

          <div className="col-md-9 mx-auto text-center my-5">

            <input type="password" class="form-control me-3" id="exampleInputPassword1" placeholder="Enter Your Email" />
            <button className='btn-round btn-orange me-1 border-0'>Contact Me </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact