import React, { useContext, useRef, useState } from "react";
//import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';
import "./contact.css";
import Ph from "../../img/phone.png";
import Em from "../../img/email.png";
import Add from "../../img/address.png";
import { ThemeContext } from "../../context";
const Contact = () => {
  const fileRef = useRef();
  const [done,setDone]=useState(false)
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_ny8gc5c",
        "template_657fz4s",
        fileRef.current,
        "WRRfmWfUqJvqsxROYrB1b"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="co">
      <div className="co-bg">
        <div className="co-wrap">
          <div className="co-left">
            <h1 className="co-title">Let's discuss your project. </h1>
            <div className="co-info">
              <div className="co-info-I">
                <img src={Ph} alt="" className="co-icon" />
              </div>
              + 1714 868 9135
              <div className="co-info-I">
                <img src={Em} alt="" className="co-icon" />
              </div>
              contact@hotmail.dev
              <div className="co-info-I">
                <img src={Add} alt="" className="co-icon" />
              </div>
              10525 Washintogon st, Hathrowne ca 90344
            </div>
          </div>
          <div className="co-right">
            <p className="co-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along
            </p>
            <form ref={fileRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor : darkMode && "#333"}}  type="text" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor : darkMode && "#333"}} rows={5} placeholder="Message" name="Message" />

              <button>submit </button>
              {done && "thank you.."}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
