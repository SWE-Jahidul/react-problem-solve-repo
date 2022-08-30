import TagListItem from "./TaglistItem";


import './dailytask.css'
const task = {
    id: 'unique_id_001',
    subTitle: "Subtitle",
    createAt: "2022-08-29T11:33:30.453Z",
    tags: [
        {
            id: "tag-001",
            text: "Its Done ",
            icon: ' T'
        },
        {
            id: "tag-002",
            text: "Its Cenclled ",
            icon: ' T'
        },
        {
            id: "tag-003",
            text: "Its Cenclled ",
            icon: ' T'
        },
        {
            id: "tag-004",
            text: "Its Progress",
            icon: "T"
        },
        {
            id: "tag-005",
            text: "Just Wrote This",
            icon: "T"
        }
    ]
    ,
    comments: [
        {
            id: "commnet_id_001",
            user:
            {
                avater: 'xyz.com',
                name: 'Vira',
                id: 'user-id-001',
            },
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
    ],

    tasks: [
        {
            id: 'task-001',
            title: 'Foggy Nelson',
            text: 'Here to clean the streets of Hells Kitchen',
            status: 'done'
        },
        {
            id: 'task-002',
            title: 'Louis CK',
            text: 'This one is cancelled',
            status: 'cancelled'
        },
        {
            id: 'task-003',
            title: 'Albert Einstein',
            text: 'In Progress',
            status: 'done'
        },
        {
            id: 'task-004',
            title: 'Albert Einstein',
            text: 'In Progress',
            status: 'done'
        },


    ]
}


function getDay(dateStr) {
    const date = new Date(dateStr).getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday ", "Friday ", "Satureday"];
    return days[date];
}

function formetDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

function DailyTaskApp() {
    return (
        <div className="day-card">
            <h3 style={{
                textAlign: "center",
            }}>
                TODO APP
            </h3>

            <div>
                <h4> {getDay(task.createAt)} , {formetDate(task.createAt)}</h4>
                <h6> {task.subTitle} </h6>
                <ul>
                    {
                        task.tags.map((tag) => (
                            <TagListItem key={tag.id} tag={tag} />
                        ))
                    }

                </ul>
                <hr />
                <p> Notes Linked to Pepole </p>

                <div>
                    {
                        task.comments.map((commnet) => (
                            <div key={commnet.id}>
                                <h3>  {commnet.user.name} </h3>
                                <p>{commnet.details} </p>
                            </div>
                        ))
                    }
                </div>
                <ul>
                    {task.tasks.map((task) => (
                        <li key={task.id}>
                            <h3> {task.title} </h3>
                            <p> <small > {task.status} </small> </p>
                            <p> <small > {task.text} </small> </p>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )

}

export default DailyTaskApp;