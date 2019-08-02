import React ,{Component}from 'react';
import { Route,Switch, } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Newlist from '../components/News/Newlist';
import NewCreate01 from '../components/News/NewCreate';
import NewEdit from '../components/News/NewEdit';
class RouterView extends Component {
 
  render() {
    return (
    <Switch>
      <Route exact path="/Home"   component={Home} />
      <Route exact path="/About" component={About} />
      <Route  path="/Newlist" component={Newlist} />
      <Route  path="/NewCreate01" component={NewCreate01} />
      <Route  path="/NewEdit/:id" component={NewEdit} />
  </Switch>
    );
  }
}

export default RouterView




  