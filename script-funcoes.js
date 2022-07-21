//FUNÇAO DE ATUALIZAR O SELECT 

function atualizarSelect() {
    $("#div_lista").html('');
    let vdiv = '';
    let select = document.querySelector('#selecao');
    let optionValue = select.options[select.selectedIndex];
    let value = optionValue.value;

    if (value == 2) {
      for (let index = 0; index < 10; index++) {
        vdiv = get_div_em_aberto(index, 100, 20, '12/12/2022', '10/01/2022', '1255/01', 0, 'Dinheiro', '');
        $('#div_lista').append(vdiv);
      }
    } else if (value == 3) {
      window.location.href = "contas-quitadas.html";
    } else if (value == 4) {
      window.location.href = "contas-canceladas.html";
    } else if (value == 5) {
      window.location.href = "contas-pag-canceladas.html";
    }

    //consultafinanceiro()
  }

  //FUNÇÃO MOSTRAR CONTAS EM ABERTO
  function get_div_em_aberto(id, v_valorresta, v_valororiginal, v_dtvencimento, v_dtemissao, v_chaveprc, v_valorpago, v_forma_pag, v_contrato) {    
    return '<div class="card border-dark mb-2 m-1 flex-wrap card-total" style="max-width: 20rem;">' +
      '<div class="card-header bg-primary d-flex justify-content-between valor">' +
      '<div class="form-check d-flex align-items-center">' +
      ' <input class="form-check-input bg-dark" type="checkbox" value="" id="Checkbox1">' +
      '</div>' +
      '<div class="card-cima d-flex align-items-center">' +
      '<p class="card-text">Vencimento:<span>' + v_dtvencimento + '</span></p>' +
      '</div>' +
      '<div class="card-cima d-flex align-items-center">' +
      '  <p>Resta:<span>' + v_valorresta + '</span></p>' +
      '</div>' +

      '</div>' +
      '<div class="card-body text-dark card-edit ">' +
      '<div class="d-flex justify-content-between">' +
      '<div class="text-center">' +
      '<p class="card-text">Emissão: <span>' + v_dtemissao + '</span></p>' +
      '</div>' +
      '<div class="text-center mb-1">' +
      '<p class="card-text">Valor: <span>' + v_valororiginal + '</span></p>' +
      '</div>' +
      '</div>' +
      '<div class="d-flex justify-content-between">' +
      '<div class="text-center">' +
      '<p class="card-text">Controle/Prc: <span>' + v_chaveprc + '</span></p>' +
      '</div>' +
      '<div class="text-center">' +
      '<p class="card-text">Pago:<span>' + v_valorpago + '</span></p>' +
      '</div>' +
      '</div>' +
      '<div class="d-flex justify-content-between">' +
      '<div class="text-center">' +
      '<p class="card-text">F. Pag:<span>' + v_forma_pag + '</span></p>' +
      '</div>' +
      '<div class="text-center">' +
      '<p class="card-text">Contrato:<span>' + v_contrato + '</span></p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="d-flex justify-content-evenly flex-wrap  m-1">' +

      '<a class="icon-bt" style="width:50px;" href="#" title="Dar Baixa" data-bs-toggle="modal" data-bs-target="#modalpagar"><svg xmlns="http://www.w3.org/2000/svg"' +
      'width="20" height="20" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">' +
      '<path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />' +
      '<path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />' +
      '<path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />' +
      '<path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />' +
      '</svg><br>Pagar</a>' +

      /*inicio Modal  botão PAGAR*/
      '<div class="modal fade" id="modalpagar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
      '<div class="modal-dialog modal-dialog-centered">' +
      '<div class="modal-content">' +
      '<div class="modal-header bg-primary"  style="color:white;">' +
      '<h5 class="modal-title" id="exampleModalLabel">Recebimento - Por Parcela</h5>' +
      '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
      '</div>' +
      '<div class="modal-body">' +
      '<div class="container text-center">' +
      '<div>' +
      '<h5>Valor a receber</h5>' +
      '</div>' +
      '<div><h4>R$ 150,00</h4></div>' +
      '</div>' +
      '<div class="container mt-3 pt-3">' +
      '<select class="form-select mb-2" aria-label="Default select example">' +
      '<option selected>Forma de Pagamento</option>' +
      '<option value="1">Dinheiro</option>' +
      '<option value="2">Cheque</option>'+
    '<option value="3">Cartão</option>' +
      '<option value="4">Transferência Bancario</option>' +
      '</select>' +
      '</div>' +
      '<div class="container">' +
      '<form class="row g-3 needs-validation" novalidate>' +
      '<div class="col-md-3">' +
      '<label for="validationCustom01" class="form-label">Juros</label>' +
      '<input type="text" class="form-control" id="validationCustom01" value="0,00" required>' +
      '</div>' +
      '<div class="col-md-3">' +
      '<label for="validationCustom02" class="form-label">Desconto</label>' +
      '<input type="text" class="form-control" id="validationCustom02" value="0,00" required>' +
      '</div>' +
      '<div class="col-md-3">' +
      '<label for="validationCustom01" class="form-label">Data</label>'+
    '<input type="data" class="form-control" id="validationCustom01" value="07/06/2022" required>' +
      '</div>' +
      '<div class="col-md-3">' +
      '<label for="validationCustom02" class="form-label">Valor</label>' +
      '<input type="text" class="form-control" id="validationCustom02" value="0,00" required>' +
      '</div>' +
      '<div class="mb-3">' +
      '<label for="message-text" class="col-form-label">Obs:</label>' +
      '<textarea class="form-control" id="message-text"></textarea></div>' +
      '</form>' +
      '</div>' +
      '</div>' +
      '<div class="modal-footer">' +
      '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>' +
      '<button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16"><path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg> Pagar</button></div>'+
      '</div>' +
      '</div>' +
      '</div>' +
      /*Fim Modal Pagar*/

      '<a class="icon-bt" style="width:50px;" href="cobranca.html" title="Cobrança"  data-bs-toggle="modal" data-bs-target="#ModalCobranca">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">' +
      '<path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />' +
      '</svg><br>Cobrança</a>' +

      /*Inicio Modal Cobrança*/
          '<div class="modal fade" id="ModalCobranca" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">'+
            '<div class="modal-dialog modal-dialog-centered">'+
              '<div class="modal-content">'+
                '<div class="modal-header bg-primary" style="color:white;">'+
                  '<h5 class="modal-title" id="exampleModalToggleLabel">Enviar Cobrança</h5>'+
                  '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                '</div>'+
                '<div class="modal-body row justify-content-center flex-wrap">'+
                  '<a class="icon-bt" style="width:50px;" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" href="#ModalEmail" role="button" title="Enviar link com 3 formas de pag. Boleto/Pix/Cartão"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>'+
                  '</svg><br>E-mail</a>'+
                  '<a class="icon-bt" style="width:50px;" href="#" title="Boleto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16"><path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>'+
                  '</svg><br>Boleto</a>'+
                  '<a class="icon-bt" style="width:50px;" href="#" title="Pix"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-diamond-fill" viewBox="0 0 16 16"><path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>'+
                  '</svg><br>Pix</a>'+
                  '<a class="icon-bt" style="width:50px;" href="#" title="Imprimir"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16"><path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/><path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>'+
                  '</svg><br>Imprimir</a>'+
                '</div>'+
                '<div class="modal-footer">'+
                  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          /*Inicio Modal função e-mail*/
          '<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">'+
            '<div class="modal-dialog modal-dialog-centered">'+
              '<div class="modal-content">'+
                '<div class="modal-header bg-primary" style="color:white;">'+
                  '<h5 class="modal-title" id="exampleModalToggleLabel2">Por E-mail</h5>'+
                  '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                '</div>'+
                '<div class="modal-body">'+
                  '<form>'+
                    '<div class="mb-3">'+
                      '<label for="exampleInputEmail1" class="form-label">E-mail:</label>'+
                      '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="digite seu e-mail">'+
                      '<div id="emailHelp" class="form-text">Enviar cobrança Boleto/Cartão/Pix.</div>'+
                    '</div>'+
                  '</form>'+
                '</div>'+
                '<div class="modal-footer">'+
                  '<button type="submit" class="btn btn-primary">Enviar</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+  
          /*Fim Modal função e-mail*/        
          /*Fim Modal Cobrança*/

      '<a class="icon-bt" data-bs-toggle="collapse" href="#collapseCard_' + id + '" role="button" aria-expanded="false" aria-controls="collapseExample" style="width:50px;" title="Outras opções"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-terminal-plus" viewBox="0 0 16 16">' +
      '<path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" />' +
      '<path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" /></svg><br>Outras</a>' +

      '<a class="icon-bt" style="width:50px;" href="#" title="Alterar"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" /></svg><br>Alterar</a>' +
      '<a class="botao-excluir" style="width:50px;" href="#" title="Cancelar"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"> <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" /></svg>Cancelar</a>' +
      '</div>' +

      /*inicio div-função outras*/
      '<div class="collapse" id="collapseCard_' + id + '">' +
      '<div class="card card-body m-0 p-1">' +
      '<div class="d-flex justify-content-center flex-wrap">' +
      '<a class="icon-bt" style="width:50px;" href="#" title="Produtos"><svg xmlns="http://www.w3.org/2000/svg"' +
      'width="20" height="20" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">' +
      '<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />' +
      '</svg>Produtos</a>' +

      '<a class="icon-bt" style="width:50px;" href="carne.html" title="Carnê">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"' +
      'class="bi bi-card-checklist" viewBox="0 0 16 16">' +
      '<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />' +
      '<path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />' +
      '</svg><br> Carnê</a>' +

      '<a class="icon-bt" style="width:50px;" href="promissoria.html" title="Promissória">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16"><path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" /><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" /> </svg>Promissória</a>' +

      '<a class="icon-bt" style="width:50px;" href="#" title="Consultar Pagamentos">' + '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"' +
      'viewBox="0 0 16 16">' +
      '<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />' +
      '</svg>Pagamentos</a>' +

      
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

 
  function get_div_canceladas() {

}