window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game = null;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    game.start();
    console.log("start game");
  }

  window.addEventListener("keydown", handleKeydown);
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  window.addEventListener("keyup", handleKeyup);
  function handleKeyup(event) {
    const key = event.key;
    const possibleKeyStrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    if (possibleKeyStrokes.includes(key)) {
      event.preventDefault();

      if (key === "ArrowLeft" || key === "ArrowRight") {
        game.player.directionX = 0;
      }
      if (key === "ArrowUp" || key === "ArrowDown") {
        game.player.directionY = 0;
      }
    }
    // Add an event listener to the restart button
    restartButton.addEventListener("click", function () {
      // Call the restartGame function when the button is clicked
      restartGame();
    });

    // The function that reloads the page to start a new game
    function restartGame() {
      location.reload();
    }
  }
};
