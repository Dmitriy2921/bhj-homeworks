const xhr = new XMLHttpRequest;
xhr.addEventListener('readystatechange',()=>{
    if(xhr.readyState === xhr.DONE){
        let pars = JSON.parse(xhr.response);
        document.querySelector(".loader").classList.remove("loader_active")
        document.querySelector('.item').remove()
        let mas = [];
        for(let ind in pars.response.Valute){
            console.log(ind)
            mas.push(pars.response.Valute[ind]);
        }
        mas.reverse()
        console.log(mas)
        let a = document.getElementById('items')
        for(let i = 0; i<mas.length;i++){
            a.insertAdjacentHTML('afterbegin','<div class="item"></div>')
            let b = document.querySelector('.item')
            b.insertAdjacentHTML('afterbegin','<div class="item__currency">руб.</div>')
            b.insertAdjacentHTML('afterbegin','<div class="item__value"></div>')
            document.querySelector('.item__value').textContent = mas[i].Value
            b.insertAdjacentHTML('afterbegin','<div class="item__code"></div>')
        document.querySelector('.item__code').textContent = mas[i].CharCode
        }
    }
})
xhr.open( 'GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses' );
xhr.send('');