import {useEffect, useState} from 'react'
import App from './App'
import './App.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const AppContainer = () => {
    const [jsonData,setData] = useState({})

      const fetchData = async () => {
        
        try {
          const response = await fetch(`${BASE_URL}/api/v1/quiz/random`, {
            method: "GET",
            headers: {
              "Content-type": "application/json;charset=UTF-8",
              "ngrok-skip-browser-warning": true
            }
          });
          const jsonData = await response.json();
          setData(jsonData.data);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      console.log('url: ',`${BASE_URL}/api/v1/quiz/random`)
    useEffect(() => {    
        fetchData();
      }, []);
  return (
    <div className= "home-container">
      {jsonData.sentence ? (
        <App data={jsonData} updateQuiz={fetchData}/>
      ) : (
        <div>Loading...</div>
      )}        
    </div>
  )
}

export default AppContainer