import React from 'react'
import "../Dashboard/style.css";
import search from "../../../assets/Search.png";
import pro1 from "../../../assets/profil1.png";
import pro2 from "../../../assets/profil2.png";
import pro3 from "../../../assets/profil3.png";
import Ok from "../../../assets/Ok.png";
import group from "../../../assets/group.png";
const content = () => {

    const data = [
        { profile: pro1, admin: "Admin 1",email:"wakoman@gmail.com" ,phone:"042-6664772",ok:Ok,grp:group},
        { profile: pro2, admin: "Admin 1",email:"wakoman@gmail.com" ,phone:"042-6664772",ok:Ok,grp:group},
        { profile: pro3,  admin: "Admin 1",email:"wakoman@gmail.com" ,phone:"042-6664772",ok:Ok,grp:group},
        { profile: pro1, admin: "Admin 1",email:"wakoman@gmail.com" ,phone:"042-6664772",ok:Ok,grp:group},
        { profile: pro2, admin: "Admin 1",email:"wakoman@gmail.com" ,phone:"042-6664772",ok:Ok,grp:group},
        { profile: pro3, admin: "Admin 1",email:"wakoman@gmail.com" ,phone:"042-6664772",ok:Ok,grp:group},
     
       
     
    ]
  return (
    <div className='admin-table'>
    <div className='btn-div'>
        <div className='add-admin'>
            <button>+ Add Admin</button>
        </div>
        <div className='btn-grp'>
            <button className='pdf'>PDF</button>
            <button className='excel'>EXCEL</button>
            <button className='print'>PRINT</button>
            <div className='search'>  <input type="text" placeholder='Search' /><span><img src={search} alt="search-icon" width="17px" height="17px" /></span></div>

        </div>
    </div>




    {/*  */}
    <table class="table">
        <thead>
            <tr>
                <th >Name</th>
                <th></th>
                <th></th>
                <th></th>
                <th>Email</th>
                <th >Phone</th>
                <th >Active</th>
                <th >Actions</th>
            </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
                <tr  className="image-cell" key={index}>
                    <td>
                        <img src={item.profile} alt="Profile" width="42px" height="42px" />
                        <span>{item.admin}</span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td><img src={item.ok} alt="OK" width="30px" height="30px" /></td>
                    <td><img src={item.grp} alt="Group" width="64px" height="30px" /></td>
                </tr>
            ))}

       
        </tbody>
    </table>
<div className='bread-crumb'>
    <p>Rows per page: <span> 8 &#9660;</span></p>
    <p>1-8 of 1240  &#9666;  &#9656;</p>
</div>
</div>
  )
}

export default content