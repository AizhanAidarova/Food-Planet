import React from "react";
import styles from "./PagesFeedbacks.module.css";
import border from "../Media/Icons/FeedbackBorder.svg";
import greyEllipse from "../Media/Icons/GreyEllipse.svg";
import pencil from "../Media/Icons/Pencil.svg";
import { feedbacks } from "../../Constant/Constant";

const PagesFeedbacks = () => {
  return (
    <>
      <div style={{ maxWidth: "1600px" }} className={styles.feedbacks}>
        <div style={{ maxWidth: "1120px" }}>
          <h3>Отзывы</h3>
          <div className={styles.fourFeedbacks}>
            {feedbacks.map((item) => {
              return <div className={styles.oneFeedback}>
              <img src={border}/>
              <div className={styles.firstFeedback}>
                <img src={greyEllipse} alt="" />
                <div className={styles.name}>
                  <h4>{item.name}</h4>
                  <img src={pencil} alt="" />
                </div>
                <p>{item.feedback}</p>
                <h4>{item.dateOfPublication}</h4>            
              </div>
            </div>
            })}
      
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesFeedbacks;
