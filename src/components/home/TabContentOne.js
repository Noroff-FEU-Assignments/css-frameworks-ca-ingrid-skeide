import React from 'react'
import { Container } from 'react-bootstrap'

function TabContentOne() {
  return (
    <Container>
      <div className='tabcontent'>
        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
        </p>
      <img src='./images/tab/tab-1.jpg' alt='TV'></img>
      </div> 
      <div>   
        <p>Share</p>     
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </Container>
  )
}

export default TabContentOne
