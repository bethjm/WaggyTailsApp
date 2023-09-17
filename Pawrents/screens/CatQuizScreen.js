import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
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

    setSelectedAnswers((prevSelectedAnswers) => [
      ...prevSelectedAnswers,
      result,
    ]);

    if (selectedAnswer !== correctAnswer) {
      wrongAnswer.push(result.question);
    } else if (selectedAnswer === correctAnswer) {
      setCorrectAnswerScore(correctAnswerScore + 1);
    }

    if (currentQuestionIndex < CatQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      goToSeeResults(selectedAnswers);
    }

    console.log("selected answers", selectedAnswers);
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
      source={require("../assets/images/catquizscreen-dark.png")}
      resizeMode="cover"
    >
      <View>
        {CatQuiz.length > 0 && (
          <>
            <Question
              questionText={CatQuiz[currentQuestionIndex].questionText}
            />
            <FlatList
              data={CatQuiz[currentQuestionIndex].options}
              renderItem={({ item, index }) => (
                <Answers
                  onPress={() => handleNextQuestion(item)}
                  answerText={item}
                  key={index}
                />
              )}
              keyExtractor={(item) => item.toString()} // Ensure keyExtractor returns a string
            />
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
