import { useState } from "react";
import TaskArea from "./TasksArea";
import styles from "./Task.module.css";

export default function Task() {
    const [tasks, setTasks] = useState(["primeiro comentário"]);
    const [newTaskText, setNewTaskText] = useState("");
    const [contador, setContador] = useState(0);

    const handleNewTaskChange = (event) => {
        setNewTaskText(event.target.value);
    };

    const handleClickCreateNewTask = (event) => {
        event.preventDefault();
        setTasks([...tasks, newTaskText]);
        setNewTaskText("");
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setTasks([...tasks, newTaskText]);
            setNewTaskText("");
        }
    };

    const handleClickCounter = (item) => {
        let contadorAtual = contador;
        if (item) {
            setContador(contadorAtual - 1);
        } else {
            setContador(contadorAtual + 1);
        }
    };

    const handleDeleteTask = (taskContent) => {
        setTasks(tasks.filter((task) => task !== taskContent));
    };

    return (
        <>
            <p>Tarefas Realizadas: {contador} de {tasks.length}</p>

            <div className={styles.task}>
                <input
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onKeyDown={handleKeyDown}
                    type="text" />

                <button onClick={handleClickCreateNewTask}
                    type="submit">
                    Criar +
                </button>
            </div>

            <div>
                {tasks.map(task => {
                    return (
                        <TaskArea
                            key={task}
                            content={task}
                            onClick={handleDeleteTask}
                            onClickCheckBox={handleClickCounter}
                        />
                    );
                })}
            </div>
        </>
    );
}
