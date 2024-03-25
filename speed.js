function calculateDemeritPoints(speed) {
    // Function to calculate demerit points based on speed
    if (speed <= 70) {
      return "Ok"; // Return string "Ok" for speeds under 70
      //if the speed is less or equal to 70 its ok
    } else {
      // Calculate demerit points (1 point for every 5 km/h above 70)
      const demeritPoints = Math.floor((speed - 70) / 5);
  
      if (demeritPoints > 12) {
        return "License suspended"; // Return string "License suspended"
      //if the driver gets more than 12 points the license will be suspended
      } else {
        return `Points: ${demeritPoints}`; // Return string with demerit points
      }
    }
  }
  
  // Call the function and print the result (outside the function)
  const speed = 100; // Example speed
  const result = calculateDemeritPoints(speed);
  console.log