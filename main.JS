Time=[]
function Escalar(){
    var goleiro=document.getElementById("Goleiro").value
    var zagueiro1=document.getElementById("Zagueiro1").value
    var zagueiro2=document.getElementById("Zagueiro2").value
    var lateral1=document.getElementById("Lateral1").value
    var lateral2=document.getElementById("Lateral2").value
    var meiocampista1=document.getElementById("Meio-Campista1").value
    var meiocampista2=document.getElementById("Meio-Campista2").value
    var ponta1=document.getElementById("Ponta1").value
    var ponta2=document.getElementById("Ponta2").value
    var atacante1=document.getElementById("Atacante1").value
    var atacante2=document.getElementById("Atacante2").value
    Time.push(goleiro)
    Time.push(zagueiro1)
    Time.push(zagueiro2)
    Time.push(lateral1)
    Time.push(lateral2)
    Time.push(meiocampista1)
    Time.push(meiocampista2)
    Time.push(ponta1)
    Time.push(ponta2)
    Time.push(atacante1)
    Time.push(atacante2)
    Exibir()
}
function Exibir(){
    Time.sort()
    document.getElementById("Time").innerHTML=Time
}