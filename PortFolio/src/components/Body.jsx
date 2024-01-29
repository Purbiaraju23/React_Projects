import React, { useEffect, useState } from 'react'
import Navlink from './Navlink';

function Body() {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  })
 
  const handleChangeInput = (e)=> {
    const {name, value} = e.target;
    setFormData((prevData)=>({...prevData,[name]:value}))
  }
  const [formSubmitted,setFormSubmitted] = useState(false)

  useEffect(()=>{
    if(formSubmitted){
      console.log('Form Submitted:',formData)
      setFormData({name:'',email:'',message:''})
      setFormSubmitted(false)
    }
  },[formData,formSubmitted])

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <>
    <section className="hero">
    <div className="u-wrapper">
      <div className="hero-content" >
        <div className="hero-image"  >
          <img src="images/raju.png" alt="" height='600px'/>
        </div>
        <div className="hero-description">
          <h1 className="h1">
            <span className="h3">Hello It's Me</span>
            <span>Raju Purbia</span>
          </h1>
          <p>Contact me</p>
          <Navlink/>
        </div>
      </div>
    </div>
  </section>
  <section className="pre-projects">
    <div className="u-wrapper">
      <div className="pre-projects-content">
        <p>Visit My Github Profile</p>
        
        <img src="images/icons/arrow-down.svg" className="p-5" alt=""/>
      </div>
    </div>
  </section>
  <br />


  <section className="project-list">
    <div className="u-wrapper">
      <div className="project-list-content">
        <article className="project">
          <div className="project-description">
            <h2 className="project-title tag" >
              <span>
              📧 r.purabia@axelor.com
              </span>
            </h2>
            <p className="project-copy">
              Press below Button to redirect to my Github Profile
            </p>
            <div className="project-cta">
              <button className="btn secondary full hover:cursor-pointer" style={{cursor:'pointer'}}>
                <a href="https://github.com/rp-axelor" style={{textDecoration:'none', color:'black', cursor:'pointer'}}>
                <i>
                  <img src="images/icons/github.svg" alt=""/>
                </i>
                <span>
                  GitHub
                </span>
                </a>
              </button>
              
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <div style={{
    height:'10vh'
  }}>

  </div>

  <section className="contact">
    <div className="u-wrapper">
      <div className="contact-content">

        <form id="form" action="" className="form">
          <h3 className="tag"><span>MESSAGE ME</span></h3>
          <label htmlFor="name"> Enter Name<span> *</span> </label>
          <input name="name" required type="text" id="name" placeholder="John" onChange={handleChangeInput}/>
          <label htmlFor="email">Enter Email <span>*</span></label>
          <input name="email" type="text" id="email" required placeholder="john@gmail.com" onChange={handleChangeInput}/>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" cols="30" rows="10" onChange={handleChangeInput}></textarea>
          <button type="submit" className="btn primary full"
          onClick={handleFormSubmit}
          >SUBMIT</button>
        </form>
        <a href="mailto:r.purabia@axelor.com" id="rp-axelor"></a>
      </div>
    </div>
  </section>
    </>
  )
}

export default Body
