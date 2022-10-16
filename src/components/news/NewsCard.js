import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsCard(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary">More</Button>
            </Card.Body>
            </Card>
        </>
      );
}

export default NewsCard