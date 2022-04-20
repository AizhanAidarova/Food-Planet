import React, {useEffect, useState} from 'react';
import styles from "../AdminContainer/AdminContainerCss/AdminPizza.module.css"
import AdminContainer from "../AdminContainer/AdminContainer";
import {LOCALHOST_URL} from "../Constant";
import toast from "react-hot-toast";

const AdminPizza = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        const url = LOCALHOST_URL + "/pizza";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    };

    useEffect(() => {
        getData();
    }, []);

    // const deleteUser = () => {
    //     const url = LOCALHOST_URL + "/feedbacks";
    //
    //     const options = {
    //         method: "DELETE"
    //     }
    //     fetch(url,options)
    //         .then((response) => {
    //             if (response.status === 200){
    //                 toast.success("Пользователь успешно удален")
    //             } else if (response.status ===404){
    //                 toast.error ('Данный пользователь не найден')
    //             } else {
    //                 toast.error ('Пожалуйста, повторите попытку')
    //             }
    //         })
    // }

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
                    {/* Данные стягивающиеся из json server  */}
                    {
                        data.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td><input style={{ minWidth: "30px" , maxWidth:"30px", minHeight:"30px", maxHeight:"30px" }} type="text" value={item.id}/></td>
                                    <td><img style={{ minWidth: "140px" , maxWidth:"140px" }} src={item.img} alt=""/></td>
                                    <td><input  style={{ minWidth: "80px" , maxWidth:"80px"}} type="text" value={item.name}/></td>
                                    <td> <textarea style={{ minWidth: "239px" , maxWidth:"239px", minHeight:"90px", maxHeight:"110px" }} >{item.desc}</textarea></td>
                                    <td><input style={{ minWidth: "148px" , maxWidth:"148px", textAlign:"center"}}  type="text" value={item.price}/></td>

                                    <td>
                                    <div>
                      {/* Модальное окно */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@getbootstrap"
                      >
                        Редактировать
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Введите редактирование
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Закрыть"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                  >
                                    Название:
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="message-text"
                                    defaultValue={""}
                                  />
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                  >
                                    Описание:
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="message-text"
                                    defaultValue={""}
                                  />
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                  >
                                    Цена:
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="message-text"
                                    defaultValue={""}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Закрыть
                              </button>
                              <button type="button" className="btn btn-primary">
                                Сохранить
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                                    </td>
                                    <td>
                                        <button className={styles.deleteButton}>Удалить</button>
                                        {/*<button className={styles.deleteButton} onClick={deleteUser}>Удалить</button>*/}
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

export default AdminPizza;