const createGame = (player1, hour, player2) => {
  return ` 
        <li>
         <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
         <strong>${hour} </strong>
         <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}"  />
        </li> 
    `;
};

const creatCard = (date, day, games) => {
  return `
        <div class="card">
         <h2>${date} <span>${day} </span></h2>
        <ul>
         ${games}
        </ul>
        </div> 
    `;
};

document.querySelector("#cards").innerHTML =
  creatCard(
    "23/11",
    "quarta",
    createGame("spain", "13:00", "cr") +
      createGame("alemanha", "10:00", "japain") +
      createGame("belgi", "16:00", "canada")
  ) +
  creatCard(
    "24/11",
    "quinta",
    createGame("portugal", "13:00", "ghana") +
      createGame("uruguai", "10:00", "cs") +
      createGame("brasil", "16:00", "serbia")
  ) +
  creatCard(
    "27/11",
    "domingo",
    createGame("japain", "07:00", "cr") +
      createGame("belgi", "10:00", "mo") +
      createGame("spain", "16:00", "alemanha")
  ) +
  creatCard(
    "28/11",
    "segunda",
    createGame("cs", "10:00", "ghana") +
      createGame("brasil", "13:00", "su") +
      createGame("portugal", "16:00", "uruguai")
  );
