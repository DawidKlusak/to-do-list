{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=
                `
            <li class="list__items">
            <button class="list__button--done js-done">${task.done ? "✓" : ""}</button>
            <span class="${task.done ? "list__text--done" : ""}">${task.content}</span>
            <button class="list__button--remove js-remove">🗑️</button>
      ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }

            addNewTask(newTaskContent);
        });
    };

    init();
}


