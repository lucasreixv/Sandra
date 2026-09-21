var dia_semana = new Array();
dia_semana[0] = "um domingo";
dia_semana[1] = "uma segunda-feira";
dia_semana[2] = "uma terça-feira";
dia_semana[3] = "uma quarta-feira";
dia_semana[4] = "uma quinta-feira";
dia_semana[5] = "uma sexta-feira";
dia_semana[6] = "um sábado";

var nome_mes = new Array(); //vetor dinamico(matriz, arranjo): Array(metodo construtor/ função(): sem função usa [metodos contados])
nome_mes[0] = "Janeiro";
nome_mes[1] = "Fevereiro"; //indice(dentro conchetes: onde o indice que o usuario escrever, séra colocado o valor)
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

function Calcular() {

    var imgSigno = document.getElementById("imgSigno");

    var d_ani = document.getElementById("dia").value; // var(quando o valor pode ser alterado)
    var m_ani = document.getElementById("mes").value; // let(valor já adicionado)
    var a_ani = document.getElementById("ano").value; // const(quando o valor não muda)

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

    // validação do dia dentro do mês/ano informados (feita antes de qualquer cálculo)
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

    //depois de tudo verificado,instanciando o objeto Date() data do sistema		
    var hoje = new Date();

    var d_hoj = hoje.getDate(); //trouxe o dia do mês atual (do sistema)
    var m_hoj = hoje.getMonth() + 1; //trouxe o mes atual (do sistema) correspondente de 0 até 11
    var a_hoj = hoje.getFullYear(); //ano inteiro do sistema para cálculo da idade

    if ((d_hoj == d_ani) && (m_hoj == m_ani)) {
        document.getElementById("mensagem").style.visibility = "visible";
        document.getElementById("mensagem").innerHTML = "P A R A B É N S...";
    }

    //calculo da idade 
    var idade = a_hoj - a_ani;

    if (m_ani > m_hoj)
        idade = idade - 1;

    else if ((m_ani == m_hoj) && (d_ani > d_hoj))
        idade = idade - 1;

    document.getElementById("Idade").value = idade;

    /*carregando os valores do dia, mês e ano de aniversário, 
    nas posições correspondentes do objeto Date()*/

    hoje.setFullYear(a_ani);
    hoje.setMonth(m_ani - 1);
    hoje.setDate(d_ani);

    document.getElementById("txtsema").value = dia_semana[hoje.getDay()];
    document.getElementById("mesnas").value = nome_mes[m_ani - 1];

    if (((d_ani >= 20) && (m_ani == 1)) || ((d_ani <= 18) && (m_ani == 2)))
        imgSigno.src = "src/assets/images/aquario.png.jpeg";
    else if (((d_ani >= 19) && (m_ani == 2)) || ((d_ani <= 20) && (m_ani == 3)))
        imgSigno.src = "src/assets/images/peixes.png.jpeg";
    else if (((d_ani >= 21) && (m_ani == 3)) || ((d_ani <= 19) && (m_ani == 4)))
        imgSigno.src = "src/assets/images/aries.png.jpeg";
    else if (((d_ani >= 20) && (m_ani == 4)) || ((d_ani <= 20) && (m_ani == 5)))
        imgSigno.src = "src/assets/images/touro.png.jpeg";
    else if (((d_ani >= 21) && (m_ani == 5)) || ((d_ani <= 20) && (m_ani == 6)))
        imgSigno.src = "src/assets/images/gemos.png.jpeg";
    else if (((d_ani >= 21) && (m_ani == 6)) || ((d_ani <= 22) && (m_ani == 7)))
        imgSigno.src = "src/assets/images/cancer.png.jpeg";
    else if (((d_ani >= 23) && (m_ani == 7)) || ((d_ani <= 22) && (m_ani == 8)))
        imgSigno.src = "src/assets/images/leao.png.jpeg";
    else if (((d_ani >= 23) && (m_ani == 8)) || ((d_ani <= 22) && (m_ani == 9)))
        imgSigno.src = "src/assets/images/virgem.png.jpeg";
    else if (((d_ani >= 23) && (m_ani == 9)) || ((d_ani <= 22) && (m_ani == 10)))
        imgSigno.src = "src/assets/images/libra.png.jpeg";
    else if (((d_ani >= 23) && (m_ani == 10)) || ((d_ani <= 21) && (m_ani == 11)))
        imgSigno.src = "src/assets/images/escorpiao.png.jpeg";
    else if (((d_ani >= 22) && (m_ani == 11)) || ((d_ani <= 21) && (m_ani == 12)))
        imgSigno.src = "src/assets/images/sagitario.png.jpeg";
    else
        imgSigno.src = "src/assets/images/capricornio.png.jpeg";

    // Exibe a imagem quando o signo for calculado
    imgSigno.style.display = "block";
}



function limpar() {
    let imgSigno = document.images["signo"];
    
    // Esconde a imagem e remove a fonte
    imgSigno.src = "";
    imgSigno.style.display = "none";
}