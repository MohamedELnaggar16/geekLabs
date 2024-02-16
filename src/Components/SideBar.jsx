import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Components/Media/logo2.png'
export default function SideBar() {
  return (
  <>
     
    <nav>
        <div>
            <div className="row">
                <div className="col-md-12">     
                <ul className="fs-4 vh-100 sideNavHover navBG">
                    <div className='pt-3 pb-5'>
                        <img src={logo} alt="" className='logoSize'/>
                    </div>

                  <li className="py-1 d-flex align-items-center">
                    <div> <Link className="text-decoration-none text-white" > <i className="fa-solid fa-bell"></i></Link></div>
                    <span className='fs-6 text-white px-2 hoverLink'>Alert</span>  
                  </li>
                  <li className="py-1 d-flex align-items-center">
                    <div> <Link className="text-decoration-none text-white " > <i className="fa-solid fa-graduation-cap"></i></Link></div>
                    <span className='fs-6 text-white px-2 hoverLink'>Training</span>  
                  </li>
                  <li className="py-1 d-flex align-items-center">
                    <div> <Link className="text-decoration-none text-muted " > <i className="fa-solid fa-gears"></i></Link></div>
                    <span className='fs-6 text-muted px-2 '>Automation</span>  
                  </li>
                  <li className="py-1 d-flex align-items-center">
                    <div> <Link className="text-decoration-none text-muted " > <i className="fa-solid fa-briefcase"></i></Link></div>
                    <span className='fs-6 text-muted px-2 '>Portfolio</span>  
                  </li>
                  <li className="py-1 d-flex align-items-center">
                    <div> <Link className="text-decoration-none text-muted " > <i className="fa-solid fa-arrow-trend-up"></i></Link></div>
                    <span className='fs-6 text-muted px-2 '>Trading</span>  
                  </li>
                  <li className="py-5 my-5 d-flex align-items-center">
                    <div className='d-flex justify-content-center align-items-center'>
                    <div> 
                        <Link className="text-decoration-none text-white " >
                        <i className="fa-solid fa-user-plus"></i></Link>
                    </div>
                    <div className='mx-2'>
                    <span className='fs-6 text-white '>MoniRoy </span>
                    <span className='text-muted fs-6'> Beginner</span>
                    </div>
                    </div>

                 
                  </li>
              


                </ul>
                </div>
            </div>
        </div>
    </nav>

  </>
  )
}
