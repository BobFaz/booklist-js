window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        year = document.querySelector('#year'),
        btn = document.querySelector('.btn'),
        bookList = document.querySelector('#book-list');
    
    btn.addEventListener('click', (event)  => {
        event.preventDefault()

        // if nothing entered, it works
        if (title.value == '' && author.value == '' && year.value == ''){
            alert('Please enter book info.')
        } else {
            const newRow = document.createElement('tr')

            //creating new title
            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)

            //creating new author
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            //creating new year
            const newYear = document.createElement('th')
            newYear.innerHTML = year.value
            newRow.appendChild(newYear)

            //showing it in UI
            bookList.appendChild(newRow)

            title.value = ''
            author.value = ''
            year.value = ''
        }

    })
})



