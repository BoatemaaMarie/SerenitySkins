import React from 'react'
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => (
  <div className='layout'>
    <Header currentUser={props.currentUser} />
    <div className='layout-children'>
      {props.children}
    </div>
    <Footer/>
  </div>
)

export default Layout