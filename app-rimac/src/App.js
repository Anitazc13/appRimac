// src/App.js
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import './App.css';
import {anxietyQuestions, infoCardsData} from './Constants'
import Button from './components/button/Button';
import Infocard from './components/card/Infocard'; // Asegúrate de importar el componente InfoCard

function App() {

  const [formData, setFormData] = useState({
    answers: {} // Aquí almacenaremos las respuestas a las preguntas
  });

  const handleAnswerChange = (questionId, answer) => {
    setFormData({
      ...formData,
      answers: {
        ...formData.answers,
        [questionId]: answer
      }
    });
  };

  return (
    <div className="App">
      <ContactForm />
      <div className="container"> 
        <div className="form-wrapper">
          <label>Empieza el test</label>
          <label>Test PSS-PRIME-MD-PHQ10</label>
          <p>La Escala de estrés percibido, Perceived
              Stress Scale (PSS), está diseñada por
              especialistas. Los resultados no son un
              diagnóstico; sin embargo, puede darte un
              alcance de nivel de estrés. Para mayor
              precisión, consulté con un especialista.</p>
        {anxietyQuestions.map((question) => (
            <div key={question.id} className="question-container">
              <h3>{question.id}+". "+{question.question}</h3>
              <div className="options-container">
                {question.options.map((option, index) => (
                  <label key={index} className="radio-label">
                    <Button
                      testID={`question_${question.id}`}
                      value={option}
                      type='tertiary'
                      onPress={() => handleAnswerChange(question.id, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
        ))}
        </div>
      </div>
      <div className="container p-48 flex flex-column g-16">
      <p>
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
