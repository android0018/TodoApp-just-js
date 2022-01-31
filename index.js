showtask();
let inputtext = document.getElementById("todoentry");
let addbutton = document.getElementById("addtodo");

addbutton.addEventListener("click", function () {
    inputtext = inputtext.value;
    if (inputtext.trim() != '') {
        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskObj = [];
        }
        else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(inputtext);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        showtask();
    }
})


let deleteallbutton=document.getElementById("deletealltodo");
deleteallbutton.addEventListener("click",function () {
    taskObj =[];
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
})
function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("tabletodo");
    taskObj.forEach((item, index) => {
        html += `<tr class="tablerow">
                        <td class="tablecontent1"><B>${index+1}.</B></td>
                        <td class="tablecontent"><B>${item}</B></td>
                        <td><button class="editbutton btn btn-primary" onclick= "edited(${index})"><B>Edit</B></button></td>
                        <td><button class="deletebutton btn btn-primary" onclick= "deleted(${index})"><B>Delete</B></button></td>
                 </tr>`
    });
    addedtasklist.innerHTML = html;
}

function deleted(index){
    let webtask = localStorage.getItem("localtask");
    taskObj = JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
}

function edited(index) {
    let savetodobutton = document.getElementById("savetodo");
    let addtodobutton = document.getElementById("addtodo");
    addtodobutton.style.display= "none";
    savetodobutton.style.display="inline-block";
    let webtask=localStorage.getItem("localtask");
    taskObj = JSON.parse(webtask);
    inputtext.value = taskObj[index];

    savetodobutton.addEventListener("click",function () {
        taskObj[index]=inputtext.value;
        console.log(index);
        localStorage.setItem("localtask",JSON.stringify(taskObj));
    })
    showtask();
}

