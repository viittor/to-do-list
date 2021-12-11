var tasks = [];

function createId(){
   var time = new Date;

   var id = 
   time.getSeconds().toString() +
   time.getMinutes().toString() +
   time.getHours().toString() +
   time.getDay().toString()

   return id;
}

function addTask(){
var inputTask = document.getElementById("input-item").value;

var task = [{
   id: createId(),
   data:{
   description: inputTask
   }
}
]
tasks.push(task)

updateScreen();
}

function updateScreen(){
   var list =  "<ul>";

   tasks.forEach(task => {
      list += "li id-data="+ task.id + ">"+ task.data.description + "</li>"
   })

   list += "</ul>";


   document.getElementById("container-list").innerHTML = list;

   document.getElementById("input-item").value = "";

}