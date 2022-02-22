let myStorage = window.localStorage;

let tasks = []; // cria um array

loadTasks();

// função para criar id
function createId() {
  var time = new Date();
  // variavel para criar id
  var id =
    time.getMilliseconds().toString() +
    time.getSeconds().toString() +
    time.getMinutes().toString() +
    time.getHours().toString()
  return id;
}

//função para criar a tarefa
function addTask() {
  var inputTask = document.getElementById("input-item").value;

  if (inputTask == "") {
    alert("Insira uma tarefa!");
  } else {
    //cria um objeto com 2 propriedades
    var task = {
      id: createId(),
      data: {
        description: inputTask,
      },
    };
    tasks.push(task); // empurra o valor da task para o array tasks
    
    myStorage.setItem("tasks", JSON.stringify(tasks));

    updateScreen(); //chama a função qye atualiza a tela.
  }
}

//função para atualizar a tela
function updateScreen() {
  var list = "<ul>";

  //Para cada task em tasks execute(=>):
  tasks.forEach((task) => {
    list +=
      "<li id-data=" +
      task.id +
      "><input type=checkbox></input><div>" +
      task.data.description +
      "</div><button onclick=removeTask(this) id-data=" + task.id + ">X</button>";
      "</li>";

    // list +=
    //   "<button onclick=removeTask(this) id-data=" + task.id + ">X</button>";
  });

  list += "</ul>";

  //Empurra o elemento criado para a tela.
  document.getElementById("container-list").innerHTML = list;

  //Limpa o campo de input
  document.getElementById("input-item").value = "";
}

//função para remover item da tela
function removeTask(element) {
  // tasks recebem um filtro em que task retira o elemento que contem o id que está no id-data
  tasks = tasks.filter((task) => task.id != element.getAttribute("id-data"));

  myStorage.setItem("tasks", JSON.stringify(tasks));

  loadTasks();
  
}


function loadTasks(){
  let tasks_str = myStorage.getItem("tasks")

  if(tasks_str){
    tasks = JSON.parse(tasks_str);
  }

  updateScreen();
}