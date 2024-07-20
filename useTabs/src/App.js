import React, { useState } from 'react';
import './App.css';

const content = [
  {
    tab: "1번",
    content: "나는 신민호다"
  },
  {
    tab: "2번",
    content: "나는 김의현이다"
  }
]

const useTabs = (initialTab, allTabs) => {
  // allTabs가 배열이 아닐 경우 return
  const isValidTabs = Array.isArray(allTabs);
  const [currentIndex, setCurrentIndex] = useState(isValidTabs ? initialTab : 0);

  return {
    currentItem: isValidTabs ? allTabs[currentIndex] : null, // 배열이 아닐경우 null 주기
    changeItem: setCurrentIndex
  }
}

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  
  return (
    <div className="App">
      {content.map((section, index) => 
        <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
      )}
      <div>{currentItem?.content}</div>
    </div>
  );
}

export default App;
