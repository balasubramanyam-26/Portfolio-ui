import React from 'react'
import Profile from '../Assets/images/Bala.jpg'
import Icons from '../Components/Icons'

const AboutMe = () => {
  return (
    <div>
      <div className='row' style={{ marginTop: '100px' }}>
        <div className='col'>
          <div className='row'>
            <div className='col-md-7 col-sm-12 col-12 about-info'>
              <h6 className='semi-bold font-s24 mb-1 text-black'>Hi I am </h6>
              <h5 className='semi-bold font-s24 mb-0 text-orange'>BalaSubramanyam G M </h5>
              <h1 className='bold font-s70 text-black mb-0'>Front-End</h1>
              <h1 className='bold font-s70 text-black mb-3'>Developer </h1>
              <p className='font-s20 text-black'>Building web interfaces that are as functional as they are visually appealing.</p>
              <button className='btn btn-orange regular'>Hire Me </button>
            </div>

            <div className='col-5 about-info-profile'>
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
            <div className='col-md-5 col-sm-12 profile-pic-secondry'>
              <div class="outer-circle">
                <div class="inner-circle">
                </div>
              </div>
            </div>
            <div className='col-md-6 col-md-12 mt-5'>
              <h3 className='semi-bold mb-3 text-black font-s50'>About Me </h3>
              <p className='mb-3 text-black font-s18'>I am a passionate Front-End Developer with a strong foundation in creating responsive and user-centric web applications. With experience in HTML, CSS, JavaScript, React, and other modern front-end technologies, I thrive on transforming creative designs into seamless, interactive user experiences.</p>

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