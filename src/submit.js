import { addNewTask } from "../src/task.js";

const btn = document.querySelector(".todolist__btn");
const errorMessage = document.querySelector(".todolist__error-message_disabled");
const task = document.querySelector(".todolist__text");
const form = document.querySelector(".todolist__form");

export function handleFocus() {
    const errorField = task.classList.contains("error");

    if (errorField) {
        task.classList.remove("error");
        let errorMessages = document.querySelectorAll(".todolist__error-message");
        errorMessages.forEach(errorMessage => {
            errorMessage.remove();
        });
        errorMessage.classList.toggle("todolist__error-message_active");
        btn.disabled = false;
    }
}

export function handleSubmit(event) {
    event.preventDefault()
    if (task.value.trim().length === 0) {
        task.classList.add("error");
        errorMessage.classList.toggle("todolist__error-message_active");
        btn.disabled = true; 
        return;
    } else {
        addNewTask();
    }
}