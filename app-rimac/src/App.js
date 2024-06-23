// src/App.js
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import './App.css';
import {anxietyQuestions, infoCardsData} from './Constants'
import Button from './components/button/Button';
import Infocard from './components/card/Infocard';
import Navbar from './components/navbar/Nav';  

function App() {

  const [formData, setFormData] = useState({
    answers: {} // Aquí almacenaremos las respuestas a las preguntas
  });

  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  return (
    <div className="App">
      <Navbar />
      <ContactForm />
      <div className="container"> 
        <div className="form-wrapper">
          <label className='label-title align-center capitalize mb-16'>Empieza el test</label>
          <label color='sbt-red label-title'>Test PSS-PRIME-MD-PHQ10</label>
          <div>
          <p className='label-description justify-text'>La Escala de estrés percibido, Perceived
              Stress Scale (PSS), está diseñada por
              especialistas. Los resultados no son un
              diagnóstico; sin embargo, puede darte un
              alcance de nivel de estrés. Para mayor
              precisión, consulté con un especialista.</p>
          </div>
        {anxietyQuestions.map((question) => (
            <div key={question.id} className="question-container">
              <h3 className='weight-600 mt-16 justify-left'>{`${question.id}. ${question.question}`}</h3>
              <div className="options-container radio-label">
                {question.options.map((option, index) => (
                    <Button
                      text={option}
                      selected={answers[question.id] === option}
                      onPress={() => handleAnswerChange(question.id, option)}
                    />
                ))}
              </div>
            </div>
        ))}
        </div>
      </div>
      <div className="container p-48 flex flex-column g-16">
      <p className='label-description justify-text mt-16 mb-16'>
      Existen muchos tipos de seguros,
      Estos son algunos especiales
      para ti y tu familia
      </p>
      {infoCardsData.map(card => (
        <Infocard
          key={card.id}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          imgsrc={card.imgsrc}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
