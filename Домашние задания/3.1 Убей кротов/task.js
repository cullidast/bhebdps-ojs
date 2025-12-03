let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Вешаем обработчики на все лунки
for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains("hole_has-mole")) {
            // Попали по кроту
            dead.textContent = +dead.textContent + 1;
        } else {
            // Промах
            lost.textContent = +lost.textContent + 1;
        }

        // Условия победы
        if (+dead.textContent === 10) {
            alert("Победа! Вы убили 10 кротов!");
            dead.textContent = 0;
            lost.textContent = 0;
        }

        // Условия поражения
        if (+lost.textContent === 5) {
            alert("Вы проиграли! 5 промахов.");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}
