import React from "react";
import styles from "./PagesFeedbacks.module.css";
import border from "../Media/Icons/FeedbackBorder.svg";
import greyEllipse from "../Media/Icons/GreyEllipse.svg";
import pencil from "../Media/Icons/Pencil.svg";
import { feedbacks } from "../../Constant/Constant";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

//https://github.com/akiran/react-slick

const PagesFeedbacks = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

  return (
    <>
        <div  style={{ maxWidth: "1200px" }} className={styles.feedbacks}>
          <h5>Отзывы</h5> 
          <Slider {...settings} className={styles.scroll}>
          {/* <div className={styles.fourFeedbacks}> */}
            {feedbacks.map((item) => {
              return  <div className={styles.oneFeedback}>
              <img src={border}/>
              <div className={styles.firstFeedback}>
                <img className={styles.firstFeedbackImage} src={item.img} alt="" />
                <div className={styles.name}>
                  <h4>{item.name}</h4>
                  <img src={pencil} alt="" />
                </div>
                <p>{item.feedback}</p>
                <h4>{item.dateOfPublication}</h4>            
              </div>
            </div> 
            })}
      
          {/* </div> */}
          </Slider>
           </div>
    
  </>
  );
};

export default PagesFeedbacks;

