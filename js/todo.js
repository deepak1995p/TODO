$(document).ready(function(){

  $('#addItem').on('click', addItem);
  $('#todos').on('change', '.completeItem', completeItem);
  $('#todos').on('click', '.deleteItem', deleteItem);

  function addItem(event){
    var newTodoText = $('#newTodo').val();
    $('#todos').append('<li><input class = "completeItem" type = "checkbox">' + newTodoText + '<span class = "glyphicon glyphicon-trash deleteItem"></span></li>');
    $('#newTodo').val("");
  }

  function deleteItem(event){
    $(this).parent().remove();
  }

  function completeItem(event){
    $(this).parent().toggleClass('done');
  }

});
