window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
    }, 3000); // Show popup after 3 seconds
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('subscribeForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    closePopup();
}
