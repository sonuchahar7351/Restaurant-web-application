import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <Layout>
        <Box sx={{my:8,ml:10,"& h4":{
          fontWeight:'bold',
          mb:2, 
        },"@media (max-width:600px)":{
          ml:2
        },"@media (max-width:1024px)":{
          ml:5,
        }}}>
          <Typography variant='h4'>
            Contact My Restaurant
          </Typography>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima enim ea blanditiis iusto fugiat voluptate aliquam harum perferendis vel id. Dolores non, cumque officiis alias facilis, reprehenderit ratione aperiam voluptatum maxime beatae at nisi, possimus sit? Quasi in quisquam sunt id cum quibusdam ex assumenda sint est reiciendis eum dolorum inventore, qui reprehenderit placeat consectetur iusto esse ullam optio sequi provident veritatis, excepturi voluptate. Consequatur et assumenda aliquid aliquam distinctio nam ullam earum molestiae repellat. Provident neque odio rerum adipisci iste? Minima eligendi aspernatur sapiente numquam temporibus. A perspiciatis qui, laboriosam hic eos quibusdam sed iure, temporibus beatae quia nobis?</p>
        </Box>
        <Box>
          <TableContainer component={Paper} sx={{m:3,width:'600px',ml:10,"@media (max-width:600px)":{
            width:'300px',
            ml:2
          },"@media (max-width:1024px)":{
            ml:5,
          }}}>
            <Table aria-label="contact-table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black',color:'white'}} align="center">
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red',pt:1}}/> 1800-00-00(Tolfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <EmailIcon sx={{color:'skyblue',pt:1}}/> amitchahar9837@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <PhoneIcon sx={{color:'green',pt:1}}/> 8171697502
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact