import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout>
        <Box sx={{my:15,textAlign:'center',"& h4":{
          fontWeight:"bold"
        },"& p":{
          textAlign:'justify',
          fontWeight:'500',
          my:2,
          fontSize:'1.2rem'
        },p:2,"@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:'1.5rem',
          },
          "& p":{
            fontSize:'1.1rem'
          }
        }}}>
          <Typography variant='h4'>
            Welcome to My Restaurant
          </Typography>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima enim ea blanditiis iusto fugiat voluptate aliquam harum perferendis vel id. Dolores non, cumque officiis alias facilis, reprehenderit ratione aperiam voluptatum maxime beatae at nisi, possimus sit? Quasi in quisquam sunt id cum quibusdam ex assumenda sint est reiciendis eum dolorum inventore, qui reprehenderit placeat consectetur iusto esse ullam optio sequi provident veritatis, excepturi voluptate. Consequatur et assumenda aliquid aliquam distinctio nam ullam earum molestiae repellat. Provident neque odio rerum adipisci iste? Minima eligendi aspernatur sapiente numquam temporibus. A perspiciatis qui, laboriosam hic eos quibusdam sed iure, temporibus beatae quia nobis?</p>
          <br/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima enim ea blanditiis iusto fugiat voluptate aliquam harum perferendis vel id. Dolores non, cumque officiis alias facilis, reprehenderit ratione aperiam voluptatum maxime beatae at nisi, possimus sit? Quasi in quisquam sunt id cum quibusdam ex assumenda sint est reiciendis eum dolorum inventore, qui reprehenderit placeat consectetur iusto esse ullam optio sequi provident veritatis, excepturi voluptate. Consequatur et assumenda aliquid aliquam distinctio nam ullam earum molestiae repellat. Provident neque odio rerum adipisci iste? Minima eligendi aspernatur sapiente numquam temporibus. A perspiciatis qui, laboriosam hic eos quibusdam sed iure, temporibus beatae quia nobis?</p>
        </Box>
    </Layout>
  )
}

export default About