import { Button, Card, CardContent } from "@mui/material";
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
      <CardContent className={styles.player__item} key={id}>
        <p>Full Name : {name}</p>
        <p>Nationality : {nationality}</p>
        <p>post : {post}</p>
        <p> number : {number}</p>
        <div>
          <Button id={id} onClick={handleDeletePlayer} variant="contained">
            remove
          </Button>
          <Button id={id} onClick={handleUpdatePlayer} variant="contained">
            edit
          </Button>
        </div>
      </CardContent>
    );
  };

  return (
    <section className={styles.questionFour__Container}>
      <div className={styles.player__inputs}>
        <div style={{ display: "flex" }}>
          <div className={styles.player__input}>
            <input
              placeholder="Full Name"
              id="name"
              onChange={handleChangeInput}
              value={playerDetails.name}
            />
          </div>
          <div className={styles.player__input}>
            <input
              placeholder="Nationality"
              id="nationality"
              onChange={handleChangeInput}
              value={playerDetails.nationality}
            />
          </div>
          <div className={styles.player__input}>
            <input
              placeholder="number"
              id="number"
              onChange={handleChangeInput}
              value={playerDetails.number}
            />
          </div>
          <div className={styles.player__input}>
            <input
              placeholder="post"
              id="post"
              onChange={handleChangeInput}
              value={playerDetails.post}
            />
          </div>
        </div>
        <Button variant="contained" onClick={handleAddPlayer}>
          {playerDetails.id ? "edit " : "add"}
        </Button>
      </div>
      <div className={styles.player__list}>
        <h4> List:</h4>
        {players.map(renderPlayerList)}
      </div>
    </section>
  );
};

export default Index;
