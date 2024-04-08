function carregarAnoDoCopyright() {
    var ano = new Date().getFullYear().toString();
    var anoCorrente = document.getElementById('anoCorrente');
    anoCorrente.innerText = ano;
}
function autoload() {
    carregarAnoDoCopyright();
}
addEventListener('load',autoload);