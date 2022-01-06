import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/Editor";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Preview from "../preview/Preview";
import styles from "./Maker.module.css";

const Maker = ({ authService }) => {
  const sampleData = [
    {
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
    {
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
    {
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
  ];
  const [cards, setCards] = useState(sampleData);

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

  const addCard = (card) => {
    console.log(">> card", card);
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
