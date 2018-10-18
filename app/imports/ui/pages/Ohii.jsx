import React from 'react';
import TopMenu from '../components/TopMenu';
import FullWidthImage from '../components/FullWidthImage';
import OurWords from '../components/OurWords';
import OurPics from '../components/OurPics';
import FooterMenu from '../components/FooterMenu';


export default class Ohii extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <OurWords/>
          <OurPics/>
          <FooterMenu/>
        </div>
    );
  }
}
