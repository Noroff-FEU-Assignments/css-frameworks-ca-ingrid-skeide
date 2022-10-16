import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";

function home() {
  return (
    <>
    <Carousel>
        <Carousel.Item>
            <img src="./images/carousel/carousel-1.jpg" alt="Bicycle and tv screens" /> 
        </Carousel.Item>
        <Carousel.Item>
            <img src="./images/carousel/carousel-2.jpg" alt="The green ray" /> 
        </Carousel.Item>
        <Carousel.Item>
            <img src="./images/carousel/carousel-3.jpg" alt="A broken tv" /> 
        </Carousel.Item>
    </Carousel>

    <Container>
        <h1>We do YAY things</h1>
        <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
    </Container>

    <Container>
        <Accordion defaultActiveKey="0" className="d-md-none">
            <Accordion.Item eventKey="0">
                <Accordion.Header>First</Accordion.Header>
                <Accordion.Body>
                    <TabContentOne />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Second</Accordion.Header>
                <Accordion.Body>
                    <TabContentTwo />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Third</Accordion.Header>
                <Accordion.Body>
                    <TabContentThree />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>

    <Container variant="tabs" className="tab-container">
        <div className="d-none d-md-block">
            <Tabs defaultActiveKey="one" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="one" title="First">
                <TabContentOne />           
            </Tab>
            <Tab eventKey="two" title="Second">
                <TabContentTwo />
            </Tab>
            <Tab eventKey="three" title="Third">
                <TabContentThree />
            </Tab>
            </Tabs>
        </div>
    </Container>
    
   
    </>
    )
}

export default home