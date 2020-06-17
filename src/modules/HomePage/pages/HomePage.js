import React, { Component } from 'react';

import './HomePage.scss';
import PageHeader from '../components/PageHeader';
import FoodMenu from '../components/FoodMenu';
import Gallery from '../components/Gallery';
import Testimonial from '../components/Testimonial';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home-page-wrapper">
        <PageHeader/>
        <FoodMenu />
        <Gallery />
        <Testimonial />
      </div>
    )
  }
}

export default HomePage;
