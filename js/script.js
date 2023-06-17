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
            <li>
            ${taks.content}
            </li>
            `;

        }
    }

    const init= () => {

    };

    init();

}