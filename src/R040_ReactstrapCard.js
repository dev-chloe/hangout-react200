import React, { Component } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

class R040_ReactstrapCard extends Component {
  render() {
    return(
      <div>
        <Card>
          <CardImg top height="400px" src="https://cdn.pixabay.com/photo/2021/05/04/13/08/fantasy-6228650_960_720.jpg" alt="Card image" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <CardText>Card detail lweifelw ihoewelktno whoeqpwehoe ddhfowk ehowekt otie odiwl the we</CardText>
            <Button>button</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default R040_ReactstrapCard;