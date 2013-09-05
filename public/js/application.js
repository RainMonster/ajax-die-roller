$(document).ready(function() {

  $('form').on('submit', function(e){
  e.preventDefault();

  $.ajax({
    url: this.action,
    type: this.method,
    data: $(this).serialize()
      }).done(function(server_data) {
      console.log(server_data); 
      $("#die").html(server_data);
    });
  });
});
