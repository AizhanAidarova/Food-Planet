import React, { useState, useEffect } from "react";
import AdminContainer from "../AdminContainer/AdminContainer";
import styles from "../AdminAboutUs/AdminAboutUs.module.css";
import { LOCALHOST_URL } from "../Constant";

// const initialValue= {
//   name: '',
//   img: '',
//   price: ''
// }
const AdminAboutUs = () => {


  // const   [userData,setUserData] = useState(initialValue);
  // console.log(userData);
  // const   [users,setUsers] = useState([]);
  //
  // const handleSubmitUser = (e) =>{
  //   e.preventDefault()
  //
  // }

  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/aboutUs";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.mainAbouUs}>
      <AdminContainer />
      <div className={styles.abouUs}>
        <div className={styles.text}>
          <h4>О нас/ Почему выбирают нас</h4>
          <button className={styles.addButton}>Добавить</button>
        </div>

        <table>
          <tr className={styles.background}>
            <th>№</th>
            <th style={{ minWidth: "160px", maxWidth: "160px" }}>
              Преимущества
            </th>
            <th style={{ minWidth: "355px", maxWidth: "355px" }}>Описание</th>
            <th>Фото</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
          {/* Данные стягивающиеся из json server  */}
          {data.map((item) => {
            return (
              <>
                {/*onSubmit={(e) => handleSubmitUser(e)}*/}
                {" "}
                <tr>
                  <td>{item.id}</td>
                  <td style={{ minWidth: "210px", maxWidth: "210px" }}>
                    {" "}
                    <input type="text" value={item.reasons} />
                  </td>
                  <td
                    style={{
                      minWidth: "355px",
                        maxWidth: "355px",
                        minHeight: "90px",
                        maxHeight: "90px",
                    }}
                  >
                    {" "}
                    <textarea style={{
                      minWidth: "315px",
                        maxWidth: "315px",
                        minHeight: "90px",
                        maxHeight: "90px",
                    }} name="" id="" cols="30" rows="10">
                      {item.reasonsInDetail}
                    </textarea>
                  </td>
                  <td>
                    <img src={item.img} alt="" />
                  </td>
                  <td>
    
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
                                    Преимущества:
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

export default AdminAboutUs;
