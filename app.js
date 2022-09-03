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


const upadateTodoUI = async () => {
  const data = await getTodoList();
  console.log(data, "data");
  data.forEach((item) => {
    todos.innerHTML += `   
    <li class='my-2'>${item.description}</li>`;
  });
};

upadateTodoUI();

// add new list
