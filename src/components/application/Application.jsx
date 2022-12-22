import React from 'react'  

export const Application = () => {
  return (
    <>
    <div>
        <h1>Job application form</h1>
        <h3>Section 1</h3>
    </div>
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
        </div>
        <div>
            <label htmlFor="bio">Bio</label>
            <input type="bio" id="bio"/>
        </div>
        <div>
            <label htmlFor="job-location">Job location</label>
            <select name="" id="job-location">
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
            </select>
        </div>
        <div>
            <label htmlFor="">
                <input type="checkbox" id="terms" />
                I agree to the terms and conditions
            </label>
        </div>
        <button>Submit</button>
    </form>
    </>
  )
}
