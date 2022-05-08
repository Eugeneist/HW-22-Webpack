const task = document.querySelector(".todolist__text");
const form = document.querySelector(".todolist__form");

export function addNewTask() {
    let li = document.createElement('li');
    li.textContent = task.value;
    li.className = "todolist__item";
    let done = document.createElement('input');
    done.type = "checkbox";
    done.className = "form-check-input";
    let del = document.createElement('button');
    del.className = "todolist__del-btn";
    del.innerHTML = "Delete";
    list.append(li);
    li.append(del);
    li.prepend(done);
    form.reset();
}

export function handleDone(event) {
    const doneButton = event.target.className === "form-check-input";
    
    if(doneButton) {
        let row = event.target.closest(".todolist__item");
        row.classList.toggle("done");
        row.querySelector(".todolist__del-btn").classList.add("btn_inactive");
        row.querySelector(".todolist__del-btn").disabled = true;
        event.target.disabled = true;
    }
}


export function deleteTask(event) {
    const removeButton = event.target.className === "todolist__del-btn";

    if (removeButton) {
        let row = event.target.closest(".todolist__item");
        row.remove();
    }
}