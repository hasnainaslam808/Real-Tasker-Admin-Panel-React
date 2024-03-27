import React from 'react'
import "./style.css"
import arrow from "../../../assets/Left Arrow.png"
const Contacts = () => {
  return (
    <>
      <div className='main-div'>
        <div className='back'>
          <h4>Add Contact</h4>
          <h6><img src={arrow} alt="" width="15px" height="15px" /> Back</h6>
        </div>

        <form class="row g-3 form">
          <div class="row g-3">
            <div class="col-md-5">
              <label >FIRST NAME</label>
              <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-md-5">
              <label >LAST NAME</label>
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
            </div>
          </div>
          <div class="col-md-5">
            <label >DATE OF BIRTH</label>
            <input type="date" className='dateTime' class="form-control dateTime" placeholder="Enter Your Date of Birth" />
          </div>
          <div class="col-md-5">
            <label for="validationCustom04" class="form-label">Gender</label><br />
            <input class="form-check-input mt-2 mr-2" type="radio" name="gender" id="male" value="male" />
            <label className='male' class="form-check-label mt-1" >Male</label>
            <input class="form-check-input mt-2" type="radio" name="gender" id="female" value="female" />
            <label className='female' class="form-check-label mt-1" >Female</label>
          </div>

          <div class="col-md-5">
            <label >EMAIL</label>
            <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Last name" />
          </div>
          <div class="col-md-5">
            <label >Mobile Number</label>
            <input type="text" class="form-control" placeholder="Mobile Number" aria-label="Last name" />
          </div>
          <div class="col-md-5">
            <label >Choose a picture</label>
            <input type="file" className='filesel' class="form-control" />
          </div>

          <div className='btn'>
            <button id='submit'>Submit</button>
            <button id='reset'>Reset </button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Contacts