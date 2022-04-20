import React, { useEffect, useState } from "react";
import { LOCALHOST_URL } from "../Constant";
import AdminContainer from "../AdminContainer/AdminContainer";
import styles from "../AdminDelivery/AdminDelivery.module.css";
import bootstrap from "bootstrap";

const AdminDelivery = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/delivery";

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
        <div className={styles.mainAdministrators}>
          <h2 className={styles.administratorh1}>Доставка</h2>
          <button className={styles.addButton}>Добавить</button>
        </div>
        <table>
          <tr className={styles.background}>
            <th>№</th>
            <th>Картинка</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Номер</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <td>
                    <input
                      style={{
                        minWidth: "30px",
                        maxWidth: "30px",
                        minHeight: "30px",
                        maxHeight: "30px",
                      }}
                      type="text"
                      value={item.id}
                    />
                  </td>
                  <td>
                    <img
                      style={{ minWidth: "140px", maxWidth: "140px" }}
                      src={item.imgUrl}
                      alt=""
                    />
                  </td>
                  <td>
                    <input
                      style={{
                        minWidth: "130px",
                        maxWidth: "130px",
                        textAlign: "center",
                      }}
                      type="text"
                      value={item.title}
                    />
                  </td>
                  <td>
                    {" "}
                    <textarea
                      style={{
                        minWidth: "190px",
                        maxWidth: "190px",
                        minHeight: "100px",
                        maxHeight: "110px",
                      }}
                    >
                      {item.titleDesc}
                    </textarea>
                  </td>
                  <td>
                    <input
                      style={{
                        minWidth: "148px",
                        maxWidth: "148px",
                        textAlign: "center",
                      }}
                      type="text"
                      value={item.phone}
                    />
                  </td>

                  <td>
                    {/* <button className={styles.editButton}>Редактировать</button> */}

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
                                    Номер:
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

                    {/* end of madal */}
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

export default AdminDelivery;
