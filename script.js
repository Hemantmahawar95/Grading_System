(function () {
const form = document.getElementById('gradeForm');
const marksInput = document.getElementById('marks');
const resultBox = document.getElementById('result');


function gradeFromMarks(marks) {
if (marks <= 100 && marks >= 90) return 'A';
else if (marks < 90 && marks >= 80) return 'B';
else if (marks < 80 && marks >= 70) return 'C';
else if (marks < 70 && marks >= 60) return 'D';
else if (marks < 60 && marks >= 50) return 'E';
else if (marks < 50 && marks >= 40) return 'F';
else if (marks < 40 && marks >= 0) return 'G';
return null; // invalid
}


function showMessage(html) {
resultBox.innerHTML = html;
}


function handleSubmit(e) {
e.preventDefault();


const raw = marksInput.value.trim();
if (raw === '') {
showMessage('⚠️ Please enter your marks.');
return;
}


const marks = Number(raw);
if (!Number.isFinite(marks)) {
showMessage('⚠️ Invalid input. Enter a number.');
return;
}


const grade = gradeFromMarks(marks);
if (grade === null) {
showMessage('❌ Invalid Marks (enter 0 to 100).');
return;
}


showMessage(`✅ Your grade is: <span class="badge ${grade}">${grade}</span>`);
}


// Submit with button or Enter key
form.addEventListener('submit', handleSubmit);


// Clear result on reset
document.getElementById('resetBtn').addEventListener('click', function () {
showMessage('');
marksInput.focus();
});


// Autofocus for convenience
marksInput.focus();
})();
