document.getElementById("bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert("Please enter valid weight and height values.");
    return;
  }

  const bmi = weight / (height * height);
  const bmiResult = document.getElementById("bmi-result");
  const bmiCategory = document.getElementById("bmi-category");

  bmiResult.textContent = bmi.toFixed(1);

  if (bmi < 18.5) {
    bmiCategory.textContent = "Underweight";
    bmiCategory.style.color = "#ffa500";
    bmiCategory.style.textShadow = "0 0 10px #ffa500";
  } else if (bmi < 24.9) {
    bmiCategory.textContent = "Normal weight";
    bmiCategory.style.color = "#00bcd4";
    l;
    bmiCategory.style.textShadow = "0 0 10px #00bcd4";
    bmiCategory.textContent = "Overweight";
    bmiCategory.style.color = "#ff5722";
    bmiCategory.style.textShadow = "0 0 10px #ff5722";
  } else {
    bmiCategory.textContent = "Obesity";
    bmiCategory.style.color = "#e91e63";
    bmiCategory.style.textShadow = "0 0 10px #e91e63";
  }
});
