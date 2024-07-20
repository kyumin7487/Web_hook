import React, { useState } from 'react';
import './App.css';

// useInput 훅 정의
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setValue(value)
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("신민호");

  return (
    <div className="App">
      <h1>useInput 사용하기</h1>
          <input placeholder='이름을 입력해주세요' {...name}/> 
          {/* 다르게 써보기 */}
          {/* <input placeholder='이름을 입력해주세요' value={name.value} onChange={name.onChange}/> */} 
    </div>
  );
}

export default App;
