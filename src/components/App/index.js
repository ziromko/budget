import React from 'react';
import Balance from '../Balance';


class App extends React.Component {


  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions:[]

    }

    this.onIncrease = this.onIncrease.bind(this);
    console.log('constructor')
  }
  
  onIncrease() {
    this.setState({
      balance: this.state.balance + 1,
      transactions: this.state.transactions.push({
        label: 'increase',
        value: 1
      })
    })
  }

  onDecrease = () => {
    this.setState({
      balance: this.state.balance - 1,
      transactions: this.state.transactions.push({
        label: 'decrease',
        value: -1
      })
    })
  }

  render() {
    console.log('render')
   return (
    <div>
       <Balance balance={this.state.balance} />
       <button onClick={this.onIncrease}>Додати 1</button>
       <button onClick={this.onDecrease}>Відняти 1</button>
       <hr />
       
       {this.state.transactions.length === 0 ? 'Ще немає транзакцій' : null}
    </div>
  ) 
}  
}

export default App;