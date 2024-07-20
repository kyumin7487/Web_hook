import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [item, setItem] = useState(1);
  // const item = useState(1)[0]; // 한개만 쓰고 싶을때 이렇게 사용하기
  const incrementItem = () => setItem(item+1)
  const decrementItem = () => setItem(item-1)
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>더하기</button>
      <button onClick={decrementItem}>빼기</button>
    </div>
  );
}

export default App;

// Class 형식으로 useState 써보기(hook을 사용하지 않으면 이런식으로 바뀜)
// class AppUgly extends React.Component{
//   state = {
//     item: 1
//   }
//   render() {
//     const {item} = this.state
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <button onClick={this.incrementItem}>더하기</button>
//         <button onClick={this.decrementItem}>빼기</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item + 1
//       }
//     });
//   }
//   decrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       }
//     });
//   }
  
// }

// export default AppUgly