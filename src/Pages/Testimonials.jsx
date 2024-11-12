import React from 'react'
import image from '../Assets/images/profile.svg'

const Testimonials = () => {
  return (
    <div>
      <div className='row' style={{ marginTop: '100px' }}>
        <div className='col'>

          <div className='row mb-5'>
            <div className="col-6 mx-auto text-center">
              <h2 className='semi-bold text-black text-center font-s60 mb-2'>Testimonials</h2>
              <p className='text-black text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            </div>
          </div>
          <div className='row my-5'>
            <div className='col-6 mx-auto'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='d-flex align-items-center'>
                    <img src={image} className='h-230 me-3'></img>
                    <div>
                      <p className='text-muted regular'>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                      <h3 className='medium font-s24'>Name</h3>
                      <h6 className="regular text-black">CEO</h6>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-md-9 mx-auto text-center mt-0">
              <button className='btn-round btn-light me-1'> </button>
              <button className='btn-round btn-orange me-1 border-0'></button>
              <button className='btn-round btn-light me-1 btn-radius'>
              </button><button className='btn-round btn-light'> </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimonials