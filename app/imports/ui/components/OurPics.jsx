import React from 'react';
import { Segment } from 'semantic-ui-react';


export default class OurPics extends React.Component {
  render() {
    return (
        <div className="ui borderless container">
          <Segment.Group horizontal className="footer-background">

            <Segment>
              <img className={'ui image item'} src="https://images.contentful.com/q602vtcuu3w3/5AlEUQbCmsC8ysAE26q8MQ/54932f4c960d9cf010
           829be809b13627/Ohii_Launch_DT_Slice_4.jpg?q=80&w=446&fm=webp"/>
            </Segment>

            <Segment>
              <img className={'ui bordless image'} src="https://images.contentful.com/q602vtcuu3w3/2jPIptmJGIoCQGy2oOOguW/954de271fffa7b64463f6b9deaeeeb12/
              Ohii_Launch_DT_Slice_5.jpg?q=80&w=446&fm=webp"/>

            </Segment>

            <Segment>
              <img className={'ui bordless image'} src="https://images.contentful.com/q602vtcuu3w3/obBu07LzoGO20UoqWG8sg/
              b13805b7578b1c3539e24ad62afaed8f/Ohii_Launch_DT_Slice_6.jpg?q=80&w=446&fm=jpg&fl=progressive"/>

            </Segment>
          </Segment.Group>
        </div>

    );
  }
}
