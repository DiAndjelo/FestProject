// Подсчёт количества участников

suball = $('.tickets_block_row').length;
var i = 1;
$('.tickets_count').append(suball);

// Добавление ID первого билета и его полей и вывод номера билета

$('.tickets_block_row').attr('id', 'block' + i);
$('.secondName').attr('id', 'sname'+ i);
$('.firstName').attr('id', 'fname'+ i);
$('.telName').attr('id', 'tel'+ i);
$('.errorSName').attr('id', 'esname'+ i);
$('.errorFName').attr('id', 'efname'+ i);
$('.errorTel').attr('id', 'etel'+ i);
$('span.number_r').append(i);

$('.tickets_total').attr('id', 'tic'+ i);
$('.fam').attr('id', 'fam'+ i);
$('.nam').attr('id', 'nam'+ i);
$('.num').attr('id', 'num'+ i);

// Функция добавления участника, добавление новых ID

function ticketAdd(){
    var ticket = $(".tickets_block_row").get(0).outerHTML;
    $(ticket).insertAfter(".tickets_block_row:last");
    suball = $('.tickets_block_row').length;
    $('.tickets_count').empty();
    $('.tickets_count').append(suball);
    i++;
    $('.tickets_block_row:last').attr('id', 'block' + i);
    $('.secondName:last').attr('id', 'sname'+ i);
    $('.secondName:last').attr('oninput', "s_nameValidation(this.value, this.id, 'esname" + i + "'," + i + ')');
    $('.firstName:last').attr('id', 'fname'+ i);
    $('.firstName:last').attr('oninput', "f_nameValidation(this.value, this.id, 'efname" + i + "'," + i + ')');
    $('.telName:last').attr('id', 'tel'+ i);
    $('.telName:last').attr('onblur', "telValidation(this.id, 'etel" + i + "'," + i + ')');
    $('.errorSName:last').attr('id', 'esname'+ i);
    $('.errorFName:last').attr('id', 'efname'+ i);
    $('.errorTel:last').attr('id', 'etel'+ i)
    $('span.number_r:last').empty();
    $('span.number_r:last').append(i);
    $(".secondName:last").removeClass('successInputColor').removeClass('errorInputColor');
    $(".firstName:last").removeClass('successInputColor').removeClass('errorInputColor');
    $(".telName:last").removeClass('successInputColor').removeClass('errorInputColor');
    $('.tickets_block_row:last').find('.errorSName').empty();
    $('.tickets_block_row:last').find('.errorFName').empty();
    $('.tickets_block_row:last').find('.errorTel').empty();

    var tickTot = $(".tickets_total").get(0).outerHTML;
    $(tickTot).insertAfter(".tickets_total:last");
    $('.tickets_total:last').attr('id', 'tic'+ i);
    $('.fam:last').attr('id', 'fam'+ i);
    $('.nam:last').attr('id', 'nam'+ i);
    $('.num:last').attr('id', 'num'+ i);
    $('.fam:last').empty();
    $('.nam:last').empty();
    $('.num:last').empty();
    $('p.total_summ').empty();
    $('p.total_summ').append(suball * 3000+" руб.");
}

// Функция удаления участника, удаление ID

function ticketRemove(){
    if($('.tickets_block_row').length > 1){
        $(".tickets_block_row:last").slideUp(300,function(){
            $(this).remove();
            $('.tickets_total:last').remove();
            suball = $('.tickets_block_row').length;
            $('.tickets_count').empty();
            $('.tickets_count').append(suball);
            i--;
            $('p.total_summ').empty();
            $('p.total_summ').append(suball * 3000+" руб.");
        });
    }
}
