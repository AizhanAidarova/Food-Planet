import React from "react";
import style from "../Menu/PagesMenu.module.css";
import MenuHeader from "./MenuHeader";
import PizzaMap from "./PizzaMap";


const PagesMenu = () => {

    return (
        <div className={style.novelties}>
            <div className={style.pizzaZ}>
                <MenuHeader/>
                <PizzaMap/>
            </div>
        </div>
    )
}
export default PagesMenu;



            /*

                    <img className={style.pizzaPic} src={margarita} alt=""/>
                    <div>
                        <h3 className={style.price}>Маргарита</h3>
                        <p className={style.recipe}>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</p>
                        <h3 className={style.price}> 365 сом</h3>
                        <button onClick={()=> setCount (count +1)}> + </button>
                        <p></p>
                        <button onClick={()=> setCount (count -1)}> - </button>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={asian} alt=""/>
                    <div>
                        <h3 className={style.price}>Азиатская</h3>
                        <p className={style.recipe}>Моцарелла, сладкий перец, томаты, красный лук, фарш из говядины</p>
                        <h3 className={style.price}> 395 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={italien} alt=""/>
                    <div>
                        <h3 className={style.price}>Итальянская</h3>
                        <p className={style.recipe}> Ветчина из цыпленка, сыры чеддер и пармезан, моцарелла, красный лук, чеснок</p>
                        <h3 className={style.price}> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={vegetarien} alt=""/>
                    <div>
                        <h3 className={style.price}>Веганская</h3>
                        <p className={style.recipe}>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</p>
                        <h3 className={style.price}> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={margarita} alt=""/>
                    <div>
                        <h3 className={style.price}>Маргарита</h3>
                        <p className={style.recipe}>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</p>
                        <h3 className={style.price}> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={asian} alt=""/>
                    <div>
                        <h3 className={style.price}>Азиатская</h3>
                        <p className={style.recipe}>Моцарелла, сладкий перец, томаты, красный лук, фарш из говядины</p>
                        <h3 className={style.price}> 395 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={italien} alt=""/>
                    <div>
                        <h3 className={style.price}>Итальянская</h3>
                        <p className={style.recipe}> Ветчина из цыпленка, сыры чеддер и пармезан, моцарелла, красный лук, чеснок</p>
                        <h3 className={style.price}> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={vegetarien} alt=""/>
                    <div>
                        <h3 className={style.price}>Веганская</h3>
                        <p className={style.recipe}>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</p>
                        <h3 className={style.price}> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
            </div>*/



