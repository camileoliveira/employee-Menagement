const prompt = require("prompt-sync")();

const arrEmployee = require("./arrEmployee");
const seeEmployee = require("./seeEmployee");
const updateEmployee = require("./updateEmployee");
const removeEmployee = require("./removeEmployee");
const findEmployee = require("./findEmployee");
const insertEmployee = require("./insertEmployee");

function mainMenu() {
  question = prompt(`
        1. Listar funcionários
        2. Cadastrar funcionário
        3. Editar
        4. Excluir
        5. Buscar
        6. Sair
        `);

  while (question != "6") {
    if (question == "1") {
      seeEmployee();
    }
    if (question == "2") {
      insertEmployee();
    }
    if (question == "3") {
      updateEmployee();
    }
    if (question == "4") {
      removeEmployee();
    }
    if (question == "5") {
      findEmployee();
    }
    question = prompt(`
        1. Listar funcionários
        2. Cadastrar funcionário
        3. Editar
        4. Excluir
        5. Buscar
        6. Sair
        `);
  }
}

mainMenu();
