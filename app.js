document.addEventListener('DOMContentLoaded', function () {
    const workoutList = document.getElementById('workoutList');
  
    // Sample workout data
    const workouts = [
      { name: 'Push-ups', duration: '5 minutes' },
      { name: 'Running', duration: '20 minutes' },
      // Add more workout routines
    ];
  
    // Display workout routines
    workouts.forEach(workout => {
      const li = document.createElement('li');
      li.textContent = `${workout.name} - ${workout.duration}`;
      workoutList.appendChild(li);
    });

document.addEventListener('DOMContentLoaded', function () {
      
    const dietList = document.getElementById('dietList');
      
        // Sample diet data
    const dietEntries = [
      { meal: 'Breakfast', calories: 300 },
      { meal: 'Lunch', calories: 500 },
          // Add more diet entries
    ];
      
        // Display diet entries
    dietEntries.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.meal} - ${entry.calories} calories`;
        dietList.appendChild(li);
    });
    });
document.addEventListener('DOMContentLoaded', function () {
    // ... (previous code)
  
    const healthStats = document.getElementById('healthStats');
  
    // Sample health data
    const healthData = {
      weight: 70, // in kg
      height: 175, // in cm
      // Add more health data
    };
  
    // Display health statistics
    healthStats.textContent = `Weight: ${healthData.weight} kg, Height: ${healthData.height} cm`;
  });   
});
