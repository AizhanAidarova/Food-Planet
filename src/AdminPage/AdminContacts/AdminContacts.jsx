import React, { useState, useEffect } from "react";
import styles from "../AdminContacts/AdminContacts.module.css";
import AdminContainer from "../AdminContainer/AdminContainer";
import { LOCALHOST_URL } from "../Constant";
import bootstrap from "bootstrap";

const AdminContacts = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/contacts";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div className={styles.containerContacts}>
      <AdminContainer />
      <div>
        <div className={styles.buttons}>
          <div >
            <h4>Контакты</h4>
          </div>
          <div className={styles.buttons}>
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
                                    Номер:
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
                                    Почта:
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
                                    Адрес:
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
                                    Instagram:
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
                                    Telegram:
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
                                    Facebook:
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
            <button className={styles.saveButton}>Сохранить</button>
            <button className={styles.deleteButton}>Удалить</button>
          </div>
        </div>

        {data.map((item) => {
          return (
            <>
              {/* Контакты для связи */}
              <div className={styles.mainContacts}>
                <div className={styles.contacts}>
                  <h2>Номер</h2>
                  <input
                    style={{ minWidth: "120px", maxWidth: "120px" }}
                    type="text"
                    value={item.number}
                  />
                </div>
                <div className={styles.contacts}>
                  <h2>Почта</h2>
                  <input
                    style={{ minWidth: "170px", maxWidth: "170px" }}
                    type="text"
                    value={item.email}
                  />
                </div>
                <div className={styles.contacts}>
                  <h2>Адрес</h2>
                  <input
                    style={{ minWidth: "270px", maxWidth: "270px" }}
                    type="text"
                    value={item.adress}
                  />
                </div>
              </div>
              {/* Социальные сети */}
              <h4>Социальные сети</h4>
              <div className={styles.mainContacts}>
                <div className={styles.contacts}>
                  <h2>Instagram</h2>
                  <input
                    style={{ minWidth: "200px", maxWidth: "200px" }}
                    type="text"
                    value={item.instagram}
                  />
                </div>
                <div className={styles.contacts}>
                  <h2>Telegram</h2>
                  <input
                    style={{ minWidth: "175px", maxWidth: "175px" }}
                    type="text"
                    value={item.telegram}
                  />
                </div>
                <div className={styles.contacts}>
                  <h2>Facebook</h2>
                  <input
                    style={{ minWidth: "175px", maxWidth: "175px" }}
                    type="text"
                    value={item.facebook}
                  />
                </div>
              </div>{" "}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AdminContacts;
