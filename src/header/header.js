import React, {Component} from 'react';
import './header.css';
import logo from '../img/logo.png';

class Header extends Component{
	render(){
  return (
    <div className="header">
        <div className='left-menu'>
            <img src={logo} alt='website logo'/>
        </div>
        <div className='middle-menu'>
            <ul>
                <li><a href="/#">Коридор</a></li>
                <li><a href="/#"> Ванна</a></li>
                <li><a href="/#">Спальня</a></li>
                <li><a href="/#">Кухня</a></li>
                <li><a href="/#">Кімната</a></li>
            </ul>
        </div>


    </div>
  );
}
}
export default Header;
