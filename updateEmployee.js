const prompt = require("prompt-sync")();
const arrEmployee = require("./arrEmployee");

function updateEmployee() {
  const findId = prompt("De qual id você quer atualizar os dados? ");

  const i = arrEmployee.findIndex((employee) => employee.id == findId);

  if(i != -1){
    const question = prompt("Qual dado você quer alterar? ");
    if (question == "Nome") {
        const newName = prompt("Nome: ");
        arrEmployee[i].name = newName;
      }
  
      if (question == "Cargo") {
        const newRole = prompt("Cargo: ");
        arrEmployee[i].role = newRole;
      }
  
      if(question == "Departamento"){
          const newDepartament = prompt("Departamento: ")
          arrEmployee[i].departament = newDepartament;
      }
  
      if(question == "Salario"){
          const newSalary = prompt("Salário: ")
          arrEmployee[i].salary = newSalary
      }
      console.log("Dado alterado!")
  }
}

module.exports = updateEmployee;
