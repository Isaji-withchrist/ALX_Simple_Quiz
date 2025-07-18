// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";
  
    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";
  
    if (selectedOption) {
      userAnswer = selectedOption.value;
    }
  
    // Step 4: Compare answers and display feedback
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  }
  
  // Step 5: Add event listener to submit button
  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer);
  