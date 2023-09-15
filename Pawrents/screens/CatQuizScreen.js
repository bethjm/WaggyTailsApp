import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
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
      goToSeeResults();
    }
  };

  const goToSeeResults = () => {
    navigation.navigate("SeeResults"); // Navigate to the results screen
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
