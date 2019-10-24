/* Exercise 1: Wish list */
function addToList(item) {
    $('#items').append('<li>' + item + '<span class="label pending">Pending</span>' + '</li>');    
    $('#item').append('pending')
}

$(document).on('click', '#add-to-list', function() {
    addToList($("#item").val());
    $('#item').val('');
    $('#item').focus();
})