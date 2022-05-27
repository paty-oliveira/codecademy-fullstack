import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        password: 'swordfish',
        authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({authorized: auth});
  }

  get login() {
    return (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password"/>
        <input type="submit" />
      </form>
    );
    }

  get contactInfo() {
    return (
        <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
        </ul>
    );
}

  render() {
    let header = this.state.authorized ? 'Contact' : 'Enter the Password';
    let authorization =  this.state.authorized ? this.contactInfo : this.login;

    return (
      <div id="authorization">
        <h1>{header}</h1>
        {authorization}
      </div>
    );
  }
}

ReactDOM.render(
    <Contact />,
    document.getElementById('app')
);