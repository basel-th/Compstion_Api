import { ref, onMounted } from "vue";

const todosFunction = () => {
  // data
  const ToDoList = ref([]);

  // methods
  // seting up local storage
  const addToLoacalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(ToDoList.value));
  };

  //  upfdate local storage
  const updateLocalStorage = () => {
    if (localStorage.getItem("todos")) {
      ToDoList.value = JSON.parse(localStorage.getItem("todos"));
    }
  };

  const deleteToDo = (index) => {
    ToDoList.value.splice(index, 1);
    addToLoacalStorage();
  };

  const markAsCompleted = (todo) => {
    todo.iscompleted = !todo.iscompleted;
    addToLoacalStorage();
  };

  onMounted(() => {
    updateLocalStorage();
  });

  return { ToDoList, addToLoacalStorage, deleteToDo, markAsCompleted };
};
export default todosFunction;
