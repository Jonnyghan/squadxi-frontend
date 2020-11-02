import React from 'react'
class App extends React.Component {
 
 componentDidMount(){
   fetch('http://localhost:3000/api/v1/teams', {
     method: 'GET'
   })
   .then(response => response.json())
   .then(teams => console.log(teams))
 }
 
  render(){
  return (
    <div className="App">
      App
    </div>
  );
 }
}

export default App;
