import axios from "axios";
import React, { useState, useEffect } from "react";
import "./asset/home.css";
import Card from "./Card";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbxbcyjPAchV02CRY0SVslCtvGMlWpUhcKSSc8SGCm4D-ypXXciBHNBU5XzP0cQ9cnyH/exec"
      )
      .then((res) => res.data)
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="aboutme" id="about">
        <div className="about-con">
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"></img>
          </div>
          <div className="textabout">
            <h1>@ Burapat Nun</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </div>
      </div>

      <div className="container" id="menu">
        <div className="content">
          {data !== null ? (
            data.map((e,i) => {
                return <Card name={e.name} cost={e.cost + " บาท"} img={e.img} dis={e.dis} />
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
