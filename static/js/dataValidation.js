//Функция проверки поля ввода фамилии

$(document).on('input', '.secondName', function(){
   if(this.value.length === 0) {
      $('#esname' + $(this).attr("data-id")).html("Введите фамилию");
      $('#sname' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
      $("#fam" + i).empty();
      return false;
  } else if (this.value.length < 2 ) {
      $('#esname' + $(this).attr("data-id")).html("Не менее двух символов");
      $('#sname' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
      $("#fam" + i).empty();
      return false;
  } else if (this.value.length > 30 ) {
      $('#esname' + $(this).attr("data-id")).html("Не более 30 символов");
      $('#sname' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
      $("#fam" + i).empty();
      return false;
   } else {
      var re = /^[А-яЁ ё]{0,}$/;
      if(!re.test(this.value)) {
           $('#esname' + $(this).attr("data-id")).html("Только русские буквы");
           $('#sname' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
           $("#fam" + i).empty();
           return false;
      } else {
           $('#esname' + $(this).attr("data-id")).html("");
           $('#sname' + $(this).attr("data-id")).removeClass('errorInputColor').addClass('successInputColor');

           $("#fam" + $(this).attr("data-id")).empty();
           $("#fam" + $(this).attr("data-id")).append($('#sname'+ $(this).attr("data-id")).val());
           return true;
      }
   }
});

//Функция проверки поля ввода имени

$(document).on('input', '.firstName', function(){
   if(this.value.length === 0) {
      $('#efname' + $(this).attr("data-id")).html("Введите имя");
      $('#fname' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
      $("#nam" + i).empty();
      return false;
  } else if (this.value.length < 2 ) {
      $('#efname' + $(this).attr("data-id")).html("Не менее двух символов");
      $('#fname' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
      $("#nam" + i).empty();
      return false;
  } else if (this.value.length > 30 ) {
      $('#efname' + $(this).attr("data-id")).html("Не более 30 символов");
      $('#fname' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
      $("#nam" + i).empty();
      return false;
   } else {
      var re = /^[А-яЁ ё]{0,}$/;
      if(!re.test(this.value)) {
           $('#efname' + $(this).attr("data-id")).html("Только русские буквы");
           $('#fname' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
           $("#nam" + i).empty();
           return false;
      } else {
           $('#efname' + $(this).attr("data-id")).html("");
           $('#fname' + $(this).attr("data-id")).removeClass('errorInputColor').addClass('successInputColor');

           $("#nam" + $(this).attr("data-id")).empty();
           $("#nam" + $(this).attr("data-id")).append($('#fname'+ $(this).attr("data-id")).val());
           return true;
      }
   }
});

$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

//Функция проверки поля ввода телефона
<<<<<<< HEAD
$(document).on("focus", ".telName", function() {
    $('#tel' + $(this).attr("data-id")).click(function(){
      $(this).setCursorPosition(0);
  }).mask("9(999)999-9999");
});

$(document).on('blur', '.telName', function(){
    $('#tel' + $(this).attr("data-id")).mask('9(999)999-99-99');
=======

$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$(document).on("focus", ".telName", function() {
    $('#tel' + $(this).attr("data-id")).click(function(){
      $(this).setCursorPosition(0);
  }).mask("9 (999) 999-9999");
});

$(document).on('blur', '.telName', function(){
    $('#tel' + $(this).attr("data-id")).mask('9 (999)999-99-99');
>>>>>>> 1ed96ee55107e65a2c94f6d3dba670de82e0d5eb
    if ($('#tel' + $(this).attr("data-id")).val().length == 0) {
        $('#etel' + $(this).attr("data-id")).html("Введите номер телефона");
        $('#tel' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
        $("#num" + i).empty();
        return false;
    } else if ($('#tel' + $(this).attr("data-id")).val().length != 15) {
        $('#etel' + $(this).attr("data-id")).html("Неверно введен номер телефона");
        $('#tel' + $(this).attr("data-id")).removeClass('successInputColor').addClass('errorInputColor');
        $("#num" + i).empty();
        return false;
    } else {
       $('#etel' + $(this).attr("data-id")).html("");
       $('#tel' + $(this).attr("data-id")).removeClass('errorInputColor').addClass('successInputColor');

       $("#num" + $(this).attr("data-id")).empty();
       $("#num" + $(this).attr("data-id")).append($('#tel'+ $(this).attr("data-id")).val());
       return true;
   }
});

//Функция проверки поля ввода почты

$('#mailReview').on('blur', function(){
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.value.length === 0) {
       $('#errorReviewMail').html("Введите электронную почту");
       $("#mailReview").removeClass('successInputColor').addClass('errorInputColor');
       return false;
    } else if (!pattern .test(this.value)) {
        $('#errorReviewMail').html("Неверный ввод");
        $("#mailReview").removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else {
        $('#errorReviewMail').html("");
        $("#mailReview").removeClass('errorInputColor').addClass('successInputColor');
        return true;
   }
});

//Функция подтверждения поля ввода почты

$('#emailConfirm').on('blur', function(){
    var mail = document.getElementById("mailReview").value;
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.value.length === 0) {
       $('#errorReviewMailConf').html("Введите электронную почту");
       $("#emailConfirm").removeClass('successInputColor').addClass('errorInputColor');
       return false;
    } else if (!pattern .test(this.value)) {
        $('#errorReviewMailConf').html("Неверный ввод");
        $("#emailConfirm").removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else if (this.value != mail) {
        $('#errorReviewMailConf').html("Email не совпадает");
        $("#emailConfirm").removeClass('successInputColor').addClass('errorInputColor');
        return false;

    } else {
        $('#errorReviewMailConf').html("");
        $("#emailConfirm").removeClass('errorInputColor').addClass('successInputColor');
        return true;
    }
});


$( document ).ready(function() {
    $("#payBtn").click(
		function(){
		    counti = 1;
		    while (counti <= suball) {
		        if(snameValidation($('#sname' + counti).val(), '#sname' + counti,'#esname' + counti)) { flagSend = 1; } else { flagSend = 0;}
                if(fnameValidation($('#fname' + counti).val(), '#fname' + counti,'#efname' + counti)) { flagSend = 1; } else { flagSend = 0;}
                if(telValidation('#tel' + counti,'#etel' + counti)) { flagSend = 1; } else { flagSend = 0;}
                if(mailValidation('#mailReview')) { flagSend = 1; } else { flagSend = 0;}
                if(conmailValidation('#mailReview', '#emailConfirm')) { flagSend = 1; } else { flagSend = 0;}
		        counti++;
		    }

		    if (flagSend==1){
			    return true;
		    } else  {
			    return false;
		    }
		}
	);
});

function snameValidation(sname, inputID, errorID) {
     if(sname.length === 0) {
       $(errorID).html("Введите фамилию");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
   } else if (sname.length < 2 ) {
       $(errorID).html("Не менее двух символов");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
   } else if (sname.length > 30 ) {
       $(errorID).html("Не более 30 символов");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
    } else {
       var re = /^[А-яЁ ё]{0,}$/;
       if(!re.test(sname)) {
            $(errorID).html("Только русские буквы");
            $(inputID).addClass('errorInputColor');
            $(inputID).removeClass('successInputColor');
            return false;
       } else {
            $(errorID).html("");
            $(inputID).addClass('successInputColor');
            $(inputID).removeClass('errorInputColor');
            return true;
       }
    }
}

function fnameValidation(fname, inputID, errorID) {
     if(fname.length === 0) {
       $(errorID).html("Введите имя");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
   } else if (fname.length < 2 ) {
       $(errorID).html("Не менее двух символов");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
   } else if (fname.length > 30 ) {
       $(errorID).html("Не более 30 символов");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
    } else {
       var re = /^[А-яЁ ё]{0,}$/;
       if(!re.test(fname)) {
            $(errorID).html("Только русские буквы");
            $(inputID).addClass('errorInputColor');
            $(inputID).removeClass('successInputColor');
            return false;
       } else {
            $(errorID).html("");
            $(inputID).addClass('successInputColor');
            $(inputID).removeClass('errorInputColor');
            return true;
       }
    }
}

function telValidation(tel, errorID) {
    $(tel).mask('9(999)999-99-99');
    if ($(tel).val().length == 0) {
        $(errorID).html("Введите номер телефона");
        $(tel).removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else if ($("#" + tel).val().length != 15) {
        $(errorID).html("Неверно введен номер телефона");
        $(tel).removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else {
       $(errorID).html("");
       $(tel).removeClass('errorInputColor').addClass('successInputColor');
       return true;
   }
}

function mailValidation(mail, errorID) {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if($(mail).val().length === 0) {
       $('#errorReviewMail').html("Введите электронную почту");
       $("#mailReview").removeClass('successInputColor').addClass('errorInputColor');
       return false;
   } else if (!pattern .test($(mail).val())) {
        $('#errorReviewMail').html("Неверный ввод");
        $("#mailReview").removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else {
        $(errorID).html("");
        $(mail).removeClass('errorInputColor').addClass('successInputColor');
        return true;
   }
}

function conmailValidation(mail, mailConfirm) {
    if($(mailConfirm).val().length === 0) {
       $('#errorReviewMailConf').html("Введите электронную почту");
       $("#emailConfirm").removeClass('successInputColor').addClass('errorInputColor');
       return false;
   } else if ($(mailConfirm).val() != $(mail).val()) {
        $('#errorReviewMailConf').html("Email не совпадает");
        $('#emailConfirm').removeClass('successInputColor').addClass('errorInputColor');
        return false;
    }else {
        $('#errorReviewMailConf').html("");
        $("#emailConfirm").removeClass('errorInputColor').addClass('successInputColor');
        return true;
    }
}
