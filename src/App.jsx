import './App.css'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import SortedSentence from './SortedSentence'
import { useState, useEffect } from 'react'
import { areIdsAscending } from './utils/utils'
import PropTypes from 'prop-types';

const App = ({ data, updateQuiz }) => {
  const [sentence, setSentence] = useState(data.unorderedSentence)
  const [isOrdered, setIsOrdered] = useState(false)
  const [oldSentence, setOldSentence] = useState(data.sentence)

  const handleAnswer = (option) => {
    if (option === data.correctAnswer) {
      updateQuiz()
    } else {
      console.log('Fallaste!')
    }
  };

  useEffect(() => {
    if (data.sentence !== oldSentence) {
      setSentence(data.unorderedSentence)
      setOldSentence(data.sentence)
    }
  }, [data, oldSentence])

  useEffect(() => {
    if (isOrdered) {
      setIsOrdered(false)
      updateQuiz()
    }
  }, [isOrdered, updateQuiz])


  const handleDragEnd = (event) => {
    const { active, over } = event
    const oldPosition = sentence.findIndex(word => word.id === active.id)
    const newPosition = sentence.findIndex(word => word.id === over.id)
    const newOrder = arrayMove(sentence, oldPosition, newPosition)
    setSentence(newOrder)
    const isOrdered = areIdsAscending(newOrder)
    if (isOrdered) {
      setIsOrdered(true)
    }
    return

  }

  return (
    <div className="home-container">
      <div className="home-container1">
        <span className="home-text">Master The Tenses</span>
      </div>
      <div className="home-container2">
        <div className="home-container-drag" >
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sentence}
              strategy={horizontalListSortingStrategy}
            >
              {sentence.map((word, index) => (
                <SortedSentence sentence={word} key={index} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        <span className="home-text1">{data.sentence}</span>
      </div>
      <div className="home-container3">
        {data.options.map((label, index) => (
          <button key={index} onClick={() => handleAnswer(label)} type="button" className="home-button">
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App

App.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
  updateQuiz: PropTypes.any
};