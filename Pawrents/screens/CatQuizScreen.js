import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Question from "../components/ui/Question";
import Answers from "../components/ui/Answers";
import CatQuiz from "../components/API/CatQuiz";

const CatQuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleNextQuestion = (selectedAnswer) => {
    setSelectedAnswers([...selectedAnswers, selectedAnswer]);

    console.log(selectedAnswers);

    if (currentQuestionIndex < CatQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finish the quiz
      console.log("Quiz finished");
    }
  };

  return (
    <View>
      {CatQuiz.length > 0 && (
        <>
          <Question questionText={CatQuiz[currentQuestionIndex].questionText} />
          {CatQuiz[currentQuestionIndex].options.map((option, index) => (
            <Answers
              onPress={() => handleNextQuestion(option)}
              answerText={option}
              key={index}
            />
          ))}
        </>
      )}
    </View>
  );
};

export default CatQuizScreen;

const styles = StyleSheet.create({});
