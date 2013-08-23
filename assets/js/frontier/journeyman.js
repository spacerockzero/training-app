$('#myTab a').eq(2).tab('show'); // Select first tab

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});