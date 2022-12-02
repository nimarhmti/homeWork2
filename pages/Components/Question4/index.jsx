import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePlayer,
  savePlayer,
  updatePlayer,
} from "../../../store/Slices/question4Slice";
import styles from "./Question4.module.css";

const initialState = {
  name: "",
  number: "",
  nationality: "",
  post: "",
};

const Index = () => {
  const [playerDetails, setPlayerDetails] = useState(initialState);
  const dispatch = useDispatch();
  const { players } = useSelector((state) => state.questionFour);

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setPlayerDetails((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleAddPlayer = () => {
    if (playerDetails.id) {
      dispatch(updatePlayer(playerDetails));
    } else {
      dispatch(savePlayer(playerDetails));
    }
    setPlayerDetails(initialState);
  };

  const handleDeletePlayer = (e) => {
    const { id } = e.target;
    dispatch(deletePlayer(id));
  };
  const handleUpdatePlayer = (e) => {
    const { id } = e.target;
    setPlayerDetails(players.find((player) => player.id === id));
  };

  const renderPlayerList = ({ name, nationality, post, number, id }, index) => {
    return (
      <div className={styles.player__item} key={id}>
        <p>نام : {name}</p>
        <p>ملیت : {nationality}</p>
        <p>پست : {post}</p>
        <p> شماره : {number}</p>
        <div>
          <button id={id} onClick={handleDeletePlayer}>
            حذف
          </button>
          <button id={id} onClick={handleUpdatePlayer}>
            ویرایش
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.questionFour__Container}>
      <div className={styles.player__inputs}>
        <div style={{ display: "flex" }}>
          <div className={styles.player__input}>
            <label>نام بازیکن</label>
            <input
              id="name"
              onChange={handleChangeInput}
              value={playerDetails.name}
            />
          </div>
          <div className={styles.player__input}>
            <label>ملیت</label>
            <input
              id="nationality"
              onChange={handleChangeInput}
              value={playerDetails.nationality}
            />
          </div>
          <div className={styles.player__input}>
            <label>شماره</label>
            <input
              id="number"
              onChange={handleChangeInput}
              value={playerDetails.number}
            />
          </div>
          <div className={styles.player__input}>
            <label>پست</label>
            <input
              id="post"
              onChange={handleChangeInput}
              value={playerDetails.post}
            />
          </div>
        </div>
        <button onClick={handleAddPlayer}>
          {playerDetails.id ? "بروزرسانی بازیکن" : "اضافه کردن بازیکن"}
        </button>
      </div>
      <div className={styles.player__list}>
        <h4>لیست بازیکنان</h4>
        {players.map(renderPlayerList)}
      </div>
    </section>
  );
};

export default Index;
