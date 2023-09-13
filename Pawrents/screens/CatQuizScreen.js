import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Question from "../components/ui/Question";
import Answers from "../components/ui/Answers";
import CatQuiz from "../components/API/CatQuiz";

const CatQuizScreen = () => {
  console.log(CatQuiz); // Add this line to check the data

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < CatQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Navigation to the result screen
      console.log("el fin");
      // Maybe have a congrats you finished, show results button?
    }
  };

  try {
    return (
      <View>
        {CatQuiz.length > 0 && (
          <>
            <Question
              questionText={CatQuiz[currentQuestionIndex].questionText}
            />
            {CatQuiz[currentQuestionIndex].options.map((option, index) => (
              <Answers answerText={option} key={index} />
            ))}
            <PrimaryButton title="Next Question" onPress={handleNextQuestion}>
              Next Question
            </PrimaryButton>
          </>
        )}
      </View>
    );
  } catch (error) {
    console.error("Error rendering CatQuizScreen:", error);
    return (
      <View>
        <Text>Error rendering CatQuizScreen</Text>
      </View>
    );
  }
};

export default CatQuizScreen;

const styles = StyleSheet.create({});
