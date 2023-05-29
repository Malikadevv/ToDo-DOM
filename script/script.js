//
// const btn = document.querySelector('.add-btn')
// const input = document.querySelector('.text-input')
// const inputTwo = document.querySelector('.textTwo-inputTwo')
// const ul = document.querySelector('.list')
//
//
//
// const classes = {
//     li: "list-group-item  d-flex justify-content-between align-items-center",
//     delBtn: "del-btn btn btn-danger color-back",
//     delBtnTwo: "del-btnTwo btn btn-danger color-back",
//     check:"check-box",
//     radio:"radio"
// }
//
// function view(){
//     ul.innerHTML = ""
//     const  tasks = JSON.parse(localStorage.getItem('task')) || []
//     tasks.map(el =>(
//         ul.innerHTML+= `<li class="${classes.li}">
//    <span class="${el.isDone ? "line" : "" }">
//    <input type="radio" ${el.isDone ? "radio" : ""} class="${classes.radio}">
//    ${el.title}
//    ${input.value}
//    ${inputTwo.value}
// </span>
//
//  <button class="${classes.delBtn}">delet</button>
// </li>`
//     ))
//     deleteTask()
// }
// view()
//
// btn.addEventListener('click',() => addTasks())
//
// input.addEventListener('keydown',(e) =>{
//     if(e.key === "Enter") addTasks()
// })
//
// inputTwo.addEventListener('keydown',(e)=>{
//     if(e.key === "Enter")addTasksTWo()
// })
//
//
// function addTasksTWo (){
//     const  tasks = JSON.parse(localStorage.getItem('task')) || []
//     const  newTask = {
//         id:tasks.length ? tasks[tasks.length -1].id + 1 : 1,
//         titleTwo: inputTwo.value,
//         isDone: false
//     }
//
//     const result = [...tasks,newTask]
//     localStorage.setItem('task', JSON.stringify(result))
//     inputTwo.value=""
//     view()
//     checkedTask()
//
// }
//
//
// function addTasks (){
//     const  tasks = JSON.parse(localStorage.getItem('task')) || []
//     const  newTask = {
//         id:tasks.length ? tasks[tasks.length -1].id + 1 : 1,
//         title: input.value,
//         isDone: false
//     }
//
//     const result = [...tasks,newTask]
//     localStorage.setItem('task', JSON.stringify(result))
//     input.value = ""
//     view()
//     checkedTask()
//
// }
//
// function deleteTask(){
//     let  tasks = JSON.parse(localStorage.getItem('task')) || []
//     const buttons = document.querySelectorAll('.del-btn')
//     buttons.forEach((btn,index ) =>{
//         btn.addEventListener('click',() =>{
//             tasks = tasks.filter((el,idx) =>{
//                 return idx !== index
//             })
//             localStorage.setItem('task',JSON.stringify(tasks))
//             view()
//         })
//     })
// }
// function checkedTask(){
//     let  tasks = JSON.parse(localStorage.getItem('task')) || []
//     const checkBoxes = document.querySelectorAll('.check-box')
//     checkBoxes.forEach((check,index) => {
//         check.addEventListener('click',() =>{
//             tasks = tasks.map((el,idx)=>{
//                 if (idx === index){
//                     check.parentNode.classList.toggle('line')
//                     return{...el, isDone: !el.isDone}
//                 }else{
//                     return el
//                 }
//             })
//             localStorage.setItem('task',JSON.stringify(tasks))
//         })
//     })
// }
//
// checkedTask().........................................

const btn = document.querySelector('.add-btn')
const input = document.querySelector('.text-input')
const inputEmail = document.querySelector('.text-email')
const ul = document.querySelector('.list')
const classes = {
    li: "list-group-item d-flex justify-content-between align-content-end m-8"

}
function view() {
    ul.innerHTML = ""
    const add = JSON.parse(localStorage.getItem("add")) || []
    add.map(el => (ul.innerHTML +=
            `<li class="${classes.li}">
<div style="display:flex; align-items:center;justify-content: center">
<div style="width:50px;margin:10px;height: 50px;
background: #20dabe;color: rgba(0,0,0,0.89);border-radius:50%;
border: 3px solid #3b3b72;display: flex;align-items: center;
justify-content: center ">
${el.title[0]}
${el.email[0]}
</div>
<div style="display: flex; flex-direction: column;
justify-content: center;align-items: flex-start;height:60px;"></div>
<span>
${el.title}
${el.email}

</span>
</div>
<button class="del-btn btn btn-danger" style="background:plum; border-radius:10px;border: black">delete</button>
</li>`
    ))
    deleteTask()
    input.value = ""
    inputEmail.value = ""
}

view()

function addTask() {
    const text = JSON.parse(localStorage.getItem("add")) || []
    const newText = {
        id: text.length ? text[text.length - 1].id + 1 : 1,
        title: input.value,
        email: inputEmail.value,
        isDone: false,
    }
    const result = [...text, newText]
    localStorage.setItem("add", JSON.stringify(result))
    view()
}

btn.addEventListener('click', () => addTask())

function deleteTask() {
    let add = JSON.parse(localStorage.getItem("add")) || []
    const buttons = document.querySelectorAll(".del-btn")
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            add = add.filter((el, idx) => {
                return idx !== index
            })
            localStorage.setItem('add', JSON.stringify(add))
            view()
        })
    })
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask()

})

inputEmail.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask()

})


// .......................................................

// add= () =>{
//     const input=document.getElementById("input")
//     const lis=document.getElementById("lis")
//     if(input.value.trim() !== ""){
//         let text=input.value;
//         console.log(text)
//         let newdiv=document.createElement('div')
//         newdiv.className="myclass";
//         newdiv.id="mc";
//         newdiv.innerHTML=`${text}`;
//         //=====================================================
//         let del=document.createElement('span')
//         del.id="def"
//         del.innerText="✘";
//         //=======================================
//         let tic=document.createElement('span')
//         tic.id="tic"
//         tic.innerText="✓";
//         //===========================================
//         lis.appendChild(newdiv)
//         lis.appendChild(del)
//         lis.appendChild(tic)
//         input.value="";
//         tic.addEventListener('click',function(){
//             if(newdiv.classList.contains("strike")){
//
//                 newdiv.classList.remove('strike')
//             }
//             else{
//                 newdiv.classList.add('strike')}
//         })
//         del.addEventListener('click',function(){
//             lis.removeChild(newdiv)
//             lis.removeChild(del)
//             lis.removeChild(tic)
//
//         })}
//     else{
//
//         input.style.borderColor='black';
//         setTimeout(() => {
//             input.style.borderColor='purple';
//         }, 300);
//         setTimeout(() => {
//             input.style.borderColor=' rgb(80, 79, 79)';
//         }, 3000);
//     }
// }
// const con=document.getElementById("con")
// con.scrollTop += 50;


// const  myNodelist = document.getElementsByTagName("LI");
//  i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }
//
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }
//
// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);
//
// // Create a new list item when clicking on the "Add" button
// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
//
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
//
//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }