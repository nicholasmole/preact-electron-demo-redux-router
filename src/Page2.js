import { h, Component } from 'preact';
import logo from './logo.svg';
import './App.css';

class Page2 extends Component {
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo but-red" alt="logo" />
          <h1 className="App-title">Welcome to Preact</h1>
        </header>
        <p className="App-intro">
					Page 2 
        </p>
				<div onClick={()=> this.props.history.push('/')}>GO BACK TO APP</div>
      </div>
    );
  }
}

export default Page2;
