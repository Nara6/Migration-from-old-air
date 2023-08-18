let list_wrapper= document.getElementById('list_wrapper');
let addButton = document.getElementById('addButton');
var taskArr=[];
var taskArrs = [
    {
        'name': 'Create Project',
        'assingnee': 'Tola',
        'date': '24/2/2022'
    },
    {
        'name': 'Define Project',
        'assingnee': 'Makara',
        'date': '24/3/2022'
    },
    {
        'name': 'Testing on Project',
        'assingnee': 'Kompheak',
        'date': '24/4/2022'
    },
    {
        'name': 'Deploy Project',
        'assingnee': 'Minea',
        'date': '24/5/2022'
    },{
        'name': 'Create Project',
        'assingnee': 'Hosting',
        'date': '31/3/2022'
    }
];

if(sessionStorage.getItem('taskArr')=== null){
    sessionStorage.setItem('taskArr', JSON.stringify(taskArrs));
    // console.log("hi");
}
// let taskArr = JSON.parse(localStorage.getItem('taskArr'));
// sessionStorage.setItem('taskArr', JSON.stringify(taskArr));
let saved = sessionStorage.getItem('taskArr');
console.log(saved);
if(saved){
    taskArr = JSON.parse(sessionStorage.getItem('taskArr'));
    renderList(taskArr);
    console.log(saved);
}

function renderList(TaskArr){
    var index=0;
    let contentList = "";
    TaskArr.forEach(taskarr => {
        contentList += `
        <div class="row">
            <div class="col">
            ${taskarr.name}
            </div>
            <div class="col">
            ${taskarr.assingnee}
            </div>
            <div class="col">
            ${taskarr.date}
            </div>
            <div class="col">
            <button onclick="deleteButton(${index})">
                <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-39-512.png">
            </button>
            </div>
        </div>
        `;
        index++;
    });
    list_wrapper.innerHTML = contentList;
}
function addNewTask(){
    let title = document.getElementById('title').value;
    let assingnee = document.getElementById('assingnee').value;
    let date = document.getElementById('date').value;
    let newTask = {
        'name': title,
        'assingnee': assingnee,
        'date': date
    };
    console.log(newTask);
    taskArr.push(newTask);
    sessionStorage.setItem('taskArr', taskArr);
    renderList(taskArr);
    sessionStorage.setItem('taskArr', JSON.stringify(taskArr));
}
function deleteButton(index){
    taskArr.splice(index, 1);
    sessionStorage.setItem('taskArr', JSON.stringify(taskArr));
    renderList(taskArr);
}
// // window.onload= ()=>{
// //     renderList(taskArr);
// // }