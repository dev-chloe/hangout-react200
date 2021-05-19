import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://cdn.pixabay.com/photo/2021/05/04/13/08/fantasy-6228650_960_720.jpg',
    altText: ' 슬라이드1 이미지 대체 문구',
    caption: ' 슬라이드1 설명',
    header: ' 슬라이드1 제목'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg',
    altText: ' 슬라이드2 이미지 대체 문구',
    caption: ' 슬라이드2 설명',
    header: ' 슬라이드2 제목'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    altText: ' 슬라이드3 이미지 대체 문구',
    caption: ' 슬라이드3 설명',
    header: ' 슬라이드3 제목'
  }
]

class R041_ReactstrapCarousel extends Component {
  render() {
    return (
      <UncontrolledCarousel items={items} />
    )
  }
}

export default R041_ReactstrapCarousel;