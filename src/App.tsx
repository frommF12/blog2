import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    clearInterval(timer);
  }, [timer]);

  return (
    <Layout className="layout">
      <h3>현재 시간 : {time.toLocaleTimeString()}</h3>
      <Router>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: 1,
                label: <Link to="/">Home</Link>,
              },
              {
                key: 2,
                label: <Link to="/resume">이력서</Link>,
              },
              {
                key: 3,
                label: <Link to="/portfolio">포트폴리오</Link>,
              },
            ]}
          />
        </Header>
        <Layout.Content style={{ padding: "100 50px" }}>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout.Content>
      </Router>
    </Layout>
  );
}

const Resume = () => {
  return (
    <div>
      <h3>자기소개</h3>
      <h3>이름</h3>

      <h3>학력</h3>
      <li>삽교고등학교</li>
      <li>동양미래대학교</li>

      <h3>경력</h3>
      <li>이제 쌓아갈 예정</li>
    </div>
  );
};

const Portfolio = () => {
  return <></>;
};

const Home = () => {
  return <></>;
};

export default App;
