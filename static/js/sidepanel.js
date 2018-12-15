$(document).ready(function () {
    $('#content').toggleClass('active')
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
        $('#content').toggleClass('active');
    });

});