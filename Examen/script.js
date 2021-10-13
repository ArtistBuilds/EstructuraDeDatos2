var selectedRow = null
var filtrar = []
var con = 0

/*function fil(mat, nom, ma, cal){
    
    filtrar.push(mat, nom, ma, cal)
}   

console.log(fil(12234,"dagp", "cine", 80))
*/
function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
//captura los datos
function readFormData() {
    var formData = {};
    formData["matricula"] = document.getElementById("matricula").value;
    formData["alumno"] = document.getElementById("alumno").value;
    formData["materia"] = document.getElementById("materia").value;
    formData["cal"] = document.getElementById("cal").value;
    return formData;

}

//edita los datos
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("matricula").value = selectedRow.cells[0].innerHTML;
    document.getElementById("alumno").value = selectedRow.cells[1].innerHTML;
    document.getElementById("materia").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cal").value = selectedRow.cells[3].innerHTML;
}
//vacia el formulario
function resetForm() {
    document.getElementById("matricula").value = "";
    document.getElementById("alumno").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("cal").value = "";
    selectedRow = null;
}
// inserta los datos en la fila de la tabla
function insertNewRecord(data) {
    var table = document.getElementById("tablelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.matricula;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.alumno;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.materia;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cal;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"  class="hover:bg-gray-300 hover:text-black transition duration-200 rounded text-white">Edit</a>
                       <a onClick="onDelete(this)"class="hover:bg-gray-300 hover:text-black transition duration-200 rounded text-white">Delete</a>`;

}
//edita una fila

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.matricula;
    selectedRow.cells[1].innerHTML = formData.alumno;
    selectedRow.cells[2].innerHTML = formData.materia;
    selectedRow.cells[3].innerHTML = formData.cal;
}
//Borra una fila en base a su indíce 

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("tablelist").deleteRow(row.rowIndex);
    resetForm();
}
//el clochur con todas las funciones
const closure = function(){

    function insertar(){

        return readFormData()
        // return insertNewRecord(data)
        
    }
    function eliminar(){

        return onEdit(td)
        
    }
    function modificar(){
       
        return updateRecord(formData)
        // return insertNewRecord(data)
    }
    function buscar(){

    }
    return {
        insertar,
        eliminar,
        modificar,
        buscar
    }
}
const a = closure()