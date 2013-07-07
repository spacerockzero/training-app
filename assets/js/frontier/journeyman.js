$('#myTab a:last').tab('show'); // Select first tab

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});