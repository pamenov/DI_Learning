import './App.css';
import Search from './components/Search';
import AppContext from './AppContext';
import { useEffect, useState } from 'react';
import DisplayPhotos from './components/DisplayPhotos'
import { useParams } from 'react-router-dom';
import { createClient } from 'pexels';
import { Foo} from './components/SimpleRequest'

function App() {
  const {topic} = useParams()
  // const client = createClient('4lT5u8gPTgyO7WtQKY5b0i3QMdYixIU9TAKa9p7N4qzwXQvLvDxdFh1D')
  const [values, setValues] = useState({
    topic: topic,
    // client: client,
    buttons: [
      'injustice',
      'cruel',
      'blood',
      'violence'
    ]
  })
  
  useEffect(() => {
    if (topic !== values.topic) {
      setValues({...values, topic:topic})
    }
  }, [])

  // return (
  //   <>
  //     <Foo/>
  //   </>
  // )
  return (
    <div className="App">
      <AppContext.Provider value={{values, setValues}}>
        <Search/>
        <DisplayPhotos/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
