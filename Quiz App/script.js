const questions=[
    {
        'Que':"What is Full Form of HTML?",
        'a': "HyperText MarkUP Language",
        'b': "HyperText MarkDown Language",
        'c': "Hitler Tank Missile LCH",
        'd': "Honey Tummy Money Lunny",
        'Correct': "a"
    },
    {
        'Que':"What is Full Form of HTML?",
        'a': "HyperText MarkUP Language",
        'b': "HyperText MarkDown Language",
        'c': "Hitler Tank Missile LCH",
        'd': "Honey Tummy Money Lunny",
        'Correct': "a"
    },
    {
        'Que':"What is Full Form of HTML?",
        'a': "HyperText MarkUP Language",
        'b': "HyperText MarkDown Language",
        'c': "Hitler Tank Missile LCH",
        'd': "Honey Tummy Money Lunny",
        'Correct': "a"
    }
]
let index=0
let total=questions.length
let correct=0, wrong=0
const quesBox=document.getElementById('ques-Box')
const optionInputs=document.querySelectorAll("input[type='radio']")
const loadQuestion=(index)=>{
    if(index==total){
        return end()
    }
    reset()
    const data=questions[index]
    quesBox.innerText=`${index+1}.${data.Que}`
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;


}

const getAnswer=()=>{
    let inp
    optionInputs.forEach(
        (inputEl)=>{
            if(inputEl.checked){
                inp=inputEl.value
            }
        }
    )
    
    return inp
    
}
document.querySelector('.btn').addEventListener(
    "click",
    function(){
        const data=questions[index]
        const inp=getAnswer()
        if(inp===data.Correct){
            correct++
    
        }
        else{
            wrong++
        }
        index++
        loadQuestion(index)
    }
)


const end=()=>{
    document.getElementById('box').innerHTML=`
    <h3>Thank You for Playing the Quiz!!!</h3>
    <h2>You Scored:${correct}/${total}</h2>
    `
}
const reset=()=>{
    optionInputs.forEach(
        (inputEl)=>{
            inputEl.checked=false;
        }
    
    )
    





}



loadQuestion(index);