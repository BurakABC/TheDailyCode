function RandomNumber() {
  // Retrieve the minimum and maximum values from the input elements
  let min = parseInt(document.getElementById('min').value, 10);
  let max = parseInt(document.getElementById('max').value, 10);

  if(min > max) {
    alert('Minimum should be less than maximum.');
    return;
  }

  // Generate a random number between min and max
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Display the random number in the div with id 'result'
  document.getElementById('Random-Number').textContent = randomNumber;
}