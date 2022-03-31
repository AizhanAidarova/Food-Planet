import React from 'react';
import style from '../Basket/Basket.module.css'
import PagesHeader from '../Header/PagesHeader';


const Basket = () => {
    return (
        <>
            <PagesHeader />
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.order}>
                    </div>
                </div>
                <form className={style.right}>
                    <div className={style.first}>
                        <div className={style.lLeft}>Имя:</div>
                        <div> <input type="text" /></div>
                    </div>
                    <div className={style.second}>
                        <div className={style.lLeft}>Телефон:</div>
                        <div> <input type="number" placeholder='Введите ваш номер телефона' /> </div>
                    </div>
                    <p>Тип заказа:</p>
                    <div className={style.typeOrder2}>
                        <div className={style.typeOrder}>
                            <p>С доставкой<input className={style.checkBox} type="checkbox" checked /></p>
                        </div>
                        <div>
                            <p>На вынос<input className={style.checkBox} type="checkbox" /></p>
                        </div>
                    </div>
                    <div className={style.city1}>
                        <div className={style.lLeft}>Город</div>
                        <div className={style.city}>
                            <select className={style.city2}>
                                <option>Бишкек</option>
                                <option>Кант</option>
                                <option>Кара-Балта</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.street}>
                        <div className={style.lLeft}>Улица</div>
                        <div className={style.street2}>
                            <select className="street1">
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
                        <div className={style.korpus}>Корпус:<input className={style.inputStreet} type="text" /></div>
                    </div>
                    <div className={style.street}>
                        <div className={style.house}>Кв.офис:<input className={style.inputStreet} type="text" /></div>
                        <div className={style.korpus}>Подъезд:<input className={style.inputStreet} type="text" /></div>
                    </div>
                    <div className={style.street}>
                        <div className={style.house}>Этаж:<input className={style.inputStreet} type="text" /></div>
                        <div className={style.korpus}>Домофон:<input className={style.inputStreet} type="text" /></div>
                    </div>
                    <div className={style.street}>
                        <div className={style.house}>Доставить через:<input className={style.inputStreet} type="number" /></div>
                        <div className={style.korpus}>час<input className={style.inputStreet} type="number" />минут</div>
                    </div>
                    <div className={style.addInfo}>
                        <div className={style.lLeft}>Дополнительная  информация:</div>
                        <div> <input type="text" /></div>
                    </div>
                    <div className={style.pay}>
                        <div className={style.lLeft}>Способ оплаты:</div>
                        <div className={style.city}>
                            <select className={style.city2}>
                                <option>Наличные</option>
                                <option>Элсом</option>
                                <option>OptimaBank</option>
                                <option>KicbBank</option>
                                <option>DemirBank</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.addInfo}>
                        <div className={style.lLeft}>Вносимая сумма:</div>
                        <div> <input type="text" /></div>
                    </div>
                    <p>укажите купюру, которой Вы будете вносить оплату, чтобы курьер заранее взял с собой сдачу</p>


                </form>
            </div>

        </>
    );
};



export default Basket;