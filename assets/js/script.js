// copyright year auto update
setInterval(function () {
    var clock = new Date();
    var Year = clock.getFullYear();
    document.querySelector("#copyright").innerHTML = "&copy; " + Year + " - ICT Flow by Jahid";
}, 10000)



// Form Submission
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    submitButton.innerText = 'Submitting...';

    fetch('https://script.google.com/macros/s/AKfycbwMup12MILhxB6PtibLTVSx1-xYQbo_LnLVEowmTuhFi-UjcojT-M8hg60vzxVVvHHDSw/exec', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(result => {
            form.reset();

            const resElement = document.getElementById('res');
            resElement.innerText = 'Data received!';
            resElement.style.color = 'green';

            submitButton.innerText = 'Submit';

            setTimeout(() => {
                resElement.innerText = '';
            }, 5000);
        })
        .catch(error => {

            const resElement = document.getElementById('res');
            resElement.innerText = 'Error submitting form: ' + error;
            resElement.style.color = 'red';

            submitButton.innerText = 'Submit';

            setTimeout(() => {
                resElement.innerText = '';
            }, 10000);
        });
});
