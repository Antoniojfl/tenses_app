export const areIdsAscending = (array) => {
    for (let i = 1; i < array.length; i++) {
      if (array[i].id <= array[i - 1].id) {
        return false;
      }
    }
    return true;
  }

export const shuffleArray = (array) => {
    const newArray = [...array];
  
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
  
    return newArray;
  }
