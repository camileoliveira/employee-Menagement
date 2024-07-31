const prompt = require("prompt-sync")();
const arrEmployee = require("./arrEmployee");

function findEmployee() {
  const question = prompt(`Qual categoria você quer encontrar?
    1. Nome
    2. Cargo
    3. Departamento
    4. Salário
    `);
  let employeeFilter;

  if (question == "1") {
    let nameEmployee = prompt("Nome: ");
    employeeFilter = arrEmployee.filter(
      (employee) => employee.name == nameEmployee
    );
  }
  if (question == "2") {
    let roleEmployee = prompt("Cargo: ");
    employeeFilter = arrEmployee.filter(
      (employee) => employee.role == roleEmployee
    );
  }
  if (question == "3") {
    let departamentEmployee = prompt("Departamento: ");
    employeeFilter = arrEmployee.filter(
      (employee) => employee.departament == departamentEmployee
    );
  }
  if (question == "4") {
    let salaryEmployee = prompt("Salário: ");
    employeeFilter = arrEmployee.filter(
      (employee) => employee.salary == salaryEmployee
    );
  }
  for (var i = 0; i <employeeFilter.length; i++){
    console.log(`Id: ${employeeFilter[i].id}, Nome: ${employeeFilter[i].name}, Cargo: ${employeeFilter[i].role}, Departamento: ${employeeFilter[i].departament}, Salário: ${employeeFilter[i].salary}.000,00` )
  }
}

module.exports = findEmployee;
