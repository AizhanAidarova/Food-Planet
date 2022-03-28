import React from "react";
import styles from "./PagesFeedbacks.module.css";
import border from "../Media/Icons/FeedbackBorder.svg";
import greyEllipse from "../Media/Icons/GreyEllipse.svg";
import pencil from "../Media/Icons/Pencil.svg";

const PagesFeedbacks = () => {
  return (
    <>
      <div style={{ maxWidth: "1600px" }} className={styles.feedbacks}>
        <div style={{ maxWidth: "1120px" }}>
          <h3>Отзывы</h3>
          <div className={styles.fourFeedbacks}>
{/* first */}
            <div className={styles.oneFeedback}>
              <img src={border} />
              <div className={styles.firstFeedback}>
                <img src={greyEllipse} alt="" />
                <div className={styles.name}>
                  <h4>Cергей</h4>
                  <img src={pencil} alt="" />
                </div>
                <p>
                  Большое спасибо! 5 пицц доставили даже быстрее чем
                  планировалось. Пицца была горячая и всему коллективу
                  понравилась! День Рождения прошел отлично! :)
                </p>
                <h4>02.07.2020</h4>
              </div>
            </div>
{/* second */}
            <div className={styles.oneFeedback}>
              <img src={border} />
              <div className={styles.firstFeedback}>
                <img src={greyEllipse} alt="" />
                <div className={styles.name}>
                  <h4>Cергей</h4>
                  <img src={pencil} alt="" />
                </div>
                <p>
                  Большое спасибо! 5 пицц доставили даже быстрее чем
                  планировалось. Пицца была горячая и всему коллективу
                  понравилась! День Рождения прошел отлично! :)
                </p>
                <h4>02.07.2020</h4>
              </div>
            </div>
{/* third */}
            <div className={styles.oneFeedback}>
              <img src={border} />
              <div className={styles.firstFeedback}>
                <img src={greyEllipse} alt="" />
                <div className={styles.name}>
                  <h4>Cергей</h4>
                  <img src={pencil} alt="" />
                </div>
                <p>
                  Большое спасибо! 5 пицц доставили даже быстрее чем
                  планировалось. Пицца была горячая и всему коллективу
                  понравилась! День Рождения прошел отлично! :)
                </p>
                <h4>02.07.2020</h4>
              </div>
            </div>
{/* fourth */}
            <div className={styles.oneFeedback}>
              <img src={border} />
              <div className={styles.firstFeedback}>
                <img src={greyEllipse} alt="" />
                <div className={styles.name}>
                  <h4>Cергей</h4>
                  <img src={pencil} alt="" />
                </div>
                <p>
                  Большое спасибо! 5 пицц доставили даже быстрее чем
                  планировалось. Пицца была горячая и всему коллективу
                  понравилась! День Рождения прошел отлично! :)
                </p>
                <h4>02.07.2020</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesFeedbacks;
