import React from 'react'
import Icons from '../Components/Icons'

const Services = () => {
  return (
    <div>
      <div className='row mt-100'>
        <div className='col'>

          <div className='row'>
            <h2 className='semi-bold text-black text-center font-s50 mb-2'>Services</h2>
            <p className='text-black text-center font-s18'>Delivering sleek, user-friendly web solutions for all devices</p>
          </div>

          <div className='row wrapper my-4'>
            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='mb-3'><Icons iconName="icon-ui" className="icon-45"></Icons></div>
                  <div className='semi-bold font-s32 text-black'>UI/UX</div>
                  <p className='text-black mb-0'>Elevating user satisfaction through thoughtful design.</p>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-4 mt-sm-0'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='mb-3'><Icons iconName="icon-ui" className="icon-45"></Icons></div>
                  <div className='semi-bold font-s32 text-black'>Responsive Web Design</div>
                  <p className='text-black mb-0'>Building flexible layouts that adapt to every screen size</p>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-4 mt-sm-4 mt-md-0'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='mb-3'><Icons iconName="icon-ui" className="icon-45"></Icons></div>
                  <div className='semi-bold font-s32 text-black'>Single Page Applications</div>
                  <p className='text-black mb-0'>Transforming web interactions with modern, single-page technology.</p>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-4 mt-xl-0'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='mb-3'><Icons iconName="icon-ui" className="icon-45"></Icons></div>
                  <div className='semi-bold font-s32 text-black'>Front-end Development</div>
                  <p className='text-black mb-0'>Turning pixels into code for a flawless user experience</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services