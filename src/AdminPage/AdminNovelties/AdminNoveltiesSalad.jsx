import React, {useEffect, useState} from 'react';
import {LOCALHOST_URL} from "../Constant";
import styles from "../Administrators/Administrators.module.css";
import AdminContainer from "../AdminContainer/AdminContainer";

const AdminNoveltiesSalad = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        const url = LOCALHOST_URL + "/newsalad";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.mainAdministrators}>
            <AdminContainer />
            <div className={styles.administrators}>
                <button className={styles.addButton}>Добавить</button>
                <table>
                    <tr className={styles.background}>
                        <th>№</th>
                        <th>Картинка</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>

                    {
                        data.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td><input style={{ minWidth: "30px" , maxWidth:"30px", minHeight:"30px", maxHeight:"30px" }} type="text" value={item.id}/></td>
                                        <td><img style={{ minWidth: "140px" , maxWidth:"140px" }} src={item.img} alt=""/></td>
                                        <td><input  style={{ minWidth: "80px" , maxWidth:"120px",textAlign:"center"}} type="text" value={item.name}/></td>
                                        <td> <textarea style={{ minWidth: "200px" , maxWidth:"200px", minHeight:"90px", maxHeight:"110px" }} >{item.desc}</textarea></td>
                                        <td><input style={{ minWidth: "148px" , maxWidth:"148px", textAlign:"center"}}  type="text" value={item.price}/></td>

                                        <td>
                                            <button className={styles.editButton}>Редактировать</button>
                                        </td>
                                        <td>
                                            <button className={styles.deleteButton}>Удалить</button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                </table>
            </div>
        </div>
    );
};

export default AdminNoveltiesSalad;
