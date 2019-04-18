import React, { Component } from 'react';
import logohead from '../img/Logo-head.png';
import { Badge, Button, Container, Row, Col ,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Head.css';

class Head extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      dropdownOpen: false
    };
  }

  toggle(tab) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form className="Form-head">

    <Container>
  <Row>
    <Col xs="2.5"><img src={logohead} className="App-logo" alt="logohead"/></Col>
    <Col xs="auto"><text className="Text-head">SUT SOS</text>
    <br/>
    <text className="Text-head2">Suranaree University of Technology</text>
    </Col>
    <Col>
    <div className="profile">
    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret color="primary">
      Profile User
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>User Name</DropdownItem>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Sign Out</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
      </div>
      <br/><br/><br/><br/>
      <div className="right">
  <Button color="danger" >Notifications <Badge color="secondary">4</Badge></Button>{' '}
  <Button color="primary" >History Notify <Badge color="secondary">5</Badge></Button>{' '}
  <Button color="success" >SOS</Button>{' '}
  <Button color="info" >Repair</Button>{' '}
</div>
    </Col>
    
  </Row>
  
  </Container>
  
        </form>
        </header>
      </div>
      
    );
  }
}

export default Head;
