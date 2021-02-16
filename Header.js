import React from 'react'

const Header = () => {
   return (
      <div>

         <header id="output">
            <div className="container">
               <div className="row">

                  <nav className="navbar navbar-expand-sm navbar-light  col-12">
                     <div className="collapse navbar-collapse"
                        id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                           <li className="nav-item active">

                              <h3 className="logo"> <span className="span">Naim</span> Biswas </h3>
                           </li>
                        </ul>
                        <div className=" my-2 my-lg-0">
                           <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                              <li className="nav-item mt-3">
                                 <a className="nav-link"
                                    href="#">Home <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item mt-3">
                                 <a className="nav-link"
                                    href="#">About <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item mt-3">
                                 <a className="nav-link"
                                    href="#">Portfolio <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item mt-3">
                                 <a className="nav-link"
                                    href="#">Contact <span className="sr-only">(current)</span></a>
                              </li>
                              <li>
                                 <Route path='/go'>
                                    <Link to='/go'>
                                       Go To Ghor
                                   </Link>
                                 </Route>
                              </li>


                              <button className="btn btn-md button text-white">
                                 <a target="blank"
                                    href="cv/Md.Naim Biswas Resume.pdf"
                                    download>
                                    Download CV <i className="fas fa-arrow-down ml-1    "></i>
                                 </a>
                              </button>

                           </ul>
                        </div>
                     </div>
                  </nav>
               </div>
            </div>
         </header>
      </div>
   )
}

export default Header
