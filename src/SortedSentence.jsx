import { useSortable } from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
import './App.css'

const SortedSentence = ({sentence}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
      id: sentence.id
    })

    const style = {
      transform: CSS.Transform.toString(transform),
      transition
    }

  return (
    
      <div className="home-container-item" 
      style={style} 
      ref={setNodeRef}
      {...attributes}
      {...listeners}>
          <span className="home-text1">
            <span>{sentence.word}</span>
          </span>
      </div>
  )
}

export default SortedSentence

