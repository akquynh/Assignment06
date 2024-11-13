// Access the form and employee table from the DOM
const form = document.getElementById('addForm');
const empTable = document.getElementById('employees');
const empCount = document.getElementById('empCount');

// Initialize the count variable
let count = 0;

// Event listener for the form submission (Add Employee)
form.addEventListener('submit', (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Retrieve values from form inputs
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // Insert a new row at the end of the employees table
    const row = empTable.insertRow();

    // Insert a cell for each piece of employee information
    row.insertCell(0).appendChild(document.createTextNode(id));
    row.insertCell(1).appendChild(document.createTextNode(name));
    row.insertCell(2).appendChild(document.createTextNode(extension));
    row.insertCell(3).appendChild(document.createTextNode(email));
    row.insertCell(4).appendChild(document.createTextNode(department));

    // Create the delete button and add it to the last cell
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    row.insertCell(5).appendChild(deleteBtn);

    // Clear the form inputs
    form.reset();

    // Set focus back to the Employee ID input
    document.getElementById('id').focus();

    // Increment the employee count and display it
    count++;
    empCount.textContent = `(${count})`;
});

// Event listener for deleting an employee
empTable.addEventListener('click', (e) => {
    // Check if the clicked element is a delete button
    if (e.target.classList.contains('btn-danger')) {
        // Confirm deletion
        if (confirm('Are you sure you want to delete this employee?')) {
            // Get the row to delete
            const row = e.target.parentElement.parentElement;
            empTable.deleteRow(row.rowIndex);

            // Decrement the employee count and display it
            count--;
            empCount.textContent = `(${count})`;
        }
    }
});