import Button from "./Button"


const Task = () => {

    const actions = [
        { id: 1, text: "View", icon: "fa-solid fa-eye", iconBg: false },
        { id: 2, text: "Edit", icon: "fa-solid fa-pen-to-square", iconBg: true },
        { id: 3, text: "Delete", icon: "fa-solid fa-trash-can", iconBg: true },
        { id: 4, text: "Download", icon: "fa-solid fa-download" },
        { id: 5, text: "No Icon"  }
    ];

    return (
        <>
            {
                actions.map(action => (
                    <Button
                        key={action.id}
                        text={action.text}
                        icon={action.icon}
                        iconBg={action.iconBg}
                    />
                ))
            }
        </>
    )
}

export default Task