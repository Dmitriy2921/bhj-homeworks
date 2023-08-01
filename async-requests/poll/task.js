const xhr = new XMLHttpRequest;
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let pars = JSON.parse(xhr.response)
        document.getElementById('poll__title').textContent = pars.data.title
        for (let i = 0; i < pars.data.answers.length; i++) {
            document.querySelector('.poll__answers').insertAdjacentHTML("afterbegin",
                '<button class="poll__answer"></button>')
            let but = document.querySelector(".poll__answer")
            but.textContent = pars.data.answers[i];
            but.addEventListener('click', () => {
                alert("Спасибо, ваш голос засчитан!")
                const sr = new XMLHttpRequest;
                sr.addEventListener('readystatechange', () => {
                    if (sr.readyState === sr.DONE) {
                        document.querySelector(".poll").remove()
                        let secParse = JSON.parse(sr.response)
                        let sum = 0;
                        for (let j = 0; j < secParse.stat.length; j++) {
                            sum += secParse.stat[j].votes;
                        }
                        for (let j = 0; j < secParse.stat.length; j++) {
                            document.querySelector('.card').insertAdjacentHTML("afterbegin",
                                '<p class="poll__answer"></p>')
                            document.querySelector("p").textContent = secParse.stat[j].answer + ':';
                            document.querySelector("p").textContent += (100 * secParse.stat[j].votes / sum).toFixed(2) + "%"
                        }
                    }
                })
                sr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                sr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                sr.send(`vote=${pars.id}&answer=${i}`);
            })
        }
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send('');