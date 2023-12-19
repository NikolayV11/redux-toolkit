import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../store/added";

import styles from "./Home.module.scss";
import { Header } from "../Components/Header";
import { Input } from "../Components/input";
import { Added } from "../Components/added/Added";
import { Delet } from "../Components/delet/Delet";

export function Home() {
  let arr = [];
  // чтение с added value
  const valueAdded = useSelector((state) => state.stateAdded.value);
  // чтение с added id
  const idAdded = useSelector((state) => state.stateAdded.id);

  const [toDoList, setToDoList] = React.useState([]);
  const [removedFromList, setRemovedFromList] = React.useState([]);

  React.useEffect(() => {
    if (valueAdded !== "") {
      const data = {
        title: valueAdded,
        status: false,
        id: idAdded,
      };
      if (toDoList.length < 16) {
        setToDoList([...toDoList, data]);
      }
    }
    console.log(removedFromList, "removedFromList");
  }, [valueAdded]);
  function deleIsList(id) {
    const newToDoList = toDoList.filter((item) => {
      if (item.id !== id) return item;
    });
    const newDelet = toDoList.filter((item) => {
      if (item.id === id) return item;
    });

    setToDoList(newToDoList);
    if (removedFromList.length < 15) setRemovedFromList([...removedFromList, ...newDelet]);

    console.log(removedFromList);
  }

  return (
    <div className={styles.home}>
      <div className={styles.home_header}>
        <Header />
      </div>

      <div className={styles.home_column}>
        <div className={styles.home_column__left}>
          <Input />
          <div className={styles.home_column__left_tasks}>
            {toDoList.length > 0 ? (
              toDoList.map((item) => {
                return <Added key={item.id} data={item} deleIsList={deleIsList} />;
              })
            ) : (
              <h1>Список пуст</h1>
            )}
          </div>
        </div>
        <div className={styles.home_column__right}>
          <h1>Законченные дела</h1>
          {removedFromList === 0
            ? ""
            : removedFromList.map((item) => {
                return <Delet data={item} />;
              })}
        </div>
      </div>
    </div>
  );
}
