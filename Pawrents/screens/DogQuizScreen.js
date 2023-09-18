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
import DogQuiz from "../components/API/DogQuiz";

const DogQuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswerScore, setCorrectAnswerScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState([]);

  const handleNextQuestion = (selectedAnswer) => {
    const currentQuestion = DogQuiz[currentQuestionIndex];
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

    if (currentQuestionIndex < DogQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      goToSeeResults(selectedAnswers);
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
      source={require("../assets/images/dogquizscreen-dark.png")}
      resizeMode="cover"
    >
      <View>
        {DogQuiz.length > 0 && (
          <>
            <Question
              questionText={DogQuiz[currentQuestionIndex].questionText}
            />
            <FlatList
              data={DogQuiz[currentQuestionIndex].options}
              renderItem={({ item, index }) => (
                <Answers
                  onPress={() => handleNextQuestion(item)}
                  answerText={item}
                  key={index}
                />
              )}
              keyExtractor={(item) => item.toString()}
            />
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default DogQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
