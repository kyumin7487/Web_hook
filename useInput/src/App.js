import React, { useState } from 'react';
import './App.css';

// useInput 훅 정의
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    // hook과는 관계가 없지만 함수를 더 예쁘게 만들고 검증 기능이 가능하다
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value)
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length < 10; // 10개 이상 못 입력하게 하기
  // const maxLen = value => !value.include("@"); // 원하는 글자 막기
  const name = useInput("신민호", maxLen);
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
