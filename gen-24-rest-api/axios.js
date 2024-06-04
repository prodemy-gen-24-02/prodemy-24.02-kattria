//const axios = require('axios');
const url = "https://dummyjson.com/todos";

const getAll = async () => {
  try {
    const response = await axios.get(url);
    console.log("To do List:", response.data.todos);
    //display(response.data.todos);
  } catch (error) {
    console.error("Error get all to do list:", error);
  }
};
//getAll();

const addTodos = async (todos, delay) => {
  try {
    await new Promise(resolve => setTimeout (resolve, delay))
    const response = await axios.post(url + "/add", todos);
    console.log("To do List Created:", response.data);
  } catch (error) {
    console.error("Error creating to do list:", error);
  }
};
const newToDo = {
  todo: "New To do",
  completed: false,
  userId: 100,
};
//addTodos(newToDo);

const updateTodos = async (id, updateData) => {
    try {
      const response = await axios.put(`${url}/${id}`,updateData);
      console.log("To do List Updated:", response.data);
    } catch (error) {
      console.error("Error updating to do list:", error);
    }
};

const updatedData = {
    completed: true
}

//updateTodos(225,updatedData);

const deleteTodos = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log("To do List Deleted:", response.data);

    } catch (error) {
      console.error("Error deleting to do list:", error);
    }
};

//deleteTodos(1)

(async () => {
    await getAll(); // Read
    //setInterval(getAll,3000);
    addTodos(newToDo,5000); // Create
   
    await updateTodos(25, updatedData); // Update

    await deleteTodos(1); // Delete

})();

//setTimeout(getAll,1000)


function display(products) {
  const todosTableBody = document
    .getElementById("todosTable")
    .getElementsByTagName("tbody")[0];
  todosTableBody.innerHTML = "";
  products.forEach((product) => {
    const row = todosTableBody.insertRow();
    row.insertCell(0).textContent = product.id;
    row.insertCell(1).textContent = product.todo;
    row.insertCell(2).textContent = product.completed;
    row.insertCell(3).textContent = product.userId;
    // const actionsCell = row.insertCell(4);
    // const deleteButton = document.createElement('button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.onclick = () => deleteProduct(product.id);
    // actionsCell.appendChild(deleteButton);
  });
}
