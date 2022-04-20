import React, {useState, useEffect, useContext} from 'react';
import style from '../Basket/Basket.module.css'
import PagesHeader from '../Header/PagesHeader';
import { LOCALHOST_URL } from '../../AdminPage/Constant';
import deleteImg from '../Media/icon/bin.png'
import asian from '../Media/pizza/asian.svg';
import Card from "./Card";
import PagesFooter from '../Footer/PagesFooter';


const Basket = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }
    const decrement = () => {
        setNumber(number - 1);
    }

    const [name, setName] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [typeorder1, setTypeorder1] = useState("");
    const [typeorder2, setTypeorder2] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");
    const [corpus, setCorpus] = useState("");
    const [flat, setFlat] = useState("");
    const [porch, setPorch] = useState("");
    const [floor, setFloor] = useState("");
    const [intercom, setIntercome] = useState("");
    const [deliveryhour, setDeliveryhour] = useState("");
    const [deliveryminut, setDeliveryminut] = useState("");
    const [addinfo, setAddinfo] = useState("");
    const [typepay, setTypepay] = useState("");
    const [deposit, setDeposit] = useState("");

    const getName = (event) => {
        setName(event.currentTarget.value);
    };
    const getPhonenumber = (event) => {
        setPhonenumber(event.currentTarget.value);
    };
    const getTypeorder1 = (event) => {
        setTypeorder1(event.currentTarget.value);
    };
    const getTypeorder2 = (event) => {
        setTypeorder2(event.currentTarget.value);
    };
    const getCity = (event) => {
        setCity(event.currentTarget.value);
    };
    const getStreet = (event) => {
        setStreet(event.currentTarget.value);
    };
    const getHouse = (event) => {
        setHouse(event.currentTarget.value);
    };
    const getCorpus = (event) => {
        setCorpus(event.currentTarget.value);
    };
    const getFlat = (event) => {
        setFlat(event.currentTarget.value);
    };
    const getPorch = (event) => {
        setPorch(event.currentTarget.value);
    };
    const getFloor = (event) => {
        setFloor(event.currentTarget.value);
    };
    const getIntercom = (event) => {
        setIntercome(event.currentTarget.value);
    };
    const getDeliveryhour = (event) => {
        setDeliveryhour(event.currentTarget.value);
    };
    const getDeliveryminut = (event) => {
        setDeliveryminut(event.currentTarget.value);
    };
    const getAddinfo = (event) => {
        setAddinfo(event.currentTarget.value);
    };
    const getTypepay = (event) => {
        setTypepay(event.currentTarget.value);
    };
    const getDeposit = (event) => {
        setDeposit(event.currentTarget.value);
    };

    const addOrderinfo = () => {
        const obj = {
            name: name,
            phonenumber: phonenumber,
            typeorder1: typeorder1,
            typeorder2: typeorder2,
            city: city,
            street: street,
            house: house,
            corpus: corpus,
            flat: flat,
            porch: porch,
            floor: floor,
            intercom: intercom,
            deliveryhour: deliveryhour,
            deliveryminut: deliveryminut,
            addinfo: addinfo,
            typepay: typepay,
            deposit: deposit
        }

        const url = LOCALHOST_URL + "/orderform";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        };
        fetch(url,options)
         .then((response) => response.json())

        // const card = localStorage.getItem('cart')
        // const object = JSON.parse(card)

        // const item= Object.keys(object)
        // const del = () => {
        //
        // }
    }

        return (
            // <>
            //     <table className={table}>
            //         <tbody>
            //         <tr>
            //             <td>№</td>
            //             <td>Название</td>
            //             <td>Количество</td>
            //             <td>-</td>
            //             <td>+</td>
            //             <td>Сумма</td>
            //             <td>Удалить</td>
            //         </tr>
            //
            //         {
            //             items.map((item,index) =>{
            //                 return(
            //                     <Card
            //                         key={object[item].id}
            //                         id={object[item].id}
            //                         name={object[item].name}
            //                         price={object[item].price}
            //                         count={object[item].count}
            //                         del={index}
            //                     />
            //                 )
            //             })
            //         }
            //         </tbody>
            //     </table>


            <>
            <PagesHeader />
                <div className={style.zakaz}>Заказ</div>
                <div className={style.container}>
                    <div className={style.left}>
                        <h3 className={style.cartH3}>Корзина</h3>
                        <table>
                            <tr className={style.tbody}>
                                <td className={style.cartImg}><img className={style.asian} src={asian} /></td>
                                <td className={style.cartFoodName}>Маргарита</td>
                                <td className={style.price}>270</td>
                                <td className={style.cartNum}>
                                    <div className={style.btnCart}>
                                        <button className={style.btn5} onClick={decrement}>-</button>
                                        <p>{number}</p>
                                        <button className={style.btn5} onClick={increment}>+</button>
                                    </div>
                                </td>
                                <td className={style.price}>270</td>
                                <td style={{ minWidth: "20px", maxWidth: "30px" }}><img className={style.trash} src={deleteImg} /></td>
                            </tr>
                        </table>
                    </div>
                    
                            <form className={style.right}>
                                <div className={style.first}>
                                    <div className={style.name}>Имя:</div>
                                    <div className={style.divLeft}> <input className={style.input1} type="text" onChange={getName} /></div>
                                </div>
                                <div className={style.second}>
                                    <div className={style.phone}>Телефон:</div>
                                    <div> <input className={style.input1} type="number" placeholder='Введите ваш номер телефона' onChange={getPhonenumber} /> </div>
                                </div>
                                <div className={style.typeOrder2}>
                                    <p>Тип заказа:</p>
                                    <div className={style.typeOrder}>
                                        <p>С доставкой<input className={style.checkBox} type="checkbox" onChange={getTypeorder1} /></p>
                                    </div>
                                    <div>
                                        <p>На вынос<input className={style.checkBox} type="checkbox" onChange={getTypeorder2} /></p>
                                    </div>
                                </div>
                                <div className={style.city1}>
                                    <div className={style.city}>Город</div>
                                    <div className={style.city}>
                                        <select className={style.city2} onChange={getCity}>
                                            <option>Бишкек</option>
                                            <option>Кант</option>
                                            <option>Кара-Балта</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={style.street}>
                                    <div className={style.stree1}>Улица</div>
                                    <div className={style.streetOption}>
                                        <input type="text" className={style.street2} />
                                        {/* <select className={style.street2} onChange={getStreet}>
                                            <option hidden disabled selected value>Улица</option>
                                            <optgroup label="ТЦ «Азия Молл»" class="optgroup">
                                                <option class="color-choose" value="2"> пр. Айтматова, 3, ТЦ «Asia Mall», этаж 0</option>
                                            </optgroup>
                                            <optgroup label="ТЦ ГУМ «Чынар»" class="optgroup">
                                                <option class="color-choose" value="2">  пр.Чуй 92, ТРК ГУМ «Чынар», этаж -1 ,(северная сторона)</option>
                                            </optgroup>
                                            <optgroup label="ТЦ «Beta Stores - 2»" class="optgroup">
                                                <option class="color-choose" value="2"> ул. Юнусалиева 177/2,торговый центр «Beta Stores - 2»</option>
                                            </optgroup>
                                            <optgroup label="ТЦ Vefa Center" class="optgroup">
                                                <option class="color-choose" value="2"> ул. Горького 27/1,"Vefa Center",1 этаж. Бутик № 20</option>
                                            </optgroup>
                                            <optgroup label="ТЦ «Беш-Сары Сити» " class="optgroup">
                                                <option class="color-choose" value="2"> Бейшеналиева 42А, ТЦ «Беш-Сары Сити»</option>
                                            </optgroup>
                                            <optgroup label="ТРЦ «Аламедин Гранд»" className="optgroup">
                                                <option class="color-choose" value="2">  пр. Жибек Жолу, 150 ТРЦ «Аламедин Гранд», 1 этаж</option>
                                            </optgroup>
                                        </select> */}
                                    </div>
                                </div>
                                <div className={style.street}>
                                    <div className={style.house}>Дом:<input className={style.inputStreet} type="text" onChange={getHouse} /></div>
                                    <div className={style.house}>Корпус:<input className={style.inputKorpus} type="text" onChange={getCorpus} /></div>
                                </div>
                                <div className={style.street}>
                                    <div className={style.house}>Кв.офис:<input className={style.inputOffice} type="text" onChange={getFlat} /></div>
                                    <div className={style.house}>Подъезд:<input className={style.inputPorch} type="text" onChange={getPorch} /></div>
                                </div>
                                <div className={style.street}>
                                    <div className={style.house}>Этаж:<input className={style.inputFloor} type="text" onChange={getFloor} /></div>
                                    <div className={style.house}>Домофон:<input className={style.inputPhone} type="text" onChange={getIntercom} /></div>
                                </div>
                                <div className={style.street}>
                                    <div className={style.house}>Доставить<br /> через:<input className={style.inputGet} type="number" onChange={getDeliveryhour} /></div>
                                    <div className={style.house}>час<input className={style.inputTime} type="number" onChange={getDeliveryminut} />мин</div>
                                </div>
                                <div className={style.addInfo}>
                                    <div className={style.dopInfo}>Дополнительная  информация:</div>
                                    <div><input className={style.inputDopInfo} type="text" onChange={getAddinfo} /></div>
                                </div>
                                <div className={style.pay}>
                                    <div className={style.typePay}>Способ оплаты:</div>
                                    <div className={style.city}>
                                        <select className={style.city3} onChange={getTypepay}>
                                            <option>Наличные</option>
                                            <option>Элсом</option>
                                            <option>OptimaBank</option>
                                            <option>KicbBank</option>
                                            <option>DemirBank</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={style.addInfo}>Вносимая сумма:<input className={style.total} type="text" /></div>
                                <div className={style.condition}><p>укажите купюру, которой Вы будете вносить оплату, чтобы курьер заранее взял с собой сдачу</p></div>
                                <div className={style.rule}>
                                    <p><input className={style.checkBox2} type="checkbox" onChange={getDeposit} /> условиями доставки согласен</p>
                                </div>
                                <button onClick={addOrderinfo} className={style.btnOrder}>Заказать</button>
                            </form>
                           
                </div> <PagesFooter/>
            </>
        );
    };
export default Basket;

// const obj = {
//     name: name,
//     phonenumber: phonenumber,
//     typeorder1: typeorder1,
//     typeorder2: typeorder2,
//     city: city,
//     street: street,
//     house: house,
//     corpus: corpus,
//     flat: flat,
//     porch: porch,
//     floor: floor,
//     intercom: intercom,
//     deliveryhour: deliveryhour,
//     deliveryminut: deliveryminut,
//     addinfo: addinfo,
//     typepay: typepay,
//     deposit: deposit
// }