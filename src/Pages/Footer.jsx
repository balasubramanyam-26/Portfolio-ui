import React from 'react';
import Icons from '../Components/Icons';

const Footer = () => {
  return (
    <>
      <footer style={{ marginTop: '100px' }}>
        <div className='container-fluid p-0'>
          <div class="">
            <div className='footer-top'>
              <div className='row m-0 d-flex justify-content-center'>
                <div className="col-4">
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='text-black'>Home</div>
                    <div className='text-black '>About Me</div>
                    <div className='text-black'>Services</div>
                    <div className='text-black '>Projects</div>
                    <div className='text-black '>Testimonials</div>
                    <div className='text-black'>Contact</div>
                  </div>
                </div>
              </div>

              <div className="row m-0">
                <div className='col-12 mt-80'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='social-media-icons'>
                      <Icons iconName="icon-facebook" className="icon-30" />
                      <Icons iconName="icon-custom" className="icon-30" />
                      <Icons iconName="icon-instagram" className="icon-30" />
                      <Icons iconName="icon-linkedin" className="icon-30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            <p className='m-0 text-white text-center'>© 2024 <span className='bold text-orange'>Bala</span> Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer