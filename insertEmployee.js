const prompt = require("prompt-sync")();
const arrEmployee = require("./arrEmployee");

function insertEmployee(){
  const id = arrEmployee.length + 1;
  const name = prompt("Nome: ");
  const role = prompt("Cargo: ");
  const departament = prompt("Departamento: ");
  const salary = prompt("Salário");

  const objectEmployee = {
    id: id,
    name: name,
    role: role,
    departament: departament,
    salary: salary,
  };

  arrEmployee.push(objectEmployee);
}

module.exports = insertEmployee;
