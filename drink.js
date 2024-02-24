document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home-button');
    const viewAllDrinksButton = document.getElementById('toggle-view-button');
  
    homeButton.addEventListener('click', () => {
      window.location.href = 'index.html'; // Navigate to the home page
    });
  
    viewAllDrinksButton.addEventListener('click', () => {
      window.location.href = 'index.html'; // Navigate to the home page (all drinks view)
    });
  
    // Placeholder code for loading drink details
    const drinkName = decodeURIComponent(window.location.hash.substring(1));
    const drinkNameElement = document.getElementById('drink-name');
    const drinkImageElement = document.getElementById('drink-image');
    const drinkStepsElement = document.getElementById('drink-steps');
  
    // Set drink name
    drinkNameElement.textContent = drinkName;
  
    // Set drink image (replace 'placeholder.jpg' with actual image URL)
    drinkImageElement.innerHTML = `<img src="${drinkName}.jpg" alt="${drinkName} Image" class="drink-image">`;
  
    // Set drink steps (replace placeholder steps with actual steps)
    const steps = [
      'Mix ingredient 1',
      'Add ingredient 2',
      'Stir well'
      // Add more steps as needed
    ];
  
    const stepsList = document.createElement('ol');
    steps.forEach(step => {
      const stepItem = document.createElement('li');
      stepItem.textContent = step;
      stepsList.appendChild(stepItem);
    });
    drinkStepsElement.appendChild(stepsList);
  });
  