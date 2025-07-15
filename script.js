function flipCard() {
  const card = document.getElementById("flipCard");
  const cardFront = document.getElementById("cardFront");
  const cardBack = document.getElementById("cardBack");
  const flipCountElement = document.getElementById("flipCount");

  // Increment the flip count
  let flipCount = parseInt(flipCountElement.textContent);
  flipCount++;
  flipCountElement.textContent = flipCount;

  // Flip the card (toggle the class)
  card.classList.toggle("flipped");

  // Generate a random number from 1 to 10
  const chance = Math.floor(Math.random() * 10) + 1;

  if (chance === 1) {
    // 1 in 10 chance → show rare images
    cardFront.style.backgroundImage = "url('./assets/jumpscare.jpg')";
    cardBack.style.backgroundImage = "url('./assets/jumpscare.jpg')";
  } else {
    // normal images
    cardFront.style.backgroundImage = "url('./assets/king.jpg')";
    cardBack.style.backgroundImage = "url('./assets/behind.jpg')";
  }
  if (chance === 1) {
    document.body.style.backgroundImage = "url('./assets/jumpscare.jpg')";
    document.getElementById("text-span").innerHTML = `YOU RELEASED THE DEMON, WOE'S UPON US!`;
    document.getElementById("text-span").style.color = "red";
    button.disabled = true;
    button.style.backgroundColor = "red";
    button.style.cursor = "not-allowed";
    document.getElementById("button").innerHTML = "WE ARE DOOMED, AND IT'S YOUR FAULT!";
    document.getElementById("button").style.color = "black";
    document.getElementById("scream").play();
  }

}
