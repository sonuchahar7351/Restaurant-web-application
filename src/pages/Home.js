import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from '@mui/material'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyle.css'
function Home() {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home