{
    const tasks = [
        {
            content: "wypić piwo",
            done: false,
        },
        {
            content: "zrobić sernik",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li
            ${task.done ? "list__task--done" : ""}>
            ${taks.content}
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

            const newTaskContent = document.querySelector("js-newTask").value.trim();
            if (newTaskContent === "") {
                return;
            }

        });

    };

    init();

}