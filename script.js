//otak bot
function comp(){
    let computer = Math.floor(Math.random()*10);
    let bot = "";
    if(computer > 1 && computer < 5){
       return bot = "gunting";
    }
    if(computer > 6 && computer < 10){
        return bot = "batu";
    }else{
        return bot = "kertas";
    }
}   
//player vs bot
function rules(player, lawan){
    let total = "";
    if(player == lawan ){
       return total = "SERI";
    } 
    if(player == "gunting"){
       return total = lawan == "kertas" ? "MENANG" : "KALAH";
    }
    if(player == "batu"){
        return total = lawan == "gunting" ? "MENANG" : "KALAH";
    }
    if(player == "kertas"){
        return total = lawan == "batu" ? "MENANG" : "KALAH";
    }
}
//button play
const button = document.querySelectorAll('button')
button.forEach(function(play){
    play.addEventListener('click', function(){
        const hilMulai = document.getElementById('mulai');
        hilMulai.style.display = 'none';
        const pilPlayer = play.className;
        const pilComp = comp()
        let hasil = rules(pilPlayer, pilComp)
        console.log("ini comp "+pilComp);
        console.log("ini player "+pilPlayer);
        // tampilan hasil
        const tampilan = document.getElementById('tampilan-awal');
        tampilan.innerHTML = hasil;
        //tampilan pilihan
        const tampilanComp = document.getElementById('tampilan-comp');
        tampilanComp.innerHTML = `pilihan computer adalah ${pilComp} `;
        const tampilanPlayer = document.getElementById('tampilan-player');
        tampilanPlayer.innerHTML = `pilihanmu adalah ${pilPlayer}`;
    })
})
 // tampilan.innerHTML = hasil;