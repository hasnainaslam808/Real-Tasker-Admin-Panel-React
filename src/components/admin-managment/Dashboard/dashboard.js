import React from 'react'
// import Content from './content';
// import Building from "./../buildings/index"
// import Contacts from "../contacts/index"
import "../Dashboard/style.css";
import grp from "../../../assets/grp.png";
import img1 from "../../../assets/vec.png";
import img2 from "../../../assets/tickets.png";
import img3 from "../../../assets/idea.png";
import img4 from "../../../assets/contacts.png";
import img5 from "../../../assets/Vector.png";
import bell from "../../../assets/new.png";
import AppRoutes from '../..';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    const menu = [
        {id:1, icon: img1, text: "Dashboard",path:'/' },
        { id:2,icon: img2, text: "Administration",path:'/n'  },
        { id:3,icon: img3, text: "Buildings", path:'/buildings' },
        {id:4, icon: img4, text: "Supervisors" , path:'/supervisors'},
        {id:5, icon: img5, text: "Contacts" , path:'/contacts'},
        {id:6, icon: img3, text: "Tenants" , path:'/'},
        {id:7, icon: img4, text: "Directory" , path:'/'},
        {id:8, icon: img5, text: "Service Category" , path:'/'},
    ]

    return (
        <>
            <div className="container-fluid">
                <div class="row">
                    <div className="col-md-2 side-div" >
                        <div className='logo'>
                            <img src={grp} alt="" height="30px" width="130" />
                        </div>
                        <div className='side-list'>
                            <ul>

                                {menu.map((item) => (
                                    <li key={item.id} onClick={()=>navigate(item.path)} >
                                        <img src={item.icon} alt="icon" width="15px" height="15px" />
                                        <p>{item.text}</p>
                                    </li>
                                ))}
                                <div className='report'>
                                    <li >
                                        <img src={img5} alt="icon" width="15px" height="15px" />
                                        <p>Reports</p>
                                    </li>
                                </div>

                            </ul>
                        </div>

                        <hr />
                    </div>






                    <div className="col-md-10 right-div">
                        <div className='full'>

                            <div className='admin-management'>Admin Managment</div>

                            <div className='half'>
                                <div className='bell'>
                                    <img src={bell} alt="bell" width="18px" height="18px" />
                                </div>
                                <div>
                                    Admin
                                </div>
                            </div>
                        </div>

                        {/* components */}

<AppRoutes/>
                        {/* <Content/> */}
                        {/* <Building/> */}
                     {/* <Contacts/> */}

                        {/* components */}


                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard