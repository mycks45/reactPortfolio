import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>  
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <dir>
                  <h4>HTML</h4>
                  <small className="text-light">Experience</small>
                </dir>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>             
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HBS</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
            </div>
        </div>  
        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Django</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>PostgreSql</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>NodeJs</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>MongoDb</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experience</small>
                </div>
              </article>
            </div>
        </div>  
      </div>
    </section>
  )
}

export default Experience