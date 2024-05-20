// Створіть функцію, яка реалізує простий менеджер списку справ (TO-DO List). Функція повинна дозволяти користувачам додавати, видаляти та відображати елементи в списку справ.
// Список справ повинен бути реалізований за допомогою масиву, в якому можуть знаходитися тільки строкові данні.

// Ось конкретні функціональності, які повинна мати ваша програма:

// Додавання елементу: Користувачі повинні мати можливість додавати елементи до списку справ. Повинен перевіряти тип вхідних даних.
// Видалення елементу: Користувачі повинні мати можливість видаляти елементи зі списку справ за їхнім індексом. Та перевіряти неіснуючий індекс.
// Відображення списку: Користувачі повинні мати можливість відображати всі елементи у списку справ.

const toDoList = Array();

function addItem(item) {
  if (typeof item === "string") {
    toDoList.push(`${item}`);
    console.log( `"${item}" додано до списку`)

  } else {
    console.log("Не коректні данні");
  }
}

function removeItem(index){
  if (index >= 0 && index < toDoList.length){
    let removedItem = toDoList.splice(index, 1)
    console.log(`${removedItem} видалено`)
  }else{
    console.log("Невірний індекс")
  }
}

function showTodoList() {
  if (toDoList.length === 0){
    console.log("Список справ порожній")
  }else{
    console.log("Список справ:");
    toDoList.forEach((item, index) => {
      console.log(`${index + 1}: ${item}`)
    })
  }
}

addItem(undefined);
addItem(4);
addItem("Застелити ліжко");
addItem("Почистити зуби");
showTodoList();
addItem("Почистити килим");
showTodoList()
removeItem(0)
showTodoList()
removeItem(3)
showTodoList()
removeItem(1)
showTodoList()
removeItem(1)
removeItem(0)
showTodoList()