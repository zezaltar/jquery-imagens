$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereconovaimagem = $('#endereco-imagem-nova').val();
        const novoitem = $('<li style="display: none"> </li>');
        $(`<img src = "${endereconovaimagem}" />`).appendTo(novoitem);
        $(`
        <div class="overlay-imagem-link ">
            <a href ="${endereconovaimagem}" target="_blank" tittle ="Ver imagem em tamanho real"/>
                Ver imagem em tamanho real
        </div>
        `).appendTo(novoitem);
        $(novoitem).appendTo('ul');
        $(novoitem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })

})

