import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/Editor";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Preview from "../preview/Preview";
import styles from "./Maker.module.css";

const Maker = ({ authService }) => {
  const defaultData = {
    1: {
      id: "1",
      name: "Ellie Dream Coding 1",
      company: "Samsung Electronics 1",
      theme: "dark",
      title: "Software Engineer 1",
      email: "dreamcoding1@gmail.com",
      message: "Don't forget to code your dream!",
      fileName: "",
      fileURL: "",
    },
    2: {
      id: "2",
      name: "Ellie Dream Coding 2",
      company: "Samsung Electronics 2",
      theme: "light",
      title: "Software Engineer 2",
      email: "dreamcoding2@gmail.com",
      message: "Don't forget to code your dream!!",
      fileName: "",
      fileURL: "",
    },
    3: {
      id: "3",
      name: "Ellie Dream Coding 3",
      company: "Samsung Electronics 3",
      theme: "colorful",
      title: "Software Engineer 3",
      email: "dreamcoding3@gmail.com",
      message: "Don't forget to code your dream!!!",
      fileName: "",
      fileURL: "",
    },
  };

  const [cards, setCards] = useState(defaultData);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (!user) navigate("/");
      });
  });

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
