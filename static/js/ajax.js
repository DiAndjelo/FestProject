$(document).ready(function(){

    var form_adding_ticket = $('#adding_ticket');
    var form_remove_ticket = $('#removing_ticket');
    var nmb = 1;

    function updatingTicket(nmb, is_adding){
        var data = {};
        data.nmb = nmb;
        if (is_adding){
            var csrf_token = $('#adding_ticket [name="csrfmiddlewaretoken"]').val();
        }
        else {
            var csrf_token = $('#removing_ticket [name="csrfmiddlewaretoken"]').val();
        }
        data["csrfmiddlewaretoken"] = csrf_token;

        var url = form_adding_ticket.attr("action");

         $.ajax({
             url: url,
             type: 'POST',
             data: data,
             cache: true,
             success: function (data) {
                 console.log("OK");
             },
             error: function(){
                 console.log("error")
             }
         })

    }

    form_adding_ticket.on('submit', function(e){
        e.preventDefault();
        if (nmb!==8){
            nmb = nmb + 1;
            console.log(nmb);
            updatingTicket(nmb, is_adding=true);
        }
        else{
            console.log('8')
        }
    });

    form_remove_ticket.on('submit', function (e) {
        e.preventDefault();
        if (nmb !== 1){
            nmb = nmb - 1;
            console.log(nmb);
            updatingTicket(nmb, is_adding=false);
        }
        else{
            console.log('1')
        }
    });

    // var payment_form = $('#formPayment');
    //
    // function createPayment(nmb){
    //     let data = {};
    //     let data.email = $('mailReview').val();
    //     let data.nmb = nmb;
    //     console.log(data.email);
    //     console.log(nmb);
    //     var url = payment_form.attr("action");
    //
    //      $.ajax({
    //          url: url,
    //          type: 'POST',
    //          data: data,
    //          cache: true,
    //          success: function (data) {
    //              console.log("OK");
    //          },
    //          error: function(){
    //              console.log("error")
    //          }
    //      })
    // }
    //
    // payment_form.on('submit', function (e) {
    //     e.preventDefault();
    //     createPayment(nmb);
    // })

});
