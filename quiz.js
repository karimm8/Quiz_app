let data = []

fetch('data.json')

.then(response => response.json())
.then(result => {
    data = result
    afficherData()
})

afficherData = () => {
    star()
}

const qst = document.getElementById('qst')
const score = document.getElementById('score')
const answers = document.getElementById('answers')
const num_qst = document.getElementById('num_qts')
const progress = document.getElementById('progress')
const pro = document.getElementById('pro')
const res = document.getElementById('res')
const final_score = document.getElementById('final_score')
const observe = document.getElementById('observe')
const header = document.getElementById('header')
const content = document.getElementById('content')
const footer = document.getElementById('footer')

let index,num_score,val_pro

star = () => {
    header.classList.add('active')
    content.classList.add('active')
    progress.classList.add('active')
    footer.classList.add('active')
    num_score = 0
    val_pro = 0
    index = 0
    score.textContent = num_score
    pro.setAttribute('value',val_pro)
    show()
}

show = () => {
    const current = data[index]
    qst.textContent = current.question
    num_qst.textContent = index + 1
    answers.innerHTML = ''
    current.options.forEach(element => {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.textContent = element
        answers.appendChild(btn)
        btn.addEventListener('click',selectButton)
    });
    return current.answer
}

selectButton = (e) => {
    const selectAnswer = e.currentTarget
    // const isCorrect = selectAnswer.
    console.log(selectAnswer);
    const answerQts = data[index].answer
    console.log(answerQts);
    
    const btns = document.querySelectorAll('.btn')
    btns.forEach((b)=>{
        if(b.textContent == answerQts){
            b.classList.add('correct')
        }
    })
    let test = selectAnswer.textContent != answerQts
      if(test){
            selectAnswer.classList.add('incorrect')
        }

    if(!test){
        num_score++
        val_pro = val_pro + 10
        score.textContent = num_score
        pro.setAttribute('value',val_pro)
    }
    setTimeout(() => {
        index++
        if(index<data.length){
            show()
        }
        else{
            result()
        }
    }, 1000);
}

result = () => {
    res.classList.add('active')
    header.classList.remove('active')
    content.classList.remove('active')
    progress.classList.remove('active')
    footer.classList.remove('active');

    if(num_score>5 && num_score<8){
        observe.textContent = 'Good'
        final_score.textContent = `${num_score}/10`
    }
    else if(num_score>=8){
         observe.textContent = 'Very Good'
        final_score.textContent = `${num_score}/10`
    }
    else{
         observe.textContent = 'lose'
        final_score.textContent = `${num_score}/10`
    }
}

restart = () => {
    res.classList.remove('active')
    star()
}
