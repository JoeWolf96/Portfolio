import React, { Component } from "react";


class Aboutme extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Gioele Rossi</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          I am Gioele Rossi, freshly graduated from General Assembly after an intensive 6 months Software Engineering course.
          I dedicated myself to coding while keeping my full time job and attending classes from 11 pm to 4 am 3 times a week.
          Thats just a little proof of the dedication and pride i put in my work!
          Computers and Videogames are my passion, i look at both with the same amaze as magic.
          Dont hesitate to connect with me even just for a friendly nerdy chat!.
        </p>
      </div>
    );
  }
}

export default Aboutme;
