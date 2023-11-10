// transition.js
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to trigger the transition
    document.getElementById('readMoreBtn').addEventListener('click', function (e) {
        e.preventDefault();

        // Add a class to the body to initiate the transition
        document.body.classList.add('transition-active');

        // Redirect to the readmore.html page after a delay (adjust the delay as needed)
        setTimeout(function () {
            window.location.href = 'readmore.html';
        }, 1000); // Delay in milliseconds
    });
});
