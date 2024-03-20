import React from 'react'
import "./style.css"
import error from "../../../assets/Error.png"
import contact from "../../../assets/card-con.png"
import trash from "../../../assets/Trash.png"
import pencil from "../../../assets/Pencil.png"
import building1 from "../../../assets/building1.png"
import building2 from "../../../assets/building2.png"
import building3 from "../../../assets/building3.png"
import building4 from "../../../assets/building4.png"

const index = () => {
    return (
        <>
            <div className='card-div'>
                <div className='cards'>
                    <h6>Heirs AL Shamsi Villa Hor..</h6>
                    <div className='images'>
                        <img src={error} alt="" />
                        <img src={contact} alt="" />
                        <img src={pencil} alt="" />
                        <img src={trash} alt="" />
                    </div>
                    <div className='building-image'>
                        <img src={building1} alt="" />
                    </div>
                    <div className='btn'>
                        <button>Floor Management</button>
                    </div>
                    <div className='plus-images'>
                        <div className='back-images'><p>201</p></div>
                        <div className='back-images'><p>202</p></div>
                        <div className='back-images'><p>+2</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index