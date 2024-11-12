import Icons from "../Components/Icons"
import Laudea from "../Assets/images/Laudea.png"
import Althos from "../Assets/images/Althos.png"

const Projects = () => {
  return (
    <div>
      <div className='row' style={{ marginTop: '100px' }}>
        <div className='col'>
          <div className='row'>
            <div className="col-12">
              <h2 className='semi-bold text-black text-center font-s60 mb-2'>My Projects</h2>
              <p className='text-black text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            </div>
            <div className="col-md-9 mx-auto text-center my-5">
              <button className='btn btn-light me-4 btn-radius'>All </button>
              <button className='btn btn-light me-4 btn-radius'>UI/UX </button>
              <button className='btn btn-orange me-4 btn-radius'>Web Design </button>
              <button className='btn btn-light me-4 btn-radius'>App Design </button>
              <button className='btn btn-light me-4 btn-radius'>Graphic Design </button>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-4">
              <div className="card project-card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src={Laudea} />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox" style={{ backgroundColor: '#e6a983' }}>
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card project-card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src={Althos} />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox" style={{ backgroundColor: '#eabb22' }}>
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card project-card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src="https://images.unsplash.com/photo-1490737367009-922d4a612469?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox" style={{ backgroundColor: '#8093a3' }}>
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects