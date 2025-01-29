const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId = null; // Store the interval ID globally
  
  const startChangingColor = function () {
    if (intervalId !== null) return; // Prevent multiple intervals
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  };
  
  const stopChangingColor = function () {
    if (intervalId !== null) {
      clearInterval(intervalId); // Clear the interval
      intervalId = null; // Reset the ID
    }
  };
  
  document.querySelector("#start").addEventListener("click", startChangingColor);
  document.querySelector("#stop").addEventListener("click", stopChangingColor);
  