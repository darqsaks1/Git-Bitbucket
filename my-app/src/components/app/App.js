import React, { useEffect } from 'react';
import axios from 'axios'
import Header from '../header/Header'
import Sort from '../sort/Sort'
import List from '../list/List'
import News from '../news/News'

const App = () => {
  useEffect(() => {
    const getApiFromLink = async () => {
      const { data } = await axios.post(
        'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin'
        , 'hello', { headers: {"Content-type": "application/json" },  credentials: 'include' }
      )
      console.log(data)
    };
    getApiFromLink()
  })
  return (
    <div className="App">
      <Header />
      <div className='main-sections'>
        <Sort />
        <List />
        <News />
      </div>
    </div>
  );
}

export default App;
