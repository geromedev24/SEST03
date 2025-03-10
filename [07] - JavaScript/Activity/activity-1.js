function grade(score) {
  if (score >= 90) {
    console.log("Your Grade for the score of", score, "is A");
  } else if (score < 90 && score >= 80) {
    console.log("Your Grade for the score of", score, "is B");
  } else if (score < 79 && score >= 70) {
    console.log("Your Grade for the score of", score, "is C");
  } else if (score < 69 && score >= 60) {
    console.log("Your Grade for the score of", score, "is D");
  } else console.log("Your Grade for the score of", score, "is F");
}

grade(95);
grade(83);
grade(75);
grade(63);
grade(50);
