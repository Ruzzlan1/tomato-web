$('#timepicker').clockpicker({
    placement: 'bottom',
    autoclose: true
});

$('[data-toggle="datepicker"]').datepicker();

$(':input[type=number]').on('mousewheel', function (e) {
    e.preventDefault();
});
