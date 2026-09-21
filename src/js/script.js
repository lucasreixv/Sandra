var dia_semana = new Array();
dia_semana[0] = "um domingo";
dia_semana[1] = "uma segunda-feira";
dia_semana[2] = "uma terça-feira";
dia_semana[3] = "uma quarta-feira";
dia_semana[4] = "uma quinta-feira";
dia_semana[5] = "uma sexta-feira";
dia_semana[6] = "um sábado";

var nome_mes = new Array();
nome_mes[0] = "Janeiro";
nome_mes[1] = "Fevereiro";
nome_mes[2] = "Março";
nome_mes[3] = "Abril";
nome_mes[4] = "Maio";
nome_mes[5] = "Junho";
nome_mes[6] = "Julho";
nome_mes[7] = "Agosto";
nome_mes[8] = "Setembro";
nome_mes[9] = "Outubro";
nome_mes[10] = "Novembro";
nome_mes[11] = "Dezembro";

var nome_signo = new Array();
nome_signo[0] = "Aquário";
nome_signo[1] = "Peixes";
nome_signo[2] = "Áries";
nome_signo[3] = "Touro";
nome_signo[4] = "Gêmeos";
nome_signo[5] = "Câncer";
nome_signo[6] = "Leão";
nome_signo[7] = "Virgem";
nome_signo[8] = "Libra";
nome_signo[9] = "Escorpião";
nome_signo[10] = "Sagitário";
nome_signo[11] = "Capricórnio";

var imagem_signo = new Array();
imagem_signo[0] = "src/assets/images/aquario.png.jpeg";
imagem_signo[1] = "src/assets/images/peixes.png.jpeg";
imagem_signo[2] = "src/assets/images/aries.png.jpeg";
imagem_signo[3] = "src/assets/images/touro.png.jpeg";
imagem_signo[4] = "src/assets/images/gemos.png.jpeg";
imagem_signo[5] = "src/assets/images/cancer.png.jpeg";
imagem_signo[6] = "src/assets/images/leao.png.jpeg";
imagem_signo[7] = "src/assets/images/virgem.png.jpeg";
imagem_signo[8] = "src/assets/images/libra.png.jpeg";
imagem_signo[9] = "src/assets/images/escorpiao.png.jpeg";
imagem_signo[10] = "src/assets/images/sagitario.png.jpeg";
imagem_signo[11] = "src/assets/images/capricornio.png.jpeg";

function Calcular() {

    var imgSigno = document.getElementById("imgSigno");
    var txtSigno = document.getElementById("nomeSigno");

    var d_ani = document.getElementById("dia").value;
    var m_ani = document.getElementById("mes").value;
    var a_ani = document.getElementById("ano").value;

    if (d_ani <= 0 || isNaN(d_ani) || d_ani > 31) {
        alert("Dia inválido, dia está vazio ou não é númerico ou o dia está ultrapassando o 31.");
        location.reload();
        return;
    }
    else {
        d_ani = parseInt(d_ani);
    }

    if (m_ani < 1 || isNaN(m_ani) || m_ani > 12) {
        alert("Mês inválido, mês está vazio ou não é númerico ou o mes passou de 12.");
        location.reload();
        return;
    }
    else {
        m_ani = parseInt(m_ani);
    }

    if (a_ani <= 0 || isNaN(a_ani) || a_ani.length != 4) {
        alert("Ano inválido, ano está vazio ou não é númerico ou não pode maior que 4 dígitos.");
        location.reload();
        return;
    }
    else {
        a_ani = parseInt(a_ani);
    }

    var ehBissexto = (a_ani % 4 == 0 && a_ani % 100 != 0) || (a_ani % 400 == 0);

    if (m_ani == 2) {
        if (ehBissexto && (d_ani < 1 || d_ani > 29)) {
            alert("É ano bissexto! O dia para Fevereiro deve ser entre 1 e 29.");
            location.reload();
            return;
        } else if (!ehBissexto && (d_ani < 1 || d_ani > 28)) {
            alert("Não é ano bissexto! O dia para Fevereiro deve ser entre 1 e 28.");
            location.reload();
            return;
        }
    }
    else if (m_ani == 4 || m_ani == 6 || m_ani == 9 || m_ani == 11) {
        if (d_ani < 1 || d_ani > 30) {
            alert("Este mês possui apenas 30 dias!");
            location.reload();
            return;
        }
    }
    else {
        if (d_ani < 1 || d_ani > 31) {
            alert("Este mês possui no máximo 31 dias!");
            location.reload();
            return;
        }
    }

    var hoje = new Date();

    var d_hoj = hoje.getDate();
    var m_hoj = hoje.getMonth() + 1;
    var a_hoj = hoje.getFullYear();

    if ((d_hoj == d_ani) && (m_hoj == m_ani)) {
        document.getElementById("mensagem").style.visibility = "visible";
        document.getElementById("mensagem").innerHTML = "P A R A B É N S...";
    }

    var idade = a_hoj - a_ani;

    if (m_ani > m_hoj)
        idade = idade - 1;
    else if ((m_ani == m_hoj) && (d_ani > d_hoj))
        idade = idade - 1;

    document.getElementById("Idade").value = idade;

    hoje.setFullYear(a_ani);
    hoje.setMonth(m_ani - 1);
    hoje.setDate(d_ani);

    document.getElementById("txtsema").value = dia_semana[hoje.getDay()];
    document.getElementById("mesnas").value = nome_mes[m_ani - 1];

    var indiceSigno;

    if (((d_ani >= 20) && (m_ani == 1)) || ((d_ani <= 18) && (m_ani == 2)))
        indiceSigno = 0; // Aquário
    else if (((d_ani >= 19) && (m_ani == 2)) || ((d_ani <= 20) && (m_ani == 3)))
        indiceSigno = 1; // Peixes
    else if (((d_ani >= 21) && (m_ani == 3)) || ((d_ani <= 19) && (m_ani == 4)))
        indiceSigno = 2; // Áries
    else if (((d_ani >= 20) && (m_ani == 4)) || ((d_ani <= 20) && (m_ani == 5)))
        indiceSigno = 3; // Touro
    else if (((d_ani >= 21) && (m_ani == 5)) || ((d_ani <= 20) && (m_ani == 6)))
        indiceSigno = 4; // Gêmeos
    else if (((d_ani >= 21) && (m_ani == 6)) || ((d_ani <= 22) && (m_ani == 7)))
        indiceSigno = 5; // Câncer
    else if (((d_ani >= 23) && (m_ani == 7)) || ((d_ani <= 22) && (m_ani == 8)))
        indiceSigno = 6; // Leão
    else if (((d_ani >= 23) && (m_ani == 8)) || ((d_ani <= 22) && (m_ani == 9)))
        indiceSigno = 7; // Virgem
    else if (((d_ani >= 23) && (m_ani == 9)) || ((d_ani <= 22) && (m_ani == 10)))
        indiceSigno = 8; // Libra
    else if (((d_ani >= 23) && (m_ani == 10)) || ((d_ani <= 21) && (m_ani == 11)))
        indiceSigno = 9; // Escorpião
    else if (((d_ani >= 22) && (m_ani == 11)) || ((d_ani <= 21) && (m_ani == 12)))
        indiceSigno = 10; // Sagitário
    else
        indiceSigno = 11; // Capricórnio

    imgSigno.src = imagem_signo[indiceSigno];
    txtSigno.textContent = nome_signo[indiceSigno];

    imgSigno.style.display = "block";
}

function limpar() {
    let imgSigno = document.getElementById("imgSigno");

    imgSigno.src = "";
    imgSigno.style.display = "none";
    document.getElementById("nomeSigno").textContent = "";
}