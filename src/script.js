"use strict"

import 'bootstrap/dist/css/bootstrap.min.css';
import { handleDone, deleteTask} from "../src/task.js"
import { handleFocus, handleSubmit} from "../src/submit.js"
import "./style.css";

const form = document.querySelector(".todolist__form");
const task = document.querySelector(".todolist__text");
const list = document.getElementById("list");

task.addEventListener("focus", handleFocus );
form.addEventListener("submit", handleSubmit );
list.addEventListener("click", deleteTask );
list.addEventListener("change", handleDone );







