/* Exercise 1: Wish list */

$(document).ready(function() {

    updateTotal();

    function addToList(item) {
        var status_label = '<span class="label pending">Pending</span>'
        $('#items').append('<li>' + item + status_label + '</li>');    
        updateTotal();
    }

    $(document).on('click', '#add-to-list', function() {
        addToList($("#item").val());
        $('#item').val('');
        $('#item').focus();
        updateTotal();
    })

    $(document).on('click', '.pending', function() {
        var li_node = $(this).parent();
        li_node.append('<span class="label success">Done!</span>');
        li_node.addClass('completed');
        $(this).remove();
        updateTotal();
    })

    function updateTotal() {
        completed = $('.success').length;
        pending = $('.pending').length;
      
        // if (completed > 0 || pending > 0) {
          $('.total').text(" Pending: " + pending + " Completed: " + completed);
        // }
      }

});
