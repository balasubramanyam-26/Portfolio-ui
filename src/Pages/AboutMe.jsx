import React from 'react'
import Profile from '../Assets/images/Bala.jpg'
import Icons from '../Components/Icons'

const AboutMe = () => {
  return (
    <div>
      <div className='row' style={{ marginTop: '100px' }}>
        <div className='col'>
          <div className='row'>
            <div className='col-7'>
              <h6 className='semi-bold font-s24 mb-1 text-black'>Hi I am </h6>
              <h5 className='semi-bold font-s24 mb-0 text-orange'>BalaSubramanyam G M </h5>
              <h1 className='bold font-s70 text-black mb-0'>Front-End</h1>
              <h1 className='bold font-s70 text-black mb-3'>Developer </h1>
              <p className='font-s20 text-black'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
              <button className='btn btn-orange regular'>Hire Me </button>
            </div>

            <div className='col-5'>
              <div className='row mb-3'>
                <div className='col-12 d-flex justify-content-center'>
                  <div class="outer-circle">
                    <div class="inner-circle">
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
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

          <div className='row mt-5'>
            <div className='col-5'>
              <div class="circle"></div>

            </div>
            <div className='col-6 mt-5'>
              <h3 className='semi-bold mb-3 text-black'>About Me </h3>
              <p className='mb-3 text-black'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

              <div className='mb-4'>
                <h6 className='semi-bold text-black'>UX</h6>
                <div class="progress" role="progressbar" aria-label="Example with label">
                  <div class="progress-bar width-90"></div>
                </div>
              </div>

              <div className='mb-4'>
                <h6 className='semi-bold text-black'>Website Design</h6>
                <div class="progress" role="progressbar" aria-label="Example with label">
                  <div class="progress-bar width-75"></div>
                </div>
              </div>

              <div className='mb-4'>
                <h6 className='semi-bold text-black'>App Design </h6>
                <div class="progress" role="progressbar" aria-label="Example with label">
                  <div class="progress-bar width-60"></div>
                </div>
              </div>

              <div className='mb-4'>
                <h6 className='semi-bold text-black'>Graphic Design </h6>
                <div class="progress" role="progressbar" aria-label="Example with label">
                  <div class="progress-bar width-80"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe