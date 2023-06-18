import './App.css';
import React from 'react';

const fetchData = (toSave) => fetch('https://webhook.site/660c2a5c-1f01-4f2b-9c84-3256b2a7cb9d', {
  method: 'POST',
  headers: {
    'connection': 'close',
    'access-control-request-headers': 'content-type',
    'access-control-request-method': "POST"

  },
  body: JSON.stringify({
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27,
  }),
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    toSave({responceData: data})
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
});

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      responceData: null
    }
  }

  componentDidMount() {
    fetch('https://webhook.site/660c2a5c-1f01-4f2b-9c84-3256b2a7cb9d', {
      method: 'POST',
      mode: "no-cors",
      // headers: {
      //   'connection': 'close',
      //   'access-control-request-headers': 'content-type',
      //   'access-control-request-method': "POST"

      // },
      // body: JSON.stringify({
      //   key1: 'myusername',
      //   email: 'mymail@gmail.com',
      //   name: 'Isaac',
      //   lastname: 'Doe',
      //   age: 27,
      // }),
    })
    .then(response => response.json())
    .then(data => {
    // Handle the response data
      this.setState({responceData: data})
    })
    .catch(error => {
    // Handle any errors
      console.log('im in error')
      console.error(error);
    });
    // fetchData(this.setState)
    console.log(this.state)
  }

  render() {
    return (
      <>
        {this.state.responceData}
      </>
    )
  }


}

export default App;
