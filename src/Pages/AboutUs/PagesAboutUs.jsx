import React, {useState, useEffect} from "react";
import styles from "./PagesAboutUs.module.css";
import { LOCALHOST_URL } from "../../AdminPage/Constant";

const PagesAboutUs = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/aboutUs";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
        <div className={styles.aboutUsWidth} style={{ maxWidth: "1200px" }}>
          <h5>Почему выбирают нас:</h5>
          <div className={styles.fourAboutUs}>
            {data.map((item) => {
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
