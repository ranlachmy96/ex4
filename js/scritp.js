window.onload = function() {
const input = document.querySelector("input[type=range]");
const number = document.querySelector("#range-value");
const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const formVariable = document.querySelector("#form-wrapper");
const initialBoxContainer = document.querySelector("#initialBoxContainer");
if (input && number) {
    input.addEventListener("input", () => {
        number.textContent = input.value;
    });
}
yesButton.addEventListener("click", function () {
    initialBoxContainer.style.opacity = "0";
    formVariable.style.display = "flex";
    setTimeout(() => formVariable.style.opacity = "1", 1300);
    initialBoxContainer.style.display = "none";
    playButton.style.display = "block";
    const containLetter = document.querySelector("#containLetter");
    const spans = containLetter.querySelectorAll("span");
    spans.forEach(span => {
        span.style.display = "inline";
    });
    audio.play();
});
noButton.addEventListener("click", function () {
    const firstSection = document.querySelector('.box section:first-child');
    const secondSection = document.querySelector('.box section:nth-child(2)');
    yesButton.style.display = "none"
    noButton.style.display = "none";
    firstSection.style.display = 'none';
    secondSection.style.display = 'block';
});
playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playButton.style.background = "url('images/music_icon.svg')";
    } else {
        audio.pause();
        playButton.style.background = "url('images/music_disabled_icon.svg')";
    }
});
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()
document.getElementById("myForm").addEventListener("submit", function (event) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (checkedCount < 3) {
        event.preventDefault();
        let invalidFeedback = document.querySelector('.invalid-feedback');
        invalidFeedback.style.display = 'block';
        checkboxes.forEach(function (checkbox) {
            if (!checkbox.checked) {
                checkbox.nextElementSibling.style.color = "red";
                checkbox.style.borderColor = "red";
            } else {
                checkbox.nextElementSibling.style.color = "white";
                checkbox.style.borderColor = "initial";
            }
        });
    } else {
        let invalidFeedback = document.querySelector('.invalid-feedback');
        invalidFeedback.style.display = 'none';
        checkboxes.forEach(function (checkbox) {
            checkbox.nextElementSibling.style.color = "white";
            checkbox.style.borderColor = "initial";
        });
    }

    let unCheckedRadio = document.querySelectorAll('input[type="radio"]:not(:checked)');
    unCheckedRadio.forEach(function (radio) {
        radio.nextElementSibling.style.color = "white";
    });
    let checkedRadio = document.querySelector('input[type="radio"]:checked');
    if (checkedRadio) {
        checkedRadio.nextElementSibling.style.color = "green";
    }
});

}


