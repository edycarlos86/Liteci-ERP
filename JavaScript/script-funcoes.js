//FUNÇAO DE ATUALIZAR O SELECT 

function atualizarSelect() {
    $("#div_lista").html('');
    let vdiv = '';
    let select = document.querySelector('#selecao');
    let optionValue = select.options[select.selectedIndex];
    let value = optionValue.value;

    if (value == 2) {
      for (let index = 0; index < 10; index++) {
        vdiv = get_div_em_aberto(index,index, 100, 20, '12/12/2022', '10/01/2022', '1255/01', 0, 'Dinheiro', '', 0, 0, '01/08/2022', 'pago na Liteci', 1050, 'Feijão Turquesa', 10, 6, 60,  '06/07/2022', '16:50:20', 1.00, 0);
        $('#div_lista').append(vdiv);
      }
    } else if (value == 3) {
      window.location.href = "contas-quitadas.html";
    } else if (value == 4) {
      for (let index = 0; index < 4; index++) {
        vdiv = get_div_canceladas('02/06/2021', 100, '15/05/2021', 100, 0, 'DINHEIRO', '1235/02', 1002, 'MACARRÃO LIMOEIRO', 4, 'LITCASH', 12345, 'VT6548543215498654', 'DESKTOP-54HB25', 'JÚNIOR', '15:02:35', '05/05/2021');
        $('#div_lista').append(vdiv);
      }
    } else if (value == 5) {
      window.location.href = "contas-pag-canceladas.html";
    }

    //consultafinanceiro()
  }

  

  //FUNÇÃO MOSTRAR CONTAS EM ABERTO
  function get_div_em_aberto(id, v_valorresta, v_valororiginal, v_dtvencimento, v_dtemissao, v_chaveprc, v_valorpago, v_forma_pag, v_contrato, v_juros, v_descontos, v_dtatual, v_obspagamento, v_coditem, v_descricaoitem, v_qtd, v_valorunitario, v_valortotal, v_dtpag, v_horapag, v_jurospag, v_descontopag) {    
    return /*Inicio Card*/'<div class="card border-dark mb-2 m-1 flex-wrap card-total" style="max-width: 20rem;">'+
      '<div class="card-header bg-primary d-flex justify-content-between valor">'+
        '<div class="form-check  d-flex align-items-center">'+
          '<input class="form-check-input bg-dark" type="checkbox" value="" id="Checkbox1">'+
        '</div>'+
        '<div class="card-cima d-flex align-items-center">'+
          '<p class="card-text">Vencimento: <span>' + v_dtvencimento + '</span></p>'+
        '</div>'+
        '<div class="card-cima d-flex align-items-center">'+
          '<p>Resta: <span>'+v_valorresta+'</span></p>'+
        '</div>'+
      '</div>'+
      '<div class="card-body text-dark card-edit ">'+
        '<div class="d-flex justify-content-between">'+
          '<div class="text-center">'+
            '<p class="card-text">Emissão: <span>'+v_dtemissao+'</span></p>'+
          '</div>'+
          '<div class="text-center mb-1">'+
            '<p class="card-text">Valor: <span>'+v_valororiginal+'</span></p>'+
          '</div>'+
        '</div>'+
        '<div class="d-flex justify-content-between">'+
          '<div class="text-center">'+
            '<p class="card-text">Controle/Prc: <span>'+v_chaveprc+'</span></p>'+
          '</div>'+
          '<div class="text-center">'+
            '<p class="card-text">Pago: <span>'+v_valorpago+'</span></p>'+
          '</div>'+
        '</div>'+
        '<div class="d-flex justify-content-between">'+
          '<div class="text-center">'+
            '<p class="card-text">F. Pag: <span>'+v_forma_pag+'</span></p>'+
          '</div>'+
          '<div class="text-center">'+
            '<p class="card-text">Contrato: <span>'+v_contrato+'</span></p>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="d-flex justify-content-evenly flex-wrap  m-1">'+

        '<a class="icon-bt" style="width:50px;" href="#" title="Dar Baixa" data-bs-toggle="modal"'+
          'data-bs-target="#ModalPagar"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">'+
            '<path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" /><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" /><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" /><path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" /></svg><br>Pagar</a>'+

        /*inicio Modal  botão PAGAR*/
        '<div class="modal fade" id="ModalPagar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalLabel">Recebimento - Por Parcela</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body">'+
                '<div class="container text-center">'+
                  '<div>'+
                    '<h5>Valor a receber</h5>'+
                  '</div>'+
                  '<div>'+
                    '<h4>'+v_valorresta+'</h4>'+
                  '</div>'+
                '</div>'+
                '<div class="container mt-3 pt-3">'+
                  '<select class="form-select mb-2" aria-label="Default select example">'+
                    '<option selected>Forma de Pagamento</option>'+
                    '<option value="1">Dinheiro</option>'+
                    '<option value="2">Cheque</option>'+
                    '<option value="3">Cartão</option>'+
                    '<option value="4">Transferência Bancario</option>'+
                  '</select>'+
                '</div>'+
                '<div class="container">'+
                  '<form class="row g-3 needs-validation" novalidate>'+
                    '<div class="col-md-3">'+
                      '<label for="validationCustom01" class="form-label">Juros</label>'+
                      '<input type="text" class="form-control" id="validationCustom01" value='+v_juros+' required>'+
                    '</div>'+
                    '<div class="col-md-3">'+
                      '<label for="validationCustom02" class="form-label">Desconto</label>'+
                      '<input type="text" class="form-control" id="validationCustom02" value='+v_descontos+' required>'+
                    '</div>'+
                    '<div class="col-md-4">'+
                      '<label for="validationCustom01" class="form-label">Data</label>'+
                      '<input type="data" class="form-control" id="validationCustom01" value='+v_dtatual+' required>'+
                    '</div>'+
                    '<div class="col-md-3">'+
                      '<label for="validationCustom02" class="form-label">Valor</label>'+
                      '<input type="text" class="form-control" id="validationCustom02" value='+v_valorresta+' required>'+
                    '</div>'+
                    '<div class="mb-3">'+
                      '<label for="message-text" class="col-form-label">Obs:</label>'+
                      '<textarea class="form-control" id="message-text">'+v_obspagamento+'</textarea>'+
                    '</div>'+
                  '</form>'+
                '</div>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>'+
                '<button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="25"'+
                    'height="25" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16"><path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" /><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" /></svg> Pagar</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim Modal Pagar*/

        '<a class="icon-bt" style="width:50px;" href="#" title="Cobrança" data-bs-toggle="modal"'+
          'data-bs-target="#ModalCobranca"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"'+
            'fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16"><path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" /></svg><br>Cobrança</a>'+


        /*Inicio Modal Cobrança*/
        '<div class="modal fade" id="ModalCobranca" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"'+
          'tabindex="-1">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalToggleLabel">Cobrança</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body d-flex justify-content-center flex-wrap">'+
                '<a class="icon-bt" style="width:50px;" data-bs-target="#ModalEmail" data-bs-toggle="modal"'+
                  'href="#ModalEmail" role="button" title="Enviar link com 3 formas de pag. Boleto/Pix/Cartão"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" /></svg><br>E-mail</a>'+
                '<a class="icon-bt" style="width:50px;" href="#" title="Boleto" data-bs-target="#ModalBoleto"'+
                  'data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16"><path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" /></svg><br>Boleto</a>'+
                '<a class="icon-bt" style="width:50px;" href="#" title="Pix" data-bs-toggle="modal"'+
                  'data-bs-target="#ModalPix"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-diamond-fill" viewBox="0 0 16 16"><path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z" /></svg><br>Pix</a>'+
                '<a class="icon-bt" style="width:50px;" href="#" title="Carnê" data-bs-target="#ModalCarne"'+
                  'data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" /><path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" /></svg><br> Carnê</a>'+
                '<a class="icon-bt" style="width:50px;" href="#" title="Promissória" data-bs-target="#ModalPromissoria" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16"><path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" /><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" /></svg>Promissória</a>'+
                '<a class="icon-bt" style="width:50px;" href="#" title="Imprimir"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16"><path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" /><path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" /></svg><br>Imprimir</a>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+

        /*Inicio Modal botão e-mail*/
        '<div class="modal fade" id="ModalEmail" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"'+
          'tabindex="-1">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalToggleLabel2">Cobrança/E-mail</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body">'+
                '<fieldset class="d-flex flex-wrap  border border-secundary">'+
                  '<legend class="text-center ">Selecione qual deseja enviar</legend>'+
                  '<div class="form-check form-switch m-1 fonte-pq">'+
                    '<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked-link">'+
                    '<label class="form-check-label" for="flexSwitchCheckChecked-link">Link cliente escolher Boleto/Cartão/Pix</label>'+
                  '</div>'+
                  '<div class="form-check form-switch m-1  fonte-pq">'+
                    '<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked-boleto">'+
                    '<label class="form-check-label" for="flexSwitchCheckChecked-boleto">Boleto</label>'+
                  '</div>'+
                  '<div class="form-check form-switch m-1 fonte-pq">'+
                    '<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked-pix">'+
                    '<label class="form-check-label" for="flexSwitchCheckChecked-pix">Pix</label>'+
                  '</div>'+
                  '<div class="form-check form-switch m-1 fonte-pq">'+
                    '<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked-cartao">'+
                    '<label class="form-check-label" for="flexSwitchCheckChecked-cartao">Cartão</label>'+
                  '</div>'+
                  '<div class="form-check form-switch m-1 fonte-pq">'+
                    '<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked-carne">'+
                    '<label class="form-check-label" for="flexSwitchCheckChecked-carne">Carnê</label>'+
                  '</div>'+
                '</fieldset>'+
                '<form>'+
                  '<div class="mb-3 mt-3">'+
                    '<label for="exampleInputEmail1" class="form-label">E-mail:</label>'+
                    '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="digite seu e-mail">'+
                    '<div id="emailHelp" class="form-text">Será enviado apenas as selecionadas</div>'+
                  '</div>'+
                '</form>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button class="btn btn-secondary" data-bs-target="#ModalCobranca" data-bs-toggle="modal"'+
                  'data-bs-dismiss="modal">Sair</button>'+
                '<button type="submit" class="btn btn-primary">Enviar</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim Modal botão e-mail*/

        /*Inicio Modal botão boleto*/
        '<div class="modal fade" id="ModalBoleto" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3"'+
          'tabindex="-1">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalToggleLabel3">Cobrança/Boleto</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body row justify-content-center ">'+
                
              '<a class="icon-bt" style="width:50px;" href="#" title="WhatsApp" data-bs-toggle="modal" data-bs-target="#ModalWhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>WhatsApp</a>'+
                
              '<a class="icon-bt" style="width:50px;" href="#" title="Alterar" data-bs-target="#ModalAlterar" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" /></svg><br>Alterar</a>'+
                
              '<a class="icon-bt" style="width:50px;" href="#" title="Enviar e-mail"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" /><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" /></svg>Imprimir</a>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button class="btn btn-secondary" data-bs-target="#ModalCobranca" data-bs-toggle="modal"'+
                  'data-bs-dismiss="modal">Sair</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim Modal botão boleto*/

        /*Inicio Modal botão WhatsApp*/
        '<div class="modal fade" id="ModalWhatsApp" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalToggleLabel4">Cobrança/Boleto/WhatsApp</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body">'+
                'em desenvolvimento'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-bs-target="#ModalBoleto" data-bs-toggle="modal">Sair</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim Modal botão WhatsApp*/

        /*Inicio Modal botão Pix*/
        '<div class="modal fade" id="ModalPix" aria-hidden="true" aria-labelledby="exampleModalToggleLabel5" tabindex="-1">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalToggleLabel5">Cobrança/Pix</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body">'+
                'em desenvolvimento'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-bs-target="#ModalCobranca" data-bs-toggle="modal">Sair</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim Modal botão Pix*/

        /*Inicio Modal botão Carnê*/
        '<div class="modal fade" id="ModalCarne" aria-hidden="true" aria-labelledby="exampleModalToggleLabel6" tabindex="-1">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalToggleLabel6">Cobrança/Carnê</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body">'+
                'em desenvolvimento'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-bs-target="#ModalCobranca" data-bs-toggle="modal">Sair</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim Modal botão Carnê*/

      /*Inicio Modal botão Promissória*/
        '<div class="modal fade" id="ModalPromissoria" aria-hidden="true" aria-labelledby="exampleModalToggleLabel7" tabindex="-1">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalToggleLabel7">Cobrança/Promissória</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body">'+
                'em desenvolvimento'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-bs-target="#ModalCobranca" data-bs-toggle="modal">Sair</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim Modal botão Promissória*/

        /*Fim Modal Cobrança*/

        '<a class="icon-bt" data-bs-toggle="collapse" href="#collapseCard_'+id+'" role="button" aria-expanded="false" aria-controls="collapseExample" style="width:50px;" title="Outras opções"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-terminal-plus" viewBox="0 0 16 16"><path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" /><path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" /></svg><br>Outras</a>'+
        
        '<a class="icon-bt" style="width:50px;" href="#" title="Alterar" data-bs-target="#ModalAlterar" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" /></svg><br>Alterar</a>'+

        /*inicio Modal Alterar*/
        '<div class="modal fade" id="ModalAlterar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalLabel">Cobrança/Boleto/Alterar Parcela</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body">'+
                '<div class="container text-center">'+
                  '<div>'+
                    '<h5>Valor a receber</h5>'+
                  '</div>'+
                  '<div>'+
                    '<h4>'+v_valorresta+'</h4>'+
                  '</div>'+
                '</div>'+
                '<div class="container mt-3 pt-3">'+
                  '<select class="form-select mb-2" aria-label="Default select example">'+
                    '<option selected>Forma de Pagamento</option>'+
                    '<option value="1">Dinheiro</option>'+
                    '<option value="2">Cheque</option>'+
                    '<option value="3">Cartão</option>'+
                    '<option value="4">Transferência Bancario</option>'+
                  '</select>'+
                '</div>'+
                '<div class="container">'+
                  '<form class="row g-3 needs-validation" novalidate>'+
                    '<div class="col-md-3">'+
                      '<label for="validationCustom01" class="form-label">Juros</label>'+
                      '<input type="text" class="form-control" id="validationCustom01" value='+v_juros+' required>'+
                    '</div>'+
                    '<div class="col-md-3">'+
                      '<label for="validationCustom02" class="form-label">Desconto</label>'+
                      '<input type="text" class="form-control" id="validationCustom02" value='+v_descontos+' required>'+
                    '</div>'+
                    '<div class="col-md-4">'+
                      '<label for="validationCustom01" class="form-label">Vencimento</label>'+
                      '<input type="data" class="form-control" id="validationCustom01" value='+v_dtvencimento+' required>'+
                    '</div>'+
                    '<div class="col-md-3">'+
                      '<label for="validationCustom02" class="form-label">Valor</label>'+
                      '<input type="text" class="form-control" id="validationCustom02" value='+v_valorresta+' required>'+
                    '</div>'+
                    '<div class="mb-3">'+
                      '<label for="message-text" class="col-form-label">Obs:</label>'+
                      '<textarea class="form-control" id="message-text">'+v_obspagamento+'</textarea>'+
                    '</div>'+
                  '</form>'+
                '</div>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>'+
                '<button type="button" class="btn btn-primary">Confirmar</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim Modal Alterar*/

        '<a class="botao-excluir" style="width:50px;" href="#" title="Cancelar" data-bs-toggle="modal" data-bs-target="#ModalCardCancelar"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"      fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" /></svg>Cancelar</a>'+

        /*Inicio ModalCardCancelar*/
        '<div class="modal fade" id="ModalCardCancelar" aria-hidden="true" aria-labelledby="exampleModalToggleLabel8" tabindex="-1">'+
          '<div class="modal-dialog modal-dialog-centered">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary" style="color:white;">'+
                '<h5 class="modal-title" id="exampleModalToggleLabel8">Cancelar</h5>'+
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
              '</div>'+
              '<div class="modal-body text-center">'+
                '<p>Confirmar Cancelamento?</p><br>'+
                '<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Não</button>'+
                '<button type="button" class="btn btn-danger">Sim</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        /*Fim ModalCardCancelar*/
      '</div>'+
      '<div class="collapse" id="collapseCard_1">'+
        '<div class="card card-body m-0 p-1">'+
          '<div class="d-flex justify-content-center flex-wrap">'+
            '<a class="icon-bt" style="width:50px;" href="#" title="Produtos" data-bs-target="#ModalProdutos-aberto" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" /></svg>Produtos</a>'+

            //Modal Produtos
            '<div class="modal fade" id="ModalProdutos-aberto" data-bs-backdrop="static"  data-bs-keyboard="false"  tabindex="-1"'+ 
             'aria-labelledby="staticBackdropLabel" aria-hidden="true">'+
               '<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">'+
                 '<div class="modal-content">'+
                   '<div class="modal-header bg-primary">'+
                     '<h5 class="modal-title" style="color:white;" id="staticBackdropLabel">Produtos</ h5>'+
                     '<button type="button" class="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>'+
                  '</div>'+
                  '<div class="modal-body">'+
                     '<div>'+
                       '<table class="table table-striped table-bordered">'+
                         '<thead>'+
                           '<tr>'+
                             '<th scope="col">Cód. Item</th>'+
                             '<th scope="col">Descrição</th>'+
                             '<th scope="col">Qtd</th>'+
                             '<th scope="col">R$ Unit.</th>'+
                             '<th scope="col">R$ Total</th>'+
                           '</tr>'+
                         '</thead>'+
                         '<tbody class="table-group-divider">'+
                           '<tr>'+
                             '<th scope="row">'+v_coditem+'</th>'+
                             '<td>'+v_descricaoitem+'</td>'+
                             '<td>'+v_qtd+'</td>'+
                             '<td>'+v_valorunitario+'</td>'+
                             '<td>'+v_valortotal+'</td>'+
                           '</tr>'+                          
                         '</tbody>'+
                       '</table>'+
                     '</div>'+
                   '</div>'+
                   '<div class="modal-footer">'+
                     '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</ button>'+
                     '<button type="button" class="btn bg-primary" style="color:white;"  data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="20"  height="20" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16"><path  d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" /><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2  0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0  2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1  1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1  1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0  1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" /></svg> Imprimir</button>'+
                   '</div>'+
                 '</div>'+
               '</div>'+
            '</div>'+
            //Fim Modal Produtos

            '<a class="icon-bt" style="width:50px;" href="#" title="Consultar Pagamentos" data-bs-target="#ModalConsultarPagamento" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>Pagamentos</a>'+

            //Inicio Modal Consultar Pagamentos
            '<div class="modal fade" id="ModalConsultarPagamento" aria-hidden="true" aria-labelledby="exampleModalToggleLabel8" tabindex="-1">'+
              '<div class="modal-dialog modal-dialog-centered">'+
                '<div class="modal-content">'+
                  '<div class="modal-header bg-primary" style="color:white;">'+
                    '<h5 class="modal-title" id="exampleModalToggleLabel8">Consultar Pagamentos</h5>'+
                    '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                  '</div>'+
                  '<div class="modal-body">'+
                    '<table class="table  table-bordered table-hover">'+
                      '<thead>'+
                        '<tr>'+
                          '<th class="table-secondary" scope="col">Ctr</th>'+
                          '<th class="table-secondary" scope="col">Data</th>'+
                          '<th class="table-secondary" scope="col">Hora</th>'+
                          '<th class="table-secondary" scope="col">R$ Juros</th>'+
                          '<th class="table-secondary" scope="col">R$ Desc</th>'+
                          '<th class="table-secondary" scope="col">R$ Pago</th>'+
                        '</tr>'+
                      '</thead>'+
                      '<tbody class="table-group-divider">'+
                        '<tr>'+
                          '<th scope="row">'+v_chaveprc+'</th>'+
                          '<td>'+v_dtpag+'</td>'+
                          '<td>'+v_horapag+'</td>'+
                          '<td>'+v_jurospag+'</td>'+
                          '<td>'+v_descontopag+'</td>'+
                          '<td>'+v_valorpago+'</td>'+
                        '</tr>'+
                      '</tbody>'+
                    '</table>'+

                    '<form class="d-flex flex-wrap justify-content-between  g-3 border-top border-primary border-3">'+
                      '<div class="col-sm-3">'+
                        '<label for="inputState" class="form-label fonte-pq">Pagamento</label>'+
                        '<select id="inputState" class="form-select fonte-pq">'+
                          '<option selected>Dinheiro</option>'+
                          '<option>Boleto</option>'+
                          '<option>Depósito</option>'+
                          '<option>Pix</option>'+
                          '<option>Cheque</option>'+
                          '<option>Cartão</option>'+
                        '</select>'+
                      '</div>'+
                      '<div class="col-sm-2">'+
                        '<label for="inputZip" class="form-label fonte-pq">Usuário</label>'+
                        '<input type="text" class="form-control fonte-pq" id="inputZip">'+
                      '</div>'+
                      '<div class="col-sm-2">'+
                        '<label for="inputZip" class="form-label fonte-pq">Computador</label>'+
                        '<input type="text" class="form-control fonte-pq" id="inputZip">'+
                      '</div>'+
                      '<div class="col-sm-2">'+
                        '<label for="inputZip" class="form-label fonte-pq">Data Canc.</label>'+
                        '<input type="text" class="form-control fonte-pq" id="inputZip">'+
                      '</div>'+
                      '<div class="col-sm-2">'+
                        '<label for="inputZip" class="form-label fonte-pq">Hora Canc.</label>'+
                        '<input type="text" class="form-control fonte-pq" id="inputZip">'+
                      '</div>'+
                      '<div class="col-sm-5">'+
                        '<label for="inputZip" class="form-label fonte-pq">Obs.:</label>'+
                        '<input type="text" class="form-control fonte-pq" id="inputZip">'+
                      '</div>'+
                      '<div class="col-sm-5">'+
                        '<label for="inputZip" class="form-label fonte-pq">Obs. Sistema</label>'+
                        '<input type="text" class="form-control fonte-pq" id="inputZip">'+
                      '</div>'+
                    '</form>'+
                  '</div>'+

                  '<div class="modal-footer">'+
                    '<button type="button" class="btn bg-primary" style="color:white;"data-bs-dismiss="modal">Estornar</button>'+
                    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              //Fim Modal Consultar Pagamentos
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';

      /*Final do card*/      
}  

function get_div_canceladas(v_dtcancelamento, v_valorresta, v_dtemissao, v_valororiginal, v_valorpago, v_forma_pag, v_chaveprc, v_coditem, v_descricaoitem, v_qtd, v_tipodoc, v_doc_fiscal, v_serieecf, v_nomepc, v_usuario, v_horacancelamento, v_dtvencimento) {
  return '<div class="card border-dark mb-2 m-1 flex-wrap card-total" style="max-width: 20rem;">'+
  '<div class="card-header bg-canceladas d-flex justify-content-between valor">'+
    '<div class="card-cima d-flex align-items-center">'+
      '<p class="card-text">Cancelado:<span>'+v_dtcancelamento+'</span></p>'+
    '</div>'+
    '<div class="card-cima d-flex align-items-center">'+
      '<p>Resta:<span>'+v_valorresta+'</span></p>'+
    '</div>'+
  '</div>'+
  '<div class="card-body text-dark card-edit ">'+
    '<div class="d-flex justify-content-between">'+
      '<div class="text-center">'+
        '<p class="card-text">Emissão: <span>'+v_dtemissao+'</span></p>'+
      '</div>'+
      '<div class="text-center mb-1">'+
        '<p class="card-text">Valor: <span>'+v_valororiginal+'</span></p>'+
      '</div>'+
    '</div>'+
    '<div class="d-flex justify-content-between">'+
      '<div class="text-center">'+
        '<p class="card-text">Controle/Prc: <span>12352/06 </span></p>'+
      '</div>'+
      '<div class="text-center">'+
        '<p class="card-text">Pago: <span>'+v_valorpago+'</span></p>'+
      '</div>'+
    '</div>'+
    '<div class="d-flex justify-content-between">'+
      '<div class="text-center">'+
        '<p class="card-text">F. Pag: <span>'+v_forma_pag+'</span></p>'+
      '</div>'+
      '<div class="text-center">'+
        '<p class="card-text">Contrato: <span>'+v_chaveprc+'</span></p>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="d-flex justify-content-center flex-wrap  m-1">'+

    '<a class="icon-bt-canceladas" style="width:50px;" href="#" title="Produtos" data-bs-toggle="modal" data-bs-target="#ModalProdutos"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" /></svg>Produtos</a>'+

    // Início Modal Produtos
    '<div class="modal fade" id="ModalProdutos" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">'+
      '<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-canceladas">'+
            '<h5 class="modal-title" style="color:white ;" id="staticBackdropLabel">Produtos</h5>'+
            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
          '</div>'+
          '<div class="modal-body">'+
            '<div>'+
              '<table class="table table-striped table-bordered">'+
                '<thead>'+
                  '<tr>'+
                    '<th scope="col">Cod. Item</th>'+
                    '<th scope="col">Produto</th>'+
                    '<th scope="col">Qtd</th>'+
                  '</tr>'+
                '</thead>'+
                '<tbody class="table-group-divider">'+
                  '<tr>'+
                    '<th scope="row">'+v_coditem+'</th>'+
                    '<td>'+v_descricaoitem+'</td>'+
                    '<td>'+v_qtd+'</td>'+
                  '</tr>'+
                '</tbody>'+
              '</table>'+
            '</div>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>'+
            '<button type="button" class="btn bg-canceladas" style="color:white;" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" /><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" /></svg> Imprimir</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    //Fim Modal Produtos

    '<a class="icon-bt-canceladas" style="width:50px;" title="Detalhes" data-bs-toggle="modal" data-bs-target="#ModalDetalhes"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-terminal-plus" viewBox="0 0 16 16"><path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" /><path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" /></svg><br>Detalhes</a>'+

    // Início Modal Detalhes
    '<div class="modal fade" id="ModalDetalhes" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">'+
      '<div class="modal-dialog modal-dialog-centered">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-canceladas">'+
            '<h5 class="modal-title" style="color:white ;" id="staticBackdropLabel">Detalhes do Cancelamento</h5>'+
            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
          '</div>'+
          '<div class="modal-body row">'+
            '<label class="fw-bold">Tipo/Doc: <span>'+v_tipodoc+'</span></label>'+
            '<label class="fw-bold">Num. Doc. Fiscal: <span>'+v_doc_fiscal+'</span></label>'+
            '<label class="fw-bold">Série/ECF: <Span>'+v_serieecf+'</Span></label>'+
            '<label class="fw-bold">Computador: <span>'+v_nomepc+'</span></label>'+
            '<label class="fw-bold">Usuário: <span>'+v_usuario+'</span></label>'+
            '<label class="fw-bold">Hora Cancelamento: <span>'+v_horacancelamento+'</span></label>'+
            '<label class="fw-bold">Vencimento: <span>'+v_dtvencimento+'</span></label>'+
            '<label class="fw-bold">Valor: <label>'+v_valororiginal+'</label>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    //Fim Modal Detalhes

    '<a class="botao-excluir" style="width:50px;" href="#" title="Cancelar" data-bs-toggle="modal"   data-bs-target="#ModalCardCancelar3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" /></svg>Cancelar</a>'+
  '</div>'+
'</div>'+

//Início ModalCardCancelar
'<div class="modal fade" id="ModalCardCancelar3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel8" tabindex="-1">'+
  '<div class="modal-dialog modal-dialog-centered">'+
    '<div class="modal-content">'+
      '<div class="modal-header bg-primary" style="color:white;">'+
        '<h5 class="modal-title" id="exampleModalToggleLabel8">Cancelar</h5>'+
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
      '</div>'+
      '<div class="modal-body text-center">'+
        '<p>Confirmar Cancelamento?</p><br>'+
        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>'+
        '<button type="button" class="btn btn-danger">Sim</button>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';
//Fim ModalCardCancelar
//Final do card
}