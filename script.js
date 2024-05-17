// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function() {
  const employees=[]
  let addAnother= true

  // Creates prompts to collect data
  // While the addAnother state is equal to true the function will run

  while(addAnother){
    const firstName = prompt ("Enter Employee's first name")
    const lastName = prompt ("Enter Employee's last name")
    let salary = parseFloat(prompt ("Enter Employee's salary"))

    // Defaults to 0 if user input is not a number
    //parseFloat is parsing the string (reading in between the quotation marks) and if it reads a number, it will store that as a number in the object (as opposed to storing it as a string). If it reads anything other than a number it will return a 0. So no emojis will be accepted!
    if(isNaN(salary)) {
      salary = 0
    } 
  
  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  }

// We use a push method to store the object within the employees array. The structure goes
employees.push(employee);
console.log(employee)
// Here we create a prompt to change the addAnother variable to false to stop the function from running again
const addMore = confirm ("Do you want to add another employee?") 
  if (addMore){
    addAnother = !addAnother}

  }
  return employees
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
