let textArea = document.getElementById('editor')
textArea.addEventListener('keyup',()=>{
    let words = textArea.value;
        localStorage.setItem('text', words)
})
textArea.value = localStorage.getItem('text')