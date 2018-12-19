$(document).ready(function () {
    $('#content').toggleClass('active')
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
        $('#content').toggleClass('active');

        // this doesnt seem to work
        $('#globebox').style('right', "0%")
    });

});