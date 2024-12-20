import React from "react";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <div className="sideBar">
        <div className="user">
          <img src="/pngwing.com-Photoroom.png" alt="logo user" />
          <span>Username</span>
        </div>
        <ul className="List">
          <li>Edit info</li>
          <li>Incomes</li>
          <li>Reports and Analytic</li>
        </ul>
        <img className="logout" src="/logout.svg" alt="logo" />
      </div>
      <div className="main_content">
        <a href="/login">login</a>
        <div className="container_cards">
          <div>
            <p>Black List</p>
          </div>
          <div>
            <p>Available Places</p>
          </div>
          <div>
            <p>Reservation</p>
          </div>
          <div>
            <p>Vistior</p>
          </div>
        </div>
        <span className="visiters">(3435(visiters))</span>
      </div>
    </div>
  );
}

export default Home;
