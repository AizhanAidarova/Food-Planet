import React, { useEffect, useState } from "react";
import styles from "../AdminFeedbacks/AdminFeedbacks.module.css";
import { LOCALHOST_URL } from "../Constant";
import AdminContainer from "../AdminContainer/AdminContainer";
import { getCurrentDate } from "../../helpers";
import toast from "react-hot-toast";
import bootstrap from "bootstrap";

const AdminFeedbacks = (props) => {
  const [data, setData] = useState([]);

{/* Получение данных с json  */}
  const getData = () => {
    const url = LOCALHOST_URL + "/feedbacks";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = (id) => {
    const url = LOCALHOST_URL + `/feedbacks/${id}`;

    const options = {
      method: "DELETE",
    };
    fetch(url, options).then((response) => {
      if (response.status === 200) {
        toast.success("Пользователь успешно удален");
      } else if (response.status === 404) {
        toast.error("Данный пользователь не найден");
      } else {
        toast.error("Пожалуйста, повторите попытку");
      }
    });
  };

  // const editData = () => {
  //   const url = LOCALHOST_URL + "/feedbacks?postId=" + props.postId;

  //   const status = {
  //     name: name,
  //     status: status,
  //     postId: props.postId,
  //     status: "1",
  //   };
  //   const options = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(status),
  //   };
  //   fetch(url, options).then((response) => console.log(response));
  // };

  // useEffect(() => {
  //   editData();
  // }, []);

  return (
    <div className={styles.mainFeedbacks}>
      <AdminContainer />
      <div className={styles.feedback}>
        {/* <button className={styles.addButton}>Добавить</button> */}
        <h2>Отзывы и жалобы</h2>
        {/* code */}
        <table>
          <tr className={styles.background}>
            <th>№</th>
            <th>Имя</th>
            <th>Фамилие</th>
            <th>Номер</th>
            <th>Почта</th>
            <th >
              Отзыв/жалоба
            </th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
          {/* Данные стягивающиеся из json server */}
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
                    <input
                      style={{ minWidth: "80px", maxWidth: "80px" }}
                      type="text"
                      value={item.name}
                    
                    />
                  </td>
                  <td>
                    <input
                      style={{ minWidth: "105px", maxWidth: "105px" }}
                      type="text"
                      value={item.surname}
                    />
                  </td>
                  <td>
                    <input
                      style={{ minWidth: "108px", maxWidth: "108px" }}
                      type="text"
                      value={item.number}
                    />
                  </td>
                  <td>
                    <input
                      style={{ minWidth: "150px", maxWidth: "150px" }}
                      type="text"
                      value={item.email}
                    />
                  </td>
                  <td>
                    {" "}
                    <textarea
                      style={{
                        minWidth: "265px",
                        maxWidth: "265px",
                        minHeight: "90px",
                        maxHeight: "90px",
                      }}
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    >
                      {item.feedback}
                    </textarea>
                  </td>
                  {/* buttons */}
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
                                    Сообщение:
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
                              <button  type="button" className="btn btn-primary">
                              Сохранить
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* end of madal */}

                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteUser(item.id)}
                    >
                      Удалить
                    </button>
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

export default AdminFeedbacks;
