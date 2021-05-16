import React from 'react';
import './assets/css/App.scss';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import {Layout} from '@/components';
import store from '@/store';
import Login from '@/views/user/login'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      token:localStorage.getItem('token')
    }
  }
  onLogin(){
    this.setState({
      token:localStorage.getItem('token')
    })
  }
  render(){
    let{token}=this.state
    return (
      <HashRouter>
        <Provider store={store}>
          {token?<Layout />:<Login onLogin={this.onLogin.bind(this)}/>}
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
