import React, { PureComponent } from 'react';

class PinInfo extends PureComponent {

  render() {
    const { info } = this.props;
    const placeName = `${info.name}`;
    const number = `${info.number}`;
    const postCode = `${info.postcode}`;
    const url = `${info.url}`
    const id = `${info.id}`

    return (
      <div>  
        <div>Name: {placeName}</div>        
        <div>Phone number: {number}</div>        
        <div>Postcode: {postCode}</div>    
        <div>URL: {url}</div>    
        {/* <div>ID: {id}</div>           */}
      </div>
    )

  }
}

export default PinInfo