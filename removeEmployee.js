const prompt = require("prompt-sync")();
const arrEmployee = require("./arrEmployee");

function removeEmployee(){
findId = prompt("Qual id do funcionário para remover? ")

const i = arrEmployee.findIndex((employee) => employee.id == findId)
if(i !== -1){
arrEmployee.splice(i, 1);
console.log(`Removido Id: ${findId} - ${arrEmployee[i].name}`)
}
}

module.exports = removeEmployee