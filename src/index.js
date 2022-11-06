(async function () {
  const data = await fetch("./src/data.json");
  const res = await data.json();

  let employees = res;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees_name--list");
  const employeeInfo = document.querySelector(".employees_single--info");

  const renderEmployees = () => {
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employee_styling");
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i> X </i>`;

      if (parseInt(selectedEmployeeId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }

      employeeList.appendChild(employee);
    });
  };

  renderEmployees();
})();
