// import React, {useEffect, useState} from 'react';
// import style from "../../Pages/Menu/PagesMenu.module.css";
// import phone from "../../Pages/Media/icon/phone-call.png";
// import {LOCALHOST_URL} from "../../AdminPage/Constant";
//
// const Delivery = (props) => {
//     const [delivery, setDelivery] = useState([]);
//     const [data, setData] = useState([]);
//
//     const getData = () => {
//         const url = LOCALHOST_URL + "/delivery";
//
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => setData(data));
//     };
//
//     useEffect(()=>{
//         getData()
//     },[])
//     return (
//
//         <div className={style.divBord} key={props.id}>
//            <div>
//                 <img className={style.deliveriImg} src={props.imgUrl} alt=""/>
//             </div>
//             <div className={style.delivery2}>
//                 <h2>{props.title}</h2>
//                 <p>{props.titleDesc}</p>
//                 <p>{props.desc}</p>
//                 <p><img style={{width:"23px",marginRight:"10px"}} src={phone} alt=""/>{props.phone}</p>
//             </div>
//         </div>
//     );
// };
//
// export default Delivery;