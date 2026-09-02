function calcular() {

    let d_ani = document.getElementById("dia").value;
    let m_ani = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;

    if (d_ani <= 0 || isNaN(d_ani)){
        alert("Dia inválido, dia está vazio ou não é númerico.");
        return;
    }
    if (m_ani <= 0 || isNaN(m_ani)){
        alert("Mês inválido, mês está vazio ou não é númerico.");
        return;
    }

    if (ano <= 0 || isNaN(ano)){
        alert("Ano inválido, ano está vazio ou não é númerico.");
        return;
    }

    if (((d_ani >= 20) && (m_ani == 1)) || ((d_ani <= 18) && (m_ani == 2)))
        document.images["signo"].src = "src/assets/images/aquario.png.jpeg"

    else if (((d_ani >= 19) && (m_ani == 2)) || ((d_ani <= 20) && (m_ani == 3)))
       document.images["signo"].src = "src/assets/images/peixes.png.jpeg"
    else if (((d_ani >= 21) && (m_ani == 3)) || ((d_ani <= 19) && (m_ani == 4)))
        document.images["signo"].src = "src/assets/images/aries.png.jpeg"

    else if (((d_ani >= 20) && (m_ani == 4)) || ((d_ani <= 20) && (m_ani == 5)))
       document.images["signo"].src = "src/assets/images/touro.png.jpeg"

    else if (((d_ani >= 21) && (m_ani == 5)) || ((d_ani <= 20) && (m_ani == 6)))
        document.images["signo"].src = "src/assets/images/gemos.png.jpeg"

    else if (((d_ani >= 21) && (m_ani == 6)) || ((d_ani <= 22) && (m_ani == 7)))
        document.images["signo"].src = "src/assets/images/cancer.png.jpeg"

    else if (((d_ani >= 23) && (m_ani == 7)) || ((d_ani <= 22) && (m_ani == 8)))
        document.images["signo"].src = "src/assets/images/leao.png.jpeg"

    else if (((d_ani >= 23) && (m_ani == 8)) || ((d_ani <= 22) && (m_ani == 9)))
        document.images["signo"].src = "src/assets/images/virgem.png.jpeg"

    else if (((d_ani >= 23) && (m_ani == 9)) || ((d_ani <= 22) && (m_ani == 10)))
        document.images["signo"].src = "src/assets/images/libra.png.jpeg"

    else if (((d_ani >= 23) && (m_ani == 10)) || ((d_ani <= 21) && (m_ani == 11)))
        document.images["signo"].src = "src/assets/images/escorpiao.png.jpeg"

    else if (((d_ani >= 22) && (m_ani == 11)) || ((d_ani <= 21) && (m_ani == 12)))
        document.images["signo"].src = "src/assets/images/sagitario.png.jpeg"
    
    else
        document.images["signo"].src = "src/assets/images/capricornio.png.jpeg"
} 