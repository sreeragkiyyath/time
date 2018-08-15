import React from 'react';
import Dialog from 'react-bootstrap-dialog';


export default class ShowAlert extends React.Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this);
   }

  onClick () {
    alert("button called");
    this.dialog.showAlert('Hello Dialog!')
  }

  render () {
    return (
      <div>
        <p>
          hi this is new buton
          <button className="btn btn-success" onClick={this.onClick}>Submit</button>

        </p>
        <Dialog ref={(el) => { this.dialog = el }} />
      </div>
    )
  }
}