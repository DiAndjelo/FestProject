// Подсчёт количества участников

suball = $('.tickets_block_row').length;
var i = 1;
$('.tickets_count').append(suball);

// Добавление ID первого билета и его полей и вывод номера билета

$('.tickets_block_row').attr('id', 'block' + i);
$('.secondName').attr('id', 'sname'+ i);
$('.firstName').attr('id', 'fname'+ i);
$('.telName').attr('id', 'tel'+ i);
$('span.number_r').append(i);

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
    $('.firstName:last').attr('id', 'fname'+ i);
    $('.telName:last').attr('id', 'tel'+ i);
    $('span.number_r:last').empty();
    $('span.number_r:last').append(i);
}

// Функция удаления участника, удаление ID

function ticketRemove(){
    if($('.tickets_block_row').length > 1){
        $(".tickets_block_row:last").slideUp(300,function(){
            $(this).remove();
            suball = $('.tickets_block_row').length;
            $('.tickets_count').empty();
            $('.tickets_count').append(suball);
            i--;
        });
    }
}

// Подсчёт итоговой суммы

total = $('.tickets_total').length;
sum_total = total * 3000;
$('p.total_summ').append(sum_total+" руб.");
