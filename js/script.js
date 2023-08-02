{
    let tasks = [];
    let hideDoneTask = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

     const removeTask = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ];     
        render();
    };

    const toggleTaskDone = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            { ...tasks[index], done: !tasks[index].done },
            ...tasks.slice(index + 1),
        ];
        render();
    };

    const markAllAsDone = () => {
        tasks = tasks.map((task) => ({ ...task, done: true }));
        render();
    };

    const toggleHideDoneTask = () => {
        hideDoneTask = !hideDoneTask;
        render();
    };

    const bindButtonsEvent = () => {
        const hideDoneTaskButton = document.querySelector(".js-hide");

        if (hideDoneTaskButton) {
            hideDoneTaskButton.addEventListener("click", toggleHideDoneTask);
        }

        let markAllAsDoneButton = document.querySelector(".js-markAllAsDone");

        if (markAllAsDoneButton) {
            markAllAsDoneButton.addEventListener("click", markAllAsDone);
        }
    };


    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const bindToggleDoneEvents = () => {
            const toggleDoneButtons = document.querySelectorAll(".js-done");
    
            toggleDoneButtons.forEach((toggleDoneButton, index) => {
                toggleDoneButton.addEventListener("click", () => {
                    toggleTaskDone(index);
                });
            });
        };
        };

        const renderTasks = () => {
            let htmlString = "";
    
            for (const task of tasks) {
                htmlString += `
        <li class="${task.done && hideDoneTask ? "taskList__listItem--hideDone" : ""} taskList__listItem">
        <button class="js-done taskList__button taskList__button--done">
        ${task.done ? "✔" : ""}
        </button>
        <span class="${task.done ? "taskList__listItem--done" : ""}"> 
        ${task.content}
        </span>
        <button class="js-removeButton taskList__button taskList__button--remove">
        </button>
        </li>`;
            };
    
            document.querySelector(".js-tasks").innerHTML = htmlString;
        };

        const renderButtons = () => {
            const headerButtons = document.querySelector(".js-headerButtons");
    
            if (!tasks.length) {
                headerButtons.innerHTML = "";
                return;
            }
    
            headerButtons.innerHTML = `
            <button class = "js-hide taskList__button--header">
            ${hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
            </button> 
            <button class = "js-markAllAsDone taskList__button--header
            ${tasks.every(({ done }) => done) ? " disabled " : ""}">
            Ukończ wszystkie
            </button>
            `;
        };

    const render = () => {
        renderTasks();
        renderButtons();
        bindRemoveEvents();
        bindToggleDoneEvents();
        bindButtonsEvent();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskInput = document.querySelector(".js-newTask");
        const newTaskContent = newTaskInput.value.trim();

        if (newTaskContent !== "") 
        {
            addNewTask(newTaskContent);
            newTaskInput.value = "";
        };

        newTaskInput.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
};
