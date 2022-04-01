import React from "react";
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

const Contacts = () => {
  return (
    <div>
      <PagesHeader />
      <div style={{ maxWidth: "1000px" }} className={styles.contactsMain}>
        <div className="contactsText">
          <h2>Контакты</h2>
          <h4>Свяжитесь с нами</h4>
          {/* number */}
          <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
          <div className={styles.contactDetails}>
            <div>
              <img src={phone} alt="" />
            </div>
            <div>
              <p>+996500405988</p>
            </div>
          </div>
          <img src={line} alt="" />
          {/* mail */}
          <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
          <div className={styles.contactDetails}>
            <div>
              <img src={message} alt="" />
            </div>
            <div>
              <p>food-planet@gmail.com</p>
            </div>
          </div>
          <img src={line} alt="" />
          {/* location */}
          <h4>Посетите нас</h4>
          <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
          <div className={styles.contactDetails}>
            <div>
              <img src={location} alt="" />
            </div>
            <div>
              <p>Суюмбаева 123, Бишкек, Кыргызстан</p>
            </div>
          </div>
          {/* social media */}
          <div className={styles.socialMedia}>
            <div>
              <img src={telegram} />
            </div>
            <div>
              <img src={facebook} />
            </div>
            <div>
              <img src={instagram} />
            </div>
          </div>
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
      <div
        className={styles.complaintsAndFeedbacks}
        style={{ maxWidth: "1030px" }}
      >
        <h2>Журнал жалоб</h2>
        <h6>
          Пожалуйста, помогите нам улучшить свои услуги оставив свои комментарии
          и жалобы.
        </h6>
        <div className={styles.complainantsInformation}>
          <div>
            <p>Имя:</p>
            <input type="text" />
          </div>
          <div>
            <p>Фамилие:</p>
            <input type="text" />
          </div>
        </div>
        <div className={styles.complainantsInformation}>
          <div>
            <p>Номер:</p>
            <input type="text" />
          </div>
          <div>
            <p>Почта:</p>
            <input type="text" />
          </div>
        </div>
        <p>Отзывы/жалобы:</p>
        <input className={styles.complaints} type="text" /> <br />
        <div className={styles.button}>
          <button>оставить</button>
        </div>
      </div>
      <PagesFooter />
    </div>
  );
};

export default Contacts;
