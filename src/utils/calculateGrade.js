const calculateGrade = score => {
  if (score === null || score === undefined || typeof score !== 'number') {
    return null;
  }

  const percentage = parseInt(score);

  let grade = null;
  let remarks = null;

  if (percentage >= 97) {
    grade = '6+';
  } else if (percentage >= 93 && percentage <= 96) {
    grade = '6';
  } else if (percentage >= 90 && percentage <= 92) {
    grade = '6-';
  } else if (percentage >= 87 && percentage <= 89) {
    grade = '5+';
  } else if (percentage >= 83 && percentage <= 86) {
    grade = '5';
  } else if (percentage >= 80 && percentage <= 82) {
    grade = '5-';
  } else if (percentage >= 77 && percentage <= 79) {
    grade = '4+';
  } else if (percentage >= 73 && percentage <= 76) {
    grade = '4';
  } else if (percentage >= 70 && percentage <= 72) {
    grade = '4-';
  } else if (percentage >= 67 && percentage <= 69) {
    grade = '3+';
  } else if (percentage >= 63 && percentage <= 66) {
    grade = '3';
  } else if (percentage >= 60 && percentage <= 62) {
    grade = '3-';
  } else if (percentage < 60) {
    grade = '2';
  }

  if (score >= 90) {
    remarks = "Wyjątkowy wynik! Opanowałeś ten quiz. Świetna robota!";
  } else if (score >= 80 && score <= 89) {
    remarks = "Świetna robota! Doskonale poradziłeś sobie z tym quizem.";
  } else if (score >= 70 && score <= 79) {
    remarks = "Dobra robota! Zdałeś quiz.";
  } else if (score >= 60 && score <= 69) {
    remarks = "Zaliczyłeś, ale jest jeszcze miejsce na poprawę.";
  } else if (score < 60) {
    remarks = "Nauka to podróż. Nie poddawaj się, a osiągniesz cel.";
  }

  return {
    grade,
    remarks,
  };
};

export default calculateGrade;
