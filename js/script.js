$(document).ready(function() {
	$('voltar-topo').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

function voltarTopo() {
    $("html, body").animate({ scrollTop: "0" }, 200);
} 


function buscarRepositorios() {
    const usuario = 'RafaelPereira7L'
    document.getElementById("repositoriosGit");

    fetch(`https://api.github.com/users/${usuario}/repos`)
        .then(response => response.json().then(detalhes => {
            console.log(detalhes)
            document.getElementById('nomeRepositorio').innerHTML = detalhes[2].name;
            document.getElementById('descricaoRepositorio').innerHTML = 'Descrição: ' + detalhes[2].description;
            document.getElementById('repositorioAtualizadoEm').innerHTML = 'Atualizado em: ' + detalhes[2].updated_at;
            var urlRepositorio = document.getElementById('linkRepositorio');
            urlRepositorio.href = `${detalhes[2].html_url}`;
        }))


    fetch(`https://api.github.com/users/${usuario}/repos`)
        .then(response => response.json().then(detalhes => {
            console.log(detalhes)
            document.getElementById('nomeRepositorio2').innerHTML = detalhes[1].name;
            document.getElementById('descricaoRepositorio2').innerHTML = 'Descrição: ' + detalhes[1].description;
            document.getElementById('repositorioAtualizadoEm2').innerHTML = 'Atualizado em: ' + detalhes[1].updated_at;
            var urlRepositorio = document.getElementById('linkRepositorio2');
            urlRepositorio.href = `${detalhes[1].html_url}`;
        }))

    fetch(`https://api.github.com/users/${usuario}/repos`)
    .then(response => response.json().then(detalhes => {
        console.log(detalhes)
        document.getElementById('nomeRepositorio1').innerHTML = detalhes[6].name;
        document.getElementById('descricaoRepositorio1').innerHTML = 'Descrição: ' + detalhes[6].description;
        document.getElementById('repositorioAtualizadoEm1').innerHTML = 'Atualizado em: ' + detalhes[6].updated_at;
        var urlRepositorio = document.getElementById('linkRepositorio1');
        urlRepositorio.href = `${detalhes[6].html_url}`;
    }))   
}



function detalhesGit() {
    const usuario = 'RafaelPereira7L'
    document.getElementById('perfil');
    fetch(`https://api.github.com/users/${usuario}`)
        .then(response => response.json().then(data => {
            console.log(data)
            document.getElementById('nomeperfil').innerHTML = data.name;
            document.getElementById('bio').innerHTML = data.bio;
            document.getElementById('seguidores').innerHTML = data.followers + " seguidores.";

            var urlNome = document.getElementById('nomeGit');
            urlNome.href = `https://github.com/${usuario}`;

            var seguidores = document.getElementById('urlSeguidores');
            seguidores.href = `https://github.com/${usuario}?tab=followers`;

            var imgP = document.getElementById('imgperfil');
            imgP.src = `${data.avatar_url}`;


            var maisRepositorios = document.getElementById('todosRepositorios');
            maisRepositorios.href = `https://github.com/${usuario}?tab=repositories`;

            var botaoRep = document.getElementById('btnRepositorios');
            botaoRep.href = `https://github.com/${usuario}?tab=repositories`;
            

            var maisProjetos = document.getElementById('maisProjetos');
            maisProjetos.href= `https://github.com/${usuario}`;

            var perfil = document.getElementById('perfil');
            perfil.href= `https://github.com/${usuario}`;
        }))
}


$(document).ready(function () {

    var user = ''

    $("#input_container").submit(function (event) {
        event.preventDefault()
        var username = $("#pesquisar").val()

        pesquisarUsuarios(username)


    })

    function pesquisarUsuarios(username) {
        $("#resultado").empty()

        $.get("https://api.github.com/search/users?q=" + username + "+in:user&per_page=1", function (log) {

            console.log(log);


            log.items.forEach(item => {
                fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json().then(infos => {

                user = `<a class="linkPerfil" target="_blank" href="${item.html_url}"><img class="img-thumbnail ml-4" width="200" height="200" id="avatarResultado" src="${item.avatar_url}"/><p class="nomeUsuario">${infos.name}</p></a><p class="infosUsuario">BIO: ${infos.bio}</p><p class="infosUsuario">${infos.followers} seguidores.</p><p class="infosUsuario">${infos.public_repos} repositórios públicos.</p><hr>`

                $("#resultado").append(user)
            }))
            });
        })
    }

});
