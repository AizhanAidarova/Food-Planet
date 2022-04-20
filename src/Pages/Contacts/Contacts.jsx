import React, { useEffect, useState } from "react";
import styles from "../Contacts/Contacts.module.css";
import phone from "../Media/Icons/phone.svg";
import message from "../Media/Icons/message.svg";
import location from "../Media/Icons/location.svg";
import line from "../Media/Icons/Line.svg";
import telegram from "../Media/Icons/telegram.svg";
import facebook from "../Media/Icons/facebook.svg";
import instagram from "../Media/Icons/instagram.svg";
import lineVertical from "../Media/Icons/LineVertical.svg";
import map from "../Media/Icons/map.svg";
import PagesHeader from "../Header/PagesHeader";
import PagesFooter from "../Footer/PagesFooter";
import toast, { Toaster } from "react-hot-toast";
import { LOCALHOST_URL } from "../../AdminPage/Constant";
import { getCurrentDate } from "../../helpers";

const Contacts = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const getName = (event) => {
    setName(event.currentTarget.value);
  };

  const getSurname = (event) => {
    setSurname(event.currentTarget.value);
  };

  const getNumber = (event) => {
    setNumber(event.currentTarget.value);
  };

  const getEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const getComment = (event) => {
    setComment(event.currentTarget.value);
  };

  const addComment = () => {
    const obj = {
      name: name,
      surname: surname,
      number: number,
      email: email,
      feedback: comment,
      date: getCurrentDate(),
    };

    const url = LOCALHOST_URL + "/feedbacks";

    console.log(url);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Спасибо большое за ваш отзыв");
        } else {
          toast.error("Что-то пошло не так. Обновите страницу");
        }
      })
      .then((data) => setName(data));
  };
  // contact information
  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/contacts";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PagesHeader />
      <div style={{ maxWidth: "1000px" }} className={styles.contactsMain}>
        <div className="contactsText">
          <h2>Контакты</h2>
          <h4>Свяжитесь с нами</h4>
          {data.map((item) => {
            return (
              <>
                <p>
                  Доставим заказанную вами еду за 30 минут + напиток в подарок
                </p>
                {/* number */}
                <div className={styles.contactDetails}>
                  <div>
                    <img src={phone} alt="" />
                  </div>
                  <div>
                    <p>{item.number}</p>
                  </div>
                </div>
                <img src={line} alt="" />
                {/* mail */}
                <p>
                  Доставим заказанную вами еду за 30 минут + напиток в подарок
                </p>
                <div className={styles.contactDetails}>
                  <div>
                    <img src={message} alt="" />
                  </div>
                  <div>
                    <p>{item.email}</p>
                  </div>
                </div>
                <img src={line} alt="" />
                {/* location */}
                <h4>Посетите нас</h4>
                <p>
                  Доставим заказанную вами еду за 30 минут + напиток в подарок
                </p>
                <div className={styles.contactDetails}>
                  <div>
                    <img src={location} alt="" />
                  </div>
                  <div>
                    <p>{item.adress}</p>
                  </div>
                </div>
                {/* social media */}
                <div className={styles.socialMedia}>
                  <div>
                    <a href={item.telegram}><img src={telegram} /></a>
                  </div>
                  <div>
                    <a href={item.facebook}><img src={facebook} /></a>
          
                  </div>
                  <div>
                    <a href={item.instagram}> <img src={instagram} /></a>
                   
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.lineVertical}>
          {" "}
          <img src={lineVertical} alt="" />
        </div>
        <div className={styles.map}>
          {" "}
          <img src={map} alt="" />
        </div>
      </div>
      {/* feedbacks */}
      <div
        className={styles.complaintsAndFeedbacks}
        style={{ maxWidth: "1030px" }}
      >
        {/* ОТЗЫВЫ И ЖАЛОБЫ */}
        <h2>Журнал жалоб и отзывов</h2>
        <h6>
          Пожалуйста, помогите нам улучшить свои услуги оставив свои комментарии
          и жалобы.
        </h6>
        <div className={styles.complainantsInformation}>
          <div>
            {/* <label className={styles.hoverEffect} htmlFor=""> */}
              {" "}
              Имя:
              <input onChange={getName} type="text" />
            {/* </label> */}
          </div>
          <div>
            {/* <label className={styles.hoverEffect} htmlFor=""> */}
              Фамилие:
              <input onChange={getSurname} type="text" />
            {/* </label> */}
          </div>
        </div>
        <div className={styles.complainantsInformation}>
          <div>
            {/* <label className={styles.hoverEffect} htmlFor=""> */}
              Номер:
              <input onChange={getNumber} type="number" />
            {/* </label> */}
          </div>
          <div>
            {/* <label className={styles.hoverEffect} htmlFor=""> */}
              Почта:
              <input onChange={getEmail} type="email" />
            {/* </label> */}
          </div>
        </div>
        {/* <label className={styles.hoverEffect} htmlFor=""> */}
          Отзывы/жалобы:
          <input
            onChange={getComment}
            className={styles.complaints}
            type="text"
          />{" "}
        {/* </label>{" "} */}
        <br />
        <div className={styles.button}>
          <button onClick={addComment}>оставить</button>
          <Toaster />
        </div>
      </div>
      <PagesFooter />
    </div>
  );
};

export default Contacts;
