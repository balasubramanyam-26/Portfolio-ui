import Icons from "../Components/Icons"


const Projects = () => {
  return (
    <div>
      <div className='row' style={{ marginTop: '100px' }}>
        <div className='col'>

          <div className='row'>
            <div className="col-9 mx-auto text-center">
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

          <div className="row my-4">
            <div className="col-md-4">
              <div className="card project-card mb-4">
                <div className="card-body p-0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s" className="img-fluid" />
                </div>              
              </div>
              <h6 className="text-orange font-s16 mb-3 px-2">Web Design </h6>
              <h3 className="text-black semi-bold font-s20 px-2">AirCalling Landing Page Design </h3>
            </div>

            <div className="col-md-4">
              <div className="card project-card mb-4">
                <div className="card-body p-0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s" className="img-fluid" />
                </div>              
              </div>
              <h6 className="text-orange font-s16 mb-3 px-2">Web Design </h6>
              <h3 className="text-black semi-bold font-s20 px-2">AirCalling Landing Page Design </h3>
            </div>

            <div className="col-md-4">
              <div className="card project-card mb-4">
                <div className="card-body p-0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s" className="img-fluid" />
                </div>              
              </div>
              <h6 className="text-orange font-s16 mb-3 px-2">Web Design </h6>
              <h3 className="text-black semi-bold font-s20 px-2">AirCalling Landing Page Design </h3>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects