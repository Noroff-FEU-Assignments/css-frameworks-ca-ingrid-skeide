import React from 'react';
import NewsCard from './NewsCard';
import Heading from '../../components/Heading';
import PageNumbers from './PageNumbers';
import { Container, Row, Col } from 'react-bootstrap';

function News() {
  return (
    <>
      <Container>
        <Heading content="News"/>
      </Container>
      <Container>
        <PageNumbers />
          <Row>
            <Col>
              <NewsCard image="./images/news/news-1.jpg"/> 
            </Col>
            <Col>
              <NewsCard image="./images/news/news-2.jpg"/> 
            </Col>
            <Col>
              <NewsCard image="./images/news/news-3.jpg"/> 
            </Col>
            <Col>
              <NewsCard image="./images/news/news-4.jpg"/> 
            </Col>
            <Col>
              <NewsCard image="./images/news/news-5.jpg"/> 
            </Col>
            <Col>
              <NewsCard image="./images/news/news-6.jpg"/> 
            </Col>
            <Col>
              <NewsCard image="./images/news/news-7.jpg"/> 
            </Col>
            <Col>
              <NewsCard image="./images/news/news-8.jpg"/> 
            </Col>
          </Row>
        <PageNumbers />
      </Container>


    </>
  )
}

export default News