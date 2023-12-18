import React from "react";
import styles from "./Input.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { incrementValue } from "../store/input";
export function Input() {
  const stateInput = useSelector((state) => state.stateInput.value);
  const dispatch = useDispatch();
  console.log("I");
  return (
    <div className={styles.input}>
      <div className={styles.input_block}>
        <label id="input1">
          <input
            id="input1"
            value={stateInput}
            onChange={(event) => dispatch(incrementValue(event.target.value))}
            placeholder="Добавить..."
          />
          <button
            onClick={() => {
              dispatch(incrementValue(""));
            }}>
            <svg
              class="feather feather-x"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </button>
        </label>
      </div>

      <button className={`${styles.add} button`}>Добавить</button>
    </div>
  );
}
