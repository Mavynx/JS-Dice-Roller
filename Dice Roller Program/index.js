function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceRes = document.getElementById("diceRes");
    const diceImg = document.getElementById("diceImg");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.trunc(Math.random() * 6) +1;
        values.push(value);
        images.push(`<img src="dice images/${value}.png">`);

    }
    diceRes.textContent = `Dice: ${values.join(', ')}`;
    diceImg.innerHTML = images.join('');

}