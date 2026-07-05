      let variable = document.querySelector(".js-input");
      let dateVariable = document.querySelector(".js-date");
      let storage = [];
      function addFunc(){
        let name = variable.value;
        let date = dateVariable.value;
        const temp = {
          name: name,
          date: date
        }

        storage.push(temp);
        console.log(storage);
        todoAddFunc();

      }
      function handleAddTask(event){
        if(event.key=='Enter'){
          addFunc();
          document.querySelector(".js-input").value = '';
        }
      }

      function todoAddFunc(){
        let variable = '';
        for(let i=0; i<storage.length; i++){
          const task = storage[i];
          const html = `
          <p><span class="task-name">${task.name}</span><span class="task-date">${task.date}</span>
<button onclick=" storage.splice(${i},1);
            todoAddFunc();">Delete</button>
</p>`
         variable+=html;

        }
        console.log(variable);
         document.querySelector(".todo-list").innerHTML = variable;
      }
        