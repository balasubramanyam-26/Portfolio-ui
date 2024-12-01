import Icons from "../Components/Icons"
import Laudea from "../Assets/images/Laudea.png"
import Althos from "../Assets/images/Althos.png"
import Tickets from "../Assets/images/Tickets.jpg"

const Projects = () => {
  return (
    <div>
      <div className='row' style={{ marginTop: '100px' }}>
        <div className='col'>
          <div className='row'>
            <div className="col-12">
              <h2 className='semi-bold text-black text-center font-s50 mb-2'>My Projects</h2>
              <p className='text-black text-center font-s18'>A collection of my work – where creativity meets code</p>
            </div>
            <div className="col-md-9 mx-auto text-center my-5">
              <button className='btn btn-orange me-4 btn-radius'>Web Design </button>
              <button className='btn btn-light me-4 btn-radius'>UI/UX </button>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
              <div className="card project-card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src={Laudea} />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox" style={{ backgroundColor: '#5d39b4' }}>
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-card-info">
                <h6 className="text-orange font-s18 mt-3 px-1">Web Design </h6>
                <h2 className="text-black bold font-s20 px-1">Laudea Page Design </h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
              <div className="card project-card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src={Althos} />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox" style={{ backgroundColor: '#bc3d4a' }}>
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="text-orange font-s18 mt-3 px-1">Web Design </h6>
              <h2 className="text-black bold font-s20 px-1">Althos Page Design </h2>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
              <div className="card project-card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src={Tickets} />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox" style={{ backgroundColor: '#90badd' }}>
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="text-orange font-s18 mt-3 px-1"> Web Design </h6>
              <h2 className="text-black bold font-s20 px-1">Service Desk Design </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects