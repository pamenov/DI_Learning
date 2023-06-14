import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ]
    }
  }

  vote = (id) => {
    this.setState(prevState => {
      let updatedLanguages = prevState.languages.slice() 
      updatedLanguages[id].votes += 1
      return {
        languages: updatedLanguages
      }
    })
  }

  render() {
    const ArrayJSX = this.state.languages.map((language, id) => {
      return(
        <div key={id} className='language-box'>
          <button onClick={() => {this.vote(id)}} > {language.name} </button>
          <p> Total votes {language.votes / 2} </p>
        </div>
      )
    })
    return(
      <>
        {ArrayJSX}
      </>
    )
  }

}

export default App;
