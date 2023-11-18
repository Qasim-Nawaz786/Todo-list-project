import inquirer from "inquirer";

async function main() {
  let todo = [];
  let loop = true;

  do {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "TODO",
        message: "What do you want to add in your todo: ",
      },
      {
        type: "confirm",
        name: "retry",
        message: "Do you want to add more todo?",
        default: false,
      },
    ]);

    if (answer.TODO) {
      todo.push(answer.TODO);
    }

    if (todo.length > 0) {
      console.log("Your Todos:");
      todo.map((item) => {
        console.log(item);
      });
    }

    loop = answer.retry;
  } while (loop);
}

main();
