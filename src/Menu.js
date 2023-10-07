import React from 'react';
import { Link} from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
      <div className='menu'>
        <div className='menu-bar'>
        {/* <Link to='/'><h2 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Home</h2></Link>
        <Link to='/contact'><h2>Contact</h2></Link>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/contact'><h2>Contact</h2></Link>    
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/contact'><h2>Contact</h2></Link>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/contact'><h2>Contact</h2></Link>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/contact'><h2>Contact</h2></Link>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/contact'><h2>Contact</h2></Link>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/contact'><h2>Contact</h2></Link>
        <Link to='/header'><h2>Header</h2></Link> */}
        <table id="table">
          <tr>
            <td><Link to='/contact' style={{textDecoration: 'none'}}><h4>Contact</h4></Link></td>
          </tr>
          <tr>
            <td> <Link to='/header' style={{textDecoration: 'none'}}><h4>Header</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/' style={{textDecoration: 'none'}}><h4>Home</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/contact' style={{textDecoration: 'none'}}><h4>Contact</h4></Link></td>
          </tr>
          <tr>
            <td> <Link to='/header' style={{textDecoration: 'none'}}><h4>Header</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/' style={{textDecoration: 'none'}}><h4>Home</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/contact' style={{textDecoration: 'none'}}><h4>Contact</h4></Link></td>
          </tr>
          <tr>
            <td> <Link to='/header' style={{textDecoration: 'none'}}><h4>Header</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/' style={{textDecoration: 'none'}}><h4>Home</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/contact' style={{textDecoration: 'none'}}><h4>Contact</h4></Link></td>
          </tr>
          <tr>
            <td> <Link to='/header' style={{textDecoration: 'none'}}><h4>Header</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/' style={{textDecoration: 'none'}}><h4>Home</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/contact' style={{textDecoration: 'none'}}><h4>Contact</h4></Link></td>
          </tr>
          <tr>
            <td> <Link to='/header' style={{textDecoration: 'none'}}><h4>Header</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/' style={{textDecoration: 'none'}}><h4>Home</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/contact' style={{textDecoration: 'none'}}><h4>Contact</h4></Link></td>
          </tr>
          <tr>
            <td> <Link to='/header' style={{textDecoration: 'none'}}><h4>Header</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/' style={{textDecoration: 'none'}}><h4>Home</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/contact' style={{textDecoration: 'none'}}><h4>Contact</h4></Link></td>
          </tr>
          <tr>
            <td> <Link to='/header' style={{textDecoration: 'none'}}><h4>Header</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/' style={{textDecoration: 'none'}}><h4>Home</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/contact' style={{textDecoration: 'none'}}><h4>Contact</h4></Link></td>
          </tr>
          <tr>
            <td> <Link to='/header' style={{textDecoration: 'none'}}><h4>Header</h4></Link></td>
          </tr>
          <tr>
            <td><Link to='/' style={{textDecoration: 'none'}}><h4>Home</h4></Link></td>
          </tr>

        </table>
        </div>
      </div>
  );
};

export default Menu;
