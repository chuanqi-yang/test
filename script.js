document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the "Add Course" button
    document.getElementById('add-row').addEventListener('click', function () {
        const table = document.getElementById('grade-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = '<input type="text" class="course" placeholder="Course Name">';
        cell2.innerHTML = '<input type="number" class="percentage" placeholder="Percentage Grade">';
        cell3.innerHTML = '<button class="remove-row">Remove</button>';

        // Add event listener for the "Remove" button in the new row
        cell3.querySelector('.remove-row').addEventListener('click', function () {
            table.deleteRow(newRow.rowIndex - 1);
        });
    });

    // Add event listener for the "Calculate GPA" button
    document.getElementById('calculate-gpa').addEventListener('click', function () {
        const rows = document.querySelectorAll('#grade-table tbody tr');
        let totalPercentage = 0;
        let totalCourses = 0;

        rows.forEach(row => {
            const percentage = parseFloat(row.querySelector('.percentage').value);

            if (!isNaN(percentage)) {
                totalPercentage += percentage;
                totalCourses++;
            }
        });

        if (totalCourses === 0) {
            document.getElementById('result').innerText = 'Please enter valid percentage grades.';
            return;
        }

        const averagePercentage = totalPercentage / totalCourses;
        const gpa = convertPercentageToGPA(averagePercentage);

        document.getElementById('result').innerText = `Your GPA is: ${gpa.toFixed(2)}`;
    });

    // Function to convert percentage to GPA
    function convertPercentageToGPA(percentage) {
        if (percentage >= 90) return 4.0;
        if (percentage >= 85) return 3.9;
        if (percentage >= 80) return 3.7;
        if (percentage >= 77) return 3.3;
        if (percentage >= 73) return 3.0;
        if (percentage >= 70) return 2.7;
        if (percentage >= 67) return 2.3;
        if (percentage >= 63) return 2.0;
        if (percentage >= 60) return 1.7;
        if (percentage >= 57) return 1.3;
        if (percentage >= 53) return 1.0;
        if (percentage >= 50) return 0.7;
        return 0.0;
    }
<script src="script.js"></script>
<script src="security-log.js"></script>
});
