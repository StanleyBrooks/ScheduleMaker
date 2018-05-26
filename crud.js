var app = new function() {
    this.el = document.getElementById('allEmployees');
    //Employees already entered (this will eventually pull from a db)
    this.allEmployees = ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5', 'Employee 6', 'Employee 7', 'Employee 8', 'Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5', 'Employee 6', 'Employee 7', 'Employee 8'];

    //Count the number of total employees to display at the top
    this.Count = function(entries) {
        var el   = document.getElementById('counter');
        var name = 'employee';
        if (entries) {
            if (entries > 1) {
                name = 'Total Employees';
            }
        el.innerHTML = entries + ' ' + name ;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    //Update current employees
    this.FetchAll = function() {
        var entries = '';
        if (this.allEmployees.length > 0) {
            for (i = 0; i < this.allEmployees.length; i++) {
                entries += '<tr>';
                entries += '<th scope="row">' + this.allEmployees[i] + '</th>';
                entries += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                entries += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                entries += '</tr>';
            }
        }
        this.Count(this.allEmployees.length);
        return this.el.innerHTML = entries;
    };

    //Add new employee to list
    this.Add = function () {
        el = document.getElementById('addName');
        // Get the value
        var employee = el.value;
        if (employee) {
            // Add the new value
            this.allEmployees.push(employee.trim());
            // Reset input value
            el.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };

    //Edit list item entry
    this.Edit = function (item) {
        var el = document.getElementById('editName');
        // Display value in the field
        el.value = this.allEmployees[item];
        // Display fields
        document.getElementById('editInput').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
            // Get value
            var employee = el.value;
            if (employee) {
                // Edit value
                self.allEmployees.splice(item, 1, employee.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };
    
    //Delete item entry
    this.Delete = function (item) {
        // Delete the current row
        this.allEmployees.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };
            
}

app.FetchAll();
function CloseInput() {
    document.getElementById('editInput').style.display = 'none';
}