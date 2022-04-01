import React from "react";
import styles from "./PagesAboutUs.module.css";
import { about } from "../../Constant/Constant";

const PagesAboutUs = () => {
  return (
    <>
        <div className={styles.aboutUsWidth} style={{ maxWidth: "1200px" }}>
          <h5>Почему выбирают нас:</h5>
          <div className={styles.fourAboutUs}>
            {about.map((item) => {
              return (
                  <div className={styles.aboutUs}>
                    <img src={item.img} alt="" />
                    <h2>{item.reasons}</h2>
                    <p>{item.reasonsInDetail}</p>
                  </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PagesAboutUs;
