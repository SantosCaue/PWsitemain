function corrigir(){
    let gabsn = 0;
    if(document.quiz.questao1[0].checked){
        gabsn = gabsn + 20
    }
    if(document.quiz.questao2[2].checked){
        gabsn = gabsn + 20
    }
    if(document.quiz.questao3[0].checked){
        gabsn = gabsn + 20
    }
    if(document.quiz.questao4[0].checked){
        gabsn = gabsn + 20
    }
    if(document.quiz.questao5[3].checked){
        gabsn = gabsn + 20
    }
    document.getElementById("result").style.border = "solid black 2px"

    if (gabsn === 100){
document.getElementById("result").innerHTML="Sua pontuação é de: " + gabsn + "/100 parabéns você deveria fazer a OBG"
}else if (gabsn >= 80){
document.getElementById("result").innerHTML="Sua pontuação é de: " + gabsn + "/100 muito bem você manja de geografia"
}else if(gabsn >=60){
document.getElementById("result").innerHTML="Sua pontuação é de: " + gabsn + "/100 seu conhecimento é ok mas dá pra melhorar"
}else if(gabsn >= 40){
document.getElementById("result").innerHTML="Sua pontuação é de: " + gabsn + "/100 tá precisando de umas aulinhas"
}else if (gabsn >= 20){
document.getElementById("result").innerHTML="Sua pontuação é de: " + gabsn + "/100 vamo voltar para escola?"
}else if(gabsn >= 0){
document.getElementById("result").innerHTML="Sua pontuação é de: " + gabsn + "/100 tem umas aulinha boas de geografia no fundamental pra ti"

}
}               