import React from 'react'
import '../styles/components/Footer.module.scss'

const date = new Date();
let year = date.getFullYear();

const Footer = () => (
  <footer>
    <p>&copy; {year} Derek Kinsman. Handmade with<span className="emoji">🖤</span>on <a href="https://downiewenjack.ca/support-us/donate/" target="_blank">Treaty 3 Territory</a>, Turtle Island.</p>
    <img className="logo" src="black.svg" />
  </footer>
)

export default Footer
