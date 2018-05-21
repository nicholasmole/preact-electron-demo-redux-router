import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import logo from './logo.svg';
import './App.css';
import * as actions from './ducks/store';
import reduce from './ducks/reducers';

const mapApp = state => ({
  myStore: reduce
});

const mapDispatchToProps = dispatch => ({
 
  addTodo: props => dispatch(actions.addTodo(props))

});

class App extends Component {
  componentDidMount() {
      this.props.addTodo("This is the addTodoState Prop ");
  }
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Preact</h1>
        </header>
        <p className="App-intro">
        {this.props.todos[0] && this.props.todos[0]['text']} 
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={()=> this.props.history.push('/2')}>GO TO PAGE 2</div>
      </div>
    );
  }
}

export default connect(reduce, mapDispatchToProps)(App);
