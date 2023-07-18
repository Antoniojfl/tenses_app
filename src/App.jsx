import './App.css'
import {useState} from 'react'

const App = ({data, updateQuiz}) => {
  console.log('data in app', data)

  
    const handleAnswer = (option) => {
     if(option === data.correctAnswer){
      updateQuiz()
     }else{
      console.log('Fallaste!')
     }
     
      // Aquí puedes realizar cualquier otra acción que desees
    };

  return (
    <div className="home-container">
      <div className="home-container1">
        <span className="home-text">Master The Tenses</span>
      </div>
      <div className="home-container2">
        <span className="home-text1">{data.sentence}</span>
      </div>
      <div className="home-container3">
        <button onClick={() => handleAnswer('Present Simple')} type="button" className="home-button">
          Present Simple
        </button>
        <button onClick={() => handleAnswer('Past Simple')} type="button" className="home-button">
          Past Simple
        </button>
        <button onClick={() => handleAnswer('Future Simple')} type="button" className="home-button">
          Future Simple
        </button>
        <button onClick={() => handleAnswer('Present Continuous')} type="button" className="home-button">
          Present Continuous
        </button>
        <button onClick={() => handleAnswer('Past Continuous')} type="button" className="home-button">
          Past Continuous
        </button>
      </div>
    </div>
  )
}

export default App