// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~player selection~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
let selectedPlayers = [];
let count = 0;
let buttons = document.querySelectorAll('.btn-primary');
for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerName = button.parentNode.parentNode.children[0].innerText;
        let player = {
            playerName: playerName,
        };

        selectedPlayers.push(player);

        let selectedPlayersContainer = document.getElementById('selecting-players');
        selectedPlayersContainer.textContent = '';
        for (let i = 0; i < selectedPlayers.length; i++) {
            let li = document.createElement('li');
            li.classList = 'list';
            li.innerHTML = selectedPlayers[i].playerName;
            selectedPlayersContainer.appendChild(li);
            count = i + 1;
            // ~~~~~~~~~~~~~validation ~~~~~~~~~~~~~~~
            if (selectedPlayersContainer.childNodes.length > 5) {
                removeLastChild('selecting-players');
                button.removeAttribute('disabled');
                alert("You can't add More than 5  players");

                return;
            }
            setTextElementValueById('count', count);
        }
        button.setAttribute('disabled', true);
        button.style.backgroundColor = '#758283';
    });
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~budget~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

document.getElementById('btn-calculate').addEventListener('click', function () {
    let playerElement = document.getElementById('each-player-field');
    let playerAmount = getInputFieldValueById('each-player-field');
    let ol = document.getElementById('selecting-players');
    let numberOfPlayersSelected = ol.childNodes.length;
    //~~~~~~~~~~~~~~~~~~~~~ validation ~~~~~~~~~~~~~~~~~~~
    if (isNaN(playerAmount)) {
        alert('Enter a valid Amount');
        playerElement.value = '';
        return;
    } else if (playerAmount < 0) {
        alert('We Do Not Accept Nagetive Amount');
        playerElement.value = '';

        return;
    } else if (selectedPlayers.length == 0) {
        alert('You have to choose players before calculating the cost');
        playerElement.value = '';

        return;
    }

    let playerExpenses = playerAmount * numberOfPlayersSelected;

    setTextElementValueById('player-expense', playerExpenses);
});

document.getElementById('total-calculate').addEventListener('click', function () {
    let managerElement = document.getElementById('manager-field');
    let coachElement = document.getElementById('coach-field');
    let managerAmount = getInputFieldValueById('manager-field');
    let coachAmount = getInputFieldValueById('coach-field');

    //~~~~~~~~~~~~~~~~~~~~~~~ validation ~~~~~~~~~~~~~~~~~~~~~~
    if (isNaN(managerAmount)) {
        alert('Enter a valid Amount');
        managerElement.value = '';
        return;
    }

    if (isNaN(coachAmount)) {
        alert('Enter a valid Amount');
        coachElement.value = '';
        return;
    } else if (managerAmount < 0 || coachAmount < 0) {
        managerElement.value = '';
        coachElement.value = '';
        alert('We Do Not Accept Nagetive Amount');
        return;
    }

    let playerExpenseAmount = getTextElementValueById('player-expense');

    let totalAmount = managerAmount + coachAmount + playerExpenseAmount;
    setTextElementValueById('total-amount', totalAmount);
});