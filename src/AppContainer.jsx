import {useEffect, useState} from 'react'
import App from './App'
import './App.css'

const AppContainer = () => {
    const [jsonData,setData] = useState({})
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/v1/quiz/random');
          const jsonData = await response.json();
          console.log('data',jsonData.data)
          setData(jsonData.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect(() => {    
        fetchData();
      }, []);
  return (
    <div className= "home-container">
        
        <App data={jsonData} updateQuiz={fetchData}/>
    </div>
  )
}

export default AppContainer