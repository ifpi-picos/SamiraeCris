const campoCep = document.getElementById('cep');
campoCep.getElementById('cep').addEventListener('blur', function() {
    consultaEnderecoPorCep(campoCep.value);
});

function consultaEnderecoPorCep(cep){
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(function(response){
            response.json().then(function(endereco){
                console.log(endereco);

            })

        }).catch(function (erro){
            console.error(erro);
        })
}
