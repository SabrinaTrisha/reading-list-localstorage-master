let books = [] // array containing book objects {title: '', author: ''}

/* Check localStorage for books */
if(window.localStorage.getItem('books')){
    books = JSON.parse(window.localStorage.getItem('books'))
}

/* Check if books is empty and show/hide relevant message */ 
if(books.length != 0){
    $('#empty').hide()
    books.forEach(function(e){
        let item = $('<li>').text(e.title+'-'+e.author)
        $('#list').append(item)
    })
}
/* If books is not emply, populate view with book details in #list */

/* Add a book button click should reveal the form */
$('#show-add').click(function(e){
    $('#addForm').show()
    $(this).hide()
})
/* On ADD button click, 
    ensure the input fields contain values, 
    then add the book to HTML view 
    also save updated books array to localStorage 
*/
$('#add').click(function(e){
    var title = $('#title').val()
    var author = $('#author').val()
    if(title && author){
        $('#empty').hide()
        let item = $('<li>').text(title+'-'+author)
        $('#list').append(item)
        books.push({title:title, author:author})
        window.localStorage.setItem('books', JSON.stringify(books))

    }else{
        console.log('fields empty')
    }
})
/* Refreshing the page, should show all the stored books */
