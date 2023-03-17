import { Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Question.module.css";
import { useCounter } from "./useTimer";

const Index = () => {
  const { questionsData } = useSelector((state) => state.questionOne);
  const [score, setScore] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [selectedOptionValue, setSelectedOptionValue] = useState(null);
  const [counter, setCounter] = useCounter();
  const [status, setStatus] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [showFinishModal, setShowFinishModal] = useState(false);
  // const [clock, setClock] = useState(30);

  useEffect(() => {
    if (questionsData) {
      setCorrectAnswers(questionsData.map((question) => question.answer));
    }
  }, [questionsData]);

  useEffect(() => {
    if (status !== "") {
      setTimeout(() => {
        setActiveQuestionIndex((prevState) => ++prevState);
        setCounter(30);
        setStatus("");
      }, 2000);
    }
  }, [status, setCounter]);

  const handleSelectAnswerOption = (e) => {
    const { id } = e.target;
    setSelectedOptionValue(id);
  };

  const renderQuestion = (item, index) => {
    return (
      activeQuestionIndex === index && (
        <div className={styles.question__item} key={index}>
          <Chip label={counter} />
          <h4>{item.title}</h4>
          <div className={styles.answer__options__container}>
            {item.options.map((option, ind) => {
              return (
                <p
                  key={ind}
                  className={`${styles.answer__option} ${
                    selectedOptionValue === option && styles.answer__selected
                  }`}
                  onClick={handleSelectAnswerOption}
                  id={option}
                >
                  {option}
                </p>
              );
            })}
          </div>
        </div>
      )
    );
  };

  const handleSubmitQuestion = () => {
    if (activeQuestionIndex === 5) {
      if (correctAnswers.includes(selectedOptionValue)) {
        setScore(score + 5);
      }
      setShowFinishModal(true);
      return;
    }
    if (correctAnswers.includes(selectedOptionValue)) {
      setScore(score + 3);
      setStatus("success");
    } else {
      setStatus("failure");
    }
  };
  const handleCloseButton = () => {
    setShowFinishModal(false);
    setCounter(30);
    setActiveQuestionIndex(0);
  };
  // Timer Codes
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCounter(30);
      setActiveQuestionIndex(activeQuestionIndex + 1);
      clearTimeout(timeOut);
    }, [30000]);
    return () => {
      clearTimeout(timeOut);
    };
  }, [activeQuestionIndex, setCounter]);

  return (
    <div className={styles.question__container}>
      {questionsData && questionsData?.map(renderQuestion)}
      {showFinishModal && (
        <div className={styles.modal__container}>
          <div className={styles.modal__content}>
            <div>
              <h5> the end</h5>
              <h6>your score: {score} </h6>
            </div>
            <div>
              <p className={styles.close__modal} onClick={handleCloseButton}>
                done
              </p>
            </div>
          </div>
        </div>
      )}
      <div
        className={`${styles.buttons__container}  ${
          status === "success" && styles.success__background
        } ${status === "failure" && styles.failure__background}`}
      >
        <button
          className={styles.confirm__button}
          onClick={handleSubmitQuestion}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Index;
