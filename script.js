/* Exercise 1: Wish list */

$(document).ready(function() {

    var pending = $('.pending').length;
    var completed = $('.completed').length;
    $('.total').text('Pending: ' + pending + ' Completed: ' + completed);

    function addToList(item) {
        var status_label = '<span class="label pending">Pending</span>'
        $('#items').append('<li>' + item + status_label + '</li>');    
    }

    $(document).on('click', '#add-to-list', function() {
        addToList($("#item").val());
        $('#item').val('');
        $('#item').focus();
    })

    $(document).on('click', '.pending', function() {
        var li_node = $(this).parent();
        li_node.append('<span class="label success">Done!</span>');
        li_node.addClass('completed');
        $(this).remove();
    })

    function updateTotal() {
     
    }

});
