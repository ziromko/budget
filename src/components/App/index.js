import React from 'react';
import User from '../User';
class App extends React.Component {

    render() {
   return (
    <div>
      <User name="Zirom" age="35"/>
      <User name="Lena" age="33"/>
    </div>
  ) 
}  
}

export default App;