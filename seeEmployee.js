const arrEmployee = require("./arrEmployee")

function seeEmployee(){
    arrEmployee.forEach((employee) =>
        console.log(`Id: ${employee.id}, Nome: ${employee.name}, Cargo: ${employee.role}, Departamento: ${employee.departament}, Salário: ${employee.salary}`
        )
      );
}

module.exports = seeEmployee