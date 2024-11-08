import React from 'react'
import Icons from '../Components/Icons'

const Services = () => {
  return (
    <div>
      <div className='row' style={{ marginTop: '100px' }}>
        <div className='col'>

          <div className='row'>
            <h2 className='semi-bold text-black text-center font-s60 mb-2'>Services</h2>
            <p className='text-black text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
          </div>

          <div className='row my-4'>
            <div className='col-3'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='mb-3'><Icons iconName="icon-ui" className="icon-45"></Icons></div>
                  <div className='semi-bold font-s32 text-black'>UI/UX</div>
                  <p className='text-black mb-0'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='mb-3'><Icons iconName="icon-ui" className="icon-45"></Icons></div>
                  <div className='semi-bold font-s32 text-black'>UI/UX</div>
                  <p className='text-black mb-0'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='mb-3'><Icons iconName="icon-ui" className="icon-45"></Icons></div>
                  <div className='semi-bold font-s32 text-black'>UI/UX</div>
                  <p className='text-black mb-0'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card service-card'>
                <div className='card-body'>
                  <div className='mb-3'><Icons iconName="icon-ui" className="icon-45"></Icons></div>
                  <div className='semi-bold font-s32 text-black'>UI/UX</div>
                  <p className='text-black mb-0'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
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