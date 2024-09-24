function pesquisa(){
    var name = document.getElementById('txtnome')
    var res = document.getElementById('resultado')
    var secao = document.getElementById('secao')

    if(name.value ==''){
        window.alert('[ERRO] preencha o campo para obter a resposta')
    } else if(name.value.trim().toLowerCase() =='tainar'){
        var img = document.createElement('img')
        img.setAttribute ('src', 'foto-namorada.png')
        res.innerHTML = `<p>Nome:<b>${name.value}</b></p>
        <p>Idade: <b>28 Anos</p></b>
        <p>Altura: <b>1,80</p></b>
        <p>Profissão: <b>Analista de IA</p></b>`
        res.appendChild(img)
        res.style.boxShadow = '#000000' 
        secao.style.background = '#e83180d4'
        document.body.style.background = '#e86ea3'

    } else if (name.value.trim().toLowerCase() =='amadeu'){
        var img = document.createElement('img')
        img.setAttribute ('src', 'foto-pai.png')
        res.innerHTML = `<p>Nome:<b>${name.value}</b></p>
        <p>Idade: <b>45 Anos</p></b>
        <p>Altura: <b>1,70</p></b>
        <p>Profissão: <b>Operador Industrial</p></b>`
        res.appendChild(img)
        res.style.boxShadow = '#8600fb' 
        secao.style.background = '#ffffff'
        document.body.style.background = '#24c474'

    } else if (name.value.trim().toLowerCase() =='renata'){
        var img = document.createElement('img')
        img.setAttribute ('src', 'foto-mae.png')
        res.innerHTML = `<p>Nome:<b>${name.value}</b></p>
        <p>Idade: <b>49 Anos</p></b>
        <p>Altura: <b>1,75</p></b>
        <p>Profissão: <b>Cozinheira</p></b>`
        res.appendChild(img)
        res.style.boxShadow = '#8600fb' 
        secao.style.background = '#ffffff'
        document.body.style.background = '#24c474'

    }else if (name.value.trim().toLowerCase() =='marcelo'){
        var img = document.createElement('img')
        img.setAttribute ('src', 'foto-irmao.png')
        res.innerHTML = `<p>Nome:<b>${name.value}</b></p>
        <p>Idade: <b>26 Anos</p></b>
        <p>Altura: <b>1,85</p></b>
        <p>Profissão: <b>Mecânico Industrial</p></b>`
        res.appendChild(img)
        res.style.boxShadow = '#8600fb' 
        secao.style.background = '#ffffff'
        document.body.style.background = '#24c474'

    } else if (name.value.trim().toLowerCase() =='beatriz'){
        var img = document.createElement('img')
        img.setAttribute ('src', 'foto-irma.png')
        res.innerHTML = `<p>Nome:<b>${name.value}</b></p>
        <p>Idade: <b>18 Anos</p></b>
        <p>Altura: <b>1,77</p></b>
        <p>Profissão: <b>Atendente</p></b>`
        res.appendChild(img)
        res.style.boxShadow = '#8600fb' 
        secao.style.background = '#ffffff'
        document.body.style.background = '#24c474'
        
    } else {
        res.innerHTML = `O Moyses não conhece voce!`
        res.style.boxShadow = '#ff0000'
        document.body.style.background = '#ff0000'
    }
}
  