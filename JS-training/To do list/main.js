let tasks=[
    {
        "title":"قراءة",
        "date":"10/10/2025",
        "isDone":false,
    },
    {
        "title":"قراءة",
        "date":"10/10/2025",
        "isDone":false,
    },
    {
        "title":"  قراءة",
        "date":"10/10/2025",
        "isDone":false,
    },
]
    tasks=JSON.parse(localStorage.getItem("tasks"))
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));

if (storedTasks == null) {
    tasks = []; 
} else {
    tasks = storedTasks;
}
function saveAndRefresh() {
    let taskString = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskString);
    fillTasks();
}


function fillTasks(){
    document.getElementById("Task").innerHTML=""
    let allContent = "";
    let index=0
for ( task of tasks) {
    let allContent = `
    <div class="task ${task.isDone? 'done' : ''}">
        <div class="task-info">
            <h2>${task.title}</h2>
            <p>
                <span class="material-symbols-outlined">calendar_month</span>
                ${task.date}
            </p>
        </div>
        <div class="active-btn">
            <button onclick="deleteTask(${index})" class="Delete"><span class="material-symbols-outlined">delete</span></button>
            


            ${task.isDone ? `
                <button onclick=" toggleTaskCompletion(${index})" class="complete" style="background-color:rgb(174, 8, 36)";><span class="material-symbols-outlined">cancel</span></button>`:
                `
                <button onclick=" toggleTaskCompletion(${index})" class="complete"><span class="material-symbols-outlined">check</span></button>
                `}
            
            <button onclick="editTask(${index})" class="Edit"><span class="material-symbols-outlined">edit</span></button>
        </div>
    </div>
    `;
    document.getElementById("Task").innerHTML+=allContent;
    index++;
}
}
fillTasks()
document.getElementById("add-btn").addEventListener("click",function(){
    let taskName=prompt("Please Enter your Task");
    if (taskName !== null && taskName.trim() !== "") {
        let now = new Date();
        let date = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();

        let taskobj = {
            "title": taskName,
            "date": date,
            "isDone": false
        };

        tasks.push(taskobj);
        
        // تحديث الـ LocalStorage وإعادة الرسم
        let taskString = JSON.stringify(tasks);
        localStorage.setItem("tasks", taskString);
        fillTasks();
    }
    saveAndRefresh();
});

function deleteTask(index){
    let task=tasks[index]
    let isConfirmed = confirm("Are you sure you want to delete this task:"+ task.title);
    if(isConfirmed){
        tasks.splice(index, 1);
        fillTasks();   
        saveAndRefresh();         
    }
}
function editTask(index){
    let task=tasks[index]
    let newTaskTitle = prompt("Please specify the title of the new task",task.title)
    task.title=newTaskTitle
    alert(newTaskTitle)
    fillTasks()
    saveAndRefresh();
}
function toggleTaskCompletion(index){
    let task=tasks[index]
    task.isDone = !task.isDone;
    fillTasks()
    saveAndRefresh();
}