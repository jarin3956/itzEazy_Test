function showNext() {
    document.querySelector('.inputBox1').classList.remove('show');
    document.querySelector('.inputBox2').classList.add('show');
}

function showFinish() {
    document.querySelector('.inputBox2').classList.remove('show');
    document.querySelector('.inputBox3').classList.add('show');
}

function openYearModal() {
    var modal = document.getElementById("yearModal");
    modal.style.display = "block";
}

function closeYearModal() {
    var modal = document.getElementById("yearModal");
    modal.style.display = "none";
}

function selectYear(year) {
    var inputField = document.getElementById("issuedYear");
    inputField.value = year;
    closeYearModal(); 
}

function openExpiredYearModal() {
    var modal = document.getElementById("expiredYearModal");
    modal.style.display = "block";
}

function closeExpiredYearModal() {
    var modal = document.getElementById("expiredYearModal");
    modal.style.display = "none";
}

function selectExpiredYear(year) {
    var inputField = document.getElementById("expiredYear");
    inputField.value = year;
    closeExpiredYearModal(); 
}


document.addEventListener('DOMContentLoaded', function () {

    const mainArea = document.querySelector('.mainArea');
    const inputElement = mainArea.querySelectorAll('input');
    const totalInputCount = inputElement.length;

    let totalInputs = 0;
    const progress = document.getElementById('progress');

    function updateProgressBar() {
        const filledPercentage = (totalInputs / totalInputCount) * 100;
        progress.style.width = filledPercentage + '%';
    }

    function handleYearOptionClick(event) {
        const selectedYear = event.target.innerText.trim();
        if (selectedYear !== '') {
            totalInputs++;
            updateProgressBar();
        }
    }
    const yearOptionsContainer = document.getElementById('yearOptions');
    yearOptionsContainer.addEventListener('click', handleYearOptionClick);

    function handleExpiredYearOptionClick(event) {
        const selectedYear = event.target.innerText.trim();
        if (selectedYear !== '') {
            totalInputs++;
            updateProgressBar();
        }
    }
    const expiredYearOptionsContainer = document.getElementById('yearOptions2');
    expiredYearOptionsContainer.addEventListener('click', handleExpiredYearOptionClick);
    
    function handleInputChange() {
        totalInputs++;
        updateProgressBar();
    }

    const inputElements = document.querySelectorAll('.input_Field, input[type="radio"]');
    inputElements.forEach(function (inputElement) {
        inputElement.addEventListener('input', handleInputChange);
    });
});



