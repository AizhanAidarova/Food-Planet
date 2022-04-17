import React, { useState, useEffect } from 'react';
import style from '../Basket/Basket.module.css'
import PagesHeader from '../Header/PagesHeader';
import { LOCALHOST_URL } from '../../AdminPage/Constant';
import deleteImg from '../Media/icon/bin.png'
import asian from '../Media/pizza/asian.svg'


const Basket = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }
    const decrement = () => {
        setNumber(number - 1);
    }

    const [name,setName] = useState("");
    const [phonenumber, setName] = useState("");
    const [city, setName] = useState("");
    const [street, setName] = useState("");
    const [house, setName] = useState("");
    const [corpus, setName] = useState("");
    const [flat, setName] = useState("");
    const [porch, setName] = useState("");
    const [floor, setName] = useState("");
    const [intercom, setName] = useState("");
    const [deliveryhour, setName] = useState("");
    const [deliveryminut, setName] = useState("");
    const [addinfo, setName] = useState("");
    const [typepay, setName] = useState("");
    const [deposit, setName] = useState("");

    const getName = (event) => {
        setName(event.currentTarget.value);
    };
    const getPhonenumber = (event) => {
        setName(event.currentTarget.value);
    };
    const getCity = (event) => {
        setName(event.currentTarget.value);
    };
    const getStreet = (event) => {
        setName(event.currentTarget.value);
    };
    const getHouse = (event) => {
        setName(event.currentTarget.value);
    };
    const getCorpus = (event) => {
        setName(event.currentTarget.value);
    };
    const getFlat = (event) => {
        setName(event.currentTarget.value);
    };
    const getPorch = (event) => {
        setName(event.currentTarget.value);
    };
    const getFloor = (event) => {
        setName(event.currentTarget.value);
    };
    const getIntercom = (event) => {
        setName(event.currentTarget.value);
    };
    const getDeliveryhour = (event) => {
        setName(event.currentTarget.value);
    };
    const getDeliveryminut = (event) => {
        setName(event.currentTarget.value);
    };
    const getAddinfo = (event) => {
        setName(event.currentTarget.value);
    };
    const getTypepay = (event) => {
        setName(event.currentTarget.value);
    };
    const getDeposit = (event) => {
        setName(event.currentTarget.value);
    };

    const addOrderinfo = () => {
        const obj = {
            name: name,
            phonenumber: phonenumber,
            city: city,
            street: street,
            house: house,
            corpus: corpus,
            flat:flat,
            porch:porch,
            floor: floor,
            intercom: intercom,
            deliveryhour: deliveryhour,
            deliveryminut:deliveryminut,
            addinfo:addinfo,
            typepay:typepay,
            deposit:deposit,
            date: getCurrentDate(),
        }
    }

    const url = LOCALHOST_URL + "/orderform";

    const getData = () => {
        const url = BASE_URL + "/users";
        fetch(url)
          .then((response) => response.json())
          .then((data) => setData(data));
      };



    return (
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
                        <div className={style.divLeft}> <input className={style.input1} type="text" /></div>
                    </div>
                    <div className={style.second}>
                        <div className={style.phone}>Телефон:</div>
                        <div> <input className={style.input1} type="number" placeholder='Введите ваш номер телефона' /> </div>
                    </div>
                    <div className={style.typeOrder2}>
                        <p>Тип заказа:</p>
                        <div className={style.typeOrder}>
                            <p>С доставкой<input className={style.checkBox} type="checkbox" checked /></p>
                        </div>
                        <div>
                            <p>На вынос<input className={style.checkBox} type="checkbox" /></p>
                        </div>
                    </div>
                    <div className={style.city1}>
                        <div className={style.city}>Город</div>
                        <div className={style.city}>
                            <select className={style.city2}>
                                <option>Бишкек</option>
                                <option>Кант</option>
                                <option>Кара-Балта</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.street}>
                        <div className={style.stree1}>Улица</div>
                        <div className={style.streetOption}>
                            <select className={style.street2}>
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
                                <optgroup label="ТРЦ «Аламедин Гранд»" class="optgroup">
                                    <option class="color-choose" value="2">  пр. Жибек Жолу, 150 ТРЦ «Аламедин Гранд», 1 этаж</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className={style.street}>
                        <div className={style.house}>Дом:<input className={style.inputStreet} type="text" /></div>
                        <div className={style.house}>Корпус:<input className={style.inputKorpus} type="text" /></div>
                    </div>
                    <div className={style.street}>
                        <div className={style.house}>Кв.офис:<input className={style.inputOffice} type="text" /></div>
                        <div className={style.house}>Подъезд:<input className={style.inputPorch} type="text" /></div>
                    </div>
                    <div className={style.street}>
                        <div className={style.house}>Этаж:<input className={style.inputFloor} type="text" /></div>
                        <div className={style.house}>Домофон:<input className={style.inputPhone} type="text" /></div>
                    </div>
                    <div className={style.street}>
                        <div className={style.house}>Доставить<br /> через:<input className={style.inputGet} type="number" /></div>
                        <div className={style.house}>час<input className={style.inputTime} type="number" />мин</div>
                    </div>
                    <div className={style.addInfo}>
                        <div className={style.dopInfo}>Дополнительная  информация:</div>
                        <div><input className={style.inputDopInfo} type="text" /></div>
                    </div>
                    <div className={style.pay}>
                        <div className={style.typePay}>Способ оплаты:</div>
                        <div className={style.city}>
                            <select className={style.city3}>
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
                        <p><input className={style.checkBox2} type="checkbox" /> условиями доставки согласен</p>
                    </div>
                    <button onClick = {getData} className={style.btnOrder}>Заказать</button>
                </form>
            </div>
        </>
    );
};



export default Basket;