import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../../assets/css/styles.css'

const About = props => (
  <section className="about bg-light">
    <div className="container">
      <div className="grid-2">
        <div className="box boxshadow">
          <h3>Hobbies</h3>
          <p>
          Chess, Ocean Swimming and Wim Hof Method
                  </p>
        </div>
        <div className="box boxshadow">
          <h3>About Me</h3>
          <p>
I recently moved to Victoria from Edmonton.  Enough said.
                  </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
