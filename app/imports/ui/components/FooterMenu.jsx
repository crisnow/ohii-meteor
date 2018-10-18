import React from 'react';
import { List, Grid } from 'semantic-ui-react';


export default class FooterMenu extends React.Component {
  render() {
    return (

        <Grid className='borderless background' divided='vertically'>
          <Grid.Row columns={5}>
            <Grid.Column>Help + Info
              <hr/>
              <List>
                <List.Item>Order Status</List.Item>
                <List.Item>Returns + Exchanges</List.Item>
                <List.Item>Shipping</List.Item>
                <List.Item>Orders + Payments</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Quick Links
              <hr/>
              <List>
                <List.Item>In-Store Pickup</List.Item>
                <List.Item>Afterpay</List.Item>
                <List.Item>Brands</List.Item>
                <List.Item>Gift Cards</List.Item>

              </List>
            </Grid.Column>
            <Grid.Column>Extras
              <hr/>
              <List>
                <List.Item>UO Rewards</List.Item>
                <List.Item>UO MRKT</List.Item>
                <List.Item>UO Blog</List.Item>
              </List>

            </Grid.Column>

            <Grid.Column>Find A Store
              <hr/>
              <List>
                <List.Item>Store Locator</List.Item>
                <List.Item>UO Spaces</List.Item>
              </List>

            </Grid.Column>

            <Grid.Column>Follow Us
              <hr/>
              <List>
                <List.Item> <i className="facebook icon"></i></List.Item>
                <List.Item><i className="instagram icon"></i></List.Item>
                <List.Item> <i className="pinterest icon"></i></List.Item>
                <List.Item><i className="twitter icon"></i></List.Item>
              </List>

            </Grid.Column>
          </Grid.Row>


        </Grid>


    )
  }
}
