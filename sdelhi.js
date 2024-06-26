document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('servicesLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('servicesPopup').style.display = 'flex';
    });

    document.getElementById('servicesCloseBtn').addEventListener('click', function() {
        document.getElementById('servicesPopup').style.display = 'none';
    });

    document.getElementById('travelLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('travelPopup').style.display = 'flex';
    });

    document.getElementById('travelCloseBtn').addEventListener('click', function() {
        document.getElementById('travelPopup').style.display = 'none';
    });

    document.getElementById('aboutLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('aboutPopup').style.display = 'flex';
    });

    document.getElementById('aboutCloseBtn').addEventListener('click', function() {
        document.getElementById('aboutPopup').style.display = 'none';
    });

    document.getElementById('teamLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('teamPopup').style.display = 'flex';
    });

    document.getElementById('teamCloseBtn').addEventListener('click', function() {
        document.getElementById('teamPopup').style.display = 'none';
    });
});
