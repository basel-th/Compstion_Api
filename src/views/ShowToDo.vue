<template>
  <div class="class">
    <h1>Show To Do</h1>
    <table style="width: 100%" v-if="ToDoList.length">
      <thead>
        <tr>
          <th>Text</th>
          <th>From</th>
          <th>To</th>
          <th>Create At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in ToDoList"
          :key="todo.id"
          :style="todo.iscompleted ? { backgroundColor: 'lightgreen' } : {}"
        >
          <td>{{ todo.title }}</td>
          <td>{{ todo.date_from }}</td>
          <td>{{ todo.date_to }}</td>
          <td>{{ new Date(todo.created_at).toLocaleDateString() }}</td>
          <td>
            <button class="completed" @click="markAsCompleted(todo)">
              {{ todo.iscompleted ? "InCompleted" : "Completed" }}
            </button>
            <button class="delete" @click="deleteToDo(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else>No Todo to Found</h2>
  </div>
</template>

<script setup>
import todomixins from "@/mixins/todo";
const { ToDoList, deleteToDo, markAsCompleted } = todomixins();
</script>

<style lang="scss">
table {
  td,
  tr,
  th {
    border: 1px solid black;
    padding: 5px;
    text-align: center;
  }

  td {
    button {
      margin: 5px;
      border: none;
      border-radius: 3px;
      padding: 5px;
    }

    .completed {
      background-color: green;
      color: white;
    }

    .delete {
      background-color: red;
      color: white;
    }
  }
}
</style>
