import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Question from "../components/ui/Question";
import Answers from "../components/ui/Answers";
import CatQuiz from "../components/API/CatQuiz";

const CatQuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswerScore, setCorrectAnswerScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState([]);

  // need to figure out why the most recently pressed question doesnt get added to selectedAnswers array

  const handleNextQuestion = (selectedAnswer) => {
    const currentQuestion = CatQuiz[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    const result = {
      question: currentQuestion.questionText,
      userAnswer: selectedAnswer,
      correctAnswer: correctAnswer,
    };

    setSelectedAnswers([...selectedAnswers, result]);

    if (selectedAnswer !== correctAnswer) {
      wrongAnswer.push(result.question);
    } else if (selectedAnswer === correctAnswer) {
      setCorrectAnswerScore(correctAnswerScore + 1);
    }

    if (currentQuestionIndex < CatQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      goToSeeResults();
    }
  };

  const goToSeeResults = () => {
    navigation.navigate("SeeResults", {
      quizResults: selectedAnswers,
      wrongAnswer: wrongAnswer,
      correctAnswerScore: correctAnswerScore,
    });
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/Alt_Question_Background.png")}
      resizeMode="cover"
    >
      <View>
        {CatQuiz.length > 0 && (
          <>
            <Question
              questionText={CatQuiz[currentQuestionIndex].questionText}
            />
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
    </ImageBackground>
  );
};

export default CatQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
