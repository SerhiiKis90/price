import React, {Component} from 'react';
import './item.css';
class Item extends Component{
	render(){
  return (
  <div id='row'>
      <div id='item-name'>Ламінат</div>
      <div id='item-count'>11</div>
      <div id='item-measure'>M</div>
      <div id='item-price-one'>22 грн</div>
      <div id='item-price-all'>123123 грн</div>
  </div>
  );
}
}
export default Item;
