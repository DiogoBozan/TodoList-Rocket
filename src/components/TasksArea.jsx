import { CheckSquare, Square, Trash } from "phosphor-react";
import { useState } from "react";
import Task from "./Task";

import styles from "./TasksArea.module.css";

export default function TaskArea({ content, onClick, onClickCheckBox }) {
    const [isActive, setIsActive] = useState(false);
    const [style, setStyle] = useState(false);


    const handleDeleteTask = () => {
        onClick(content);
    };

    const handleClickCheckSquare = () => {
        setIsActive(current => !current);
        setStyle(current => !current);
        onClickCheckBox(isActive);
    };

    return (
        <>
            <div className={styles.post}>

                {style ?
                    <p className={styles.withLine}>{content}</p>
                    :
                    <p>{content}</p>
                }

                <button
                    className={styles.trashButton}
                    onClick={handleDeleteTask}>

                    <Trash size={18} />
                </button>

                <button className={styles.checkBox}
                    onClick={handleClickCheckSquare}>

                    {isActive ?
                        <CheckSquare
                            size={30}
                            color='#4F4F4F' />
                        :
                        <Square
                            size={30}
                            color='#4F4F4F' />
                    }
                </button>
            </div>
        </>
    );
}