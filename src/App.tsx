import { clear } from "console";
import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    clearInterval(timer);
  }, [timer]);

  return (
    // DOM
    <div>
      <h3>현재 시간 : {time.toLocaleTimeString()}</h3>
      <h3>자기소개</h3>
      <h3>이름</h3>

      <h3>학력</h3>
      <li>삽교고등학교</li>
      <li>동양미래대학교</li>

      <h3>경력</h3>
      <li>이제 쌓아갈 예정</li>
    </div>
  );
}

export default App;
