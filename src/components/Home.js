import axios from "axios";
import React, { useState, useEffect } from "react";
import "./asset/home.css";
import Card from "./Card";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=H0_a9lukOoMNmGSZmZ7fN0PFm-n4j4m3aDyOYvhCUOFyb7dGbuF5BXk4Yo2kX21ZyStvIb-HjGcgy2_Jy6vb2Ykqjx-uZQurm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLbyxt3QpmRsH3nS6i0AKRIAOvTIG7lubuTNFJjKuJmsEaFSp5Ek7vmXbATVSXt3NC4fSQWB5RRxtxXJXh5mdW2_2Ybj-VDT3A&lib=MnrSCXvqgbkTd7vKJ2CYbeEKkhXDGw_ZZ"
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
                return <Card key={i} name={e.name} cost={e.cost + " บาท"} img={e.img} dis={e.dis} />
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
