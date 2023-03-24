const Display = ({ handleCompleteTask, handleDeleteBtn, toDoList }) => {
    const outputList = toDoList.map((element, index) => {
        return (
            <li key={element.id}>
                <button onClick={() => handleCompleteTask(element.id)}>
                    {index + " " + element.text + " " + element.status}
                </button>
                <button onClick={() => handleDeleteBtn(element.id)}>
                    delete
                </button>
            </li>
        );
    });

    return (
        <div>
            <ul>{outputList}</ul>
        </div>
    );
};

export default Display;
