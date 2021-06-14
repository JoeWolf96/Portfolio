import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Gioele Rossi</h2>
            <img style={{height: '250px'}} src="https://i.imgur.com/9MPSBkx.jpg" alt="avatar" />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              I have been very passionate about computers videogames and technology since i was just 4 years old.
              I cant wait to get in contact with others and share our amazing experiences!
            </p>
          </Cell>
          <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">

              <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden='true'></i>+44 7521599972</ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-envelope" aria-hidden='true'></i>giolupo.work@gmail.com</ListItemContent>
                  </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
