let employee = [];

function addEmployee() {
    let id = document.getElementById("empID").value;
    let name = document.getElementById("empName").value;
    let salary = document.getElementById("empSalary").value;
    let department = document.getElementById("empDepartment").value;

    if (id == "" || name == "" || salary == "" || department == "") {
        alert("Please fill all the fields");
        return;
    }

    let employee = {
        id: id,
        name: name,
        salary: salary,
        department: department
    };

    employee.push(employee);
}