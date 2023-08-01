let form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let some = new XMLHttpRequest()
    some.upload.addEventListener('progress', (el)=>{
        let progress = document.getElementById( 'progress' );
        progress.value = el.loaded/el.total;
    })
    some.open( 'POST',"https://students.netoservices.ru/nestjs-backend/upload");
    let f = new FormData()
    f.append('file', document.getElementById('file').files[0])
    some.send(f)
})