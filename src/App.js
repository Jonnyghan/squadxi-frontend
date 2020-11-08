import React from 'react'
import {connect} from 'react-redux'
import TeamsContainer from './containers/TeamsContainer'
//import fetchTeams from './actions/fetchTeams'

class App extends React.Component {
  
  render(){
    
    return (
 
    <div className="App">
      <TeamsContainer />
    </div>
  );
 }
}

export default connect()(App);


