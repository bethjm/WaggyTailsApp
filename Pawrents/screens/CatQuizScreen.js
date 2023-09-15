import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Question from "../components/ui/Question";
import Answers from "../components/ui/Answers";
import CatQuiz from "../components/API/CatQuiz";

const CatQuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswerScore, setCorrectAnswerScore] = useState(0);
  let wrongAnswer;

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
      wrongAnswer = result; // Assign the value
      navigation.navigate("ResultsPage", {
        quizResults: selectedAnswers,
        wrongAnswer: wrongAnswer,
        correctAnswerScore: correctAnswerScore,
      });
    } else if (selectedAnswer === correctAnswer) {
      setCorrectAnswerScore(correctAnswerScore + 1);
    }

    if (currentQuestionIndex < CatQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      goToSeeResults();
    }
  };

  useEffect(() => {
    if (currentQuestionIndex >= CatQuiz.length - 1) {
      goToSeeResults();
    }
  }, [currentQuestionIndex]);

  const goToSeeResults = () => {
    navigation.navigate("SeeResults", {
      quizResults: selectedAnswers,
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
