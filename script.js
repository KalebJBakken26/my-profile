function toggleFunFact() {
  const fact = document.getElementById("funFact");
  const hobbies = document.getElementById("hobbies");
  const factButton = document.getElementById("toggleButton");
  const hobbiesButton = document.getElementById("hobbiesButton");

  if (fact.style.display === "none" || fact.style.display === "") {
    fact.style.display = "block";
    factButton.innerText = "Hide Fun Fact";

    hobbies.style.display = "none";
    hobbiesButton.innerText = "Show Hobbies";
  } else {
    fact.style.display = "none";
    factButton.innerText = "Show Fun Fact";
  }
}

function toggleHobbies() {
  const fact = document.getElementById("funFact");
  const hobbies = document.getElementById("hobbies");
  const factButton = document.getElementById("toggleButton");
  const hobbiesButton = document.getElementById("hobbiesButton");

  if (hobbies.style.display === "none" || hobbies.style.display === "") {
    hobbies.style.display = "block";
    hobbiesButton.innerText = "Hide Hobbies";

    fact.style.display = "none";
    factButton.innerText = "Show Fun Fact";
  } else {
    hobbies.style.display = "none";
    hobbiesButton.innerText = "Show Hobbies";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeBtn");
  btn.innerText = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
}
