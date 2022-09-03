import getContract from "./utils/getContract.js";

async function getTodoList() {
  const contract = getContract();
  try {
    const response = await contract.getTodos();
    const formatted = response.map((item) => {
      return {
        name: item[0],
        description: item[1],
        status: item[2],
      };
    });
    return formatted;
  } catch (error) {
    console.log("error", error);
  }
}


const updateTodoUI = async () => {
  const data = await getTodoList();
  console.log(data, "data");
  data.forEach((item) => {
    todos.innerHTML += `   
    <li class='my-2'>${item.description}</li>`;
  });
};

async function addToTodoList(title, desc) {
  try {
    const contract = getContract(true);
    const response = await contract.createTodo(title, desc);
  return response;
  } catch (error) {
    console.log("Error", error);
  }
  
}

updateTodoUI();

// add new list

addTodo.addEventListener("click", async function(e) {
  e.preventDefault();
await addToTodoList(title1.value, desc1.value);
});

// sendTransaction.innerText = "Sending";
