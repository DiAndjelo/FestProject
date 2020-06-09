//Функция проверки поля ввода фамилии

function s_nameValidation(sname, inputID, errorID, id) {
   if(sname.length === 0) {
      $('#' + errorID).html("Введите фамилию");
      $('#' + inputID).removeClass('successInputColor').addClass('errorInputColor');
      $("#fam" + i).empty();
      return false;
  } else if (sname.length < 2 ) {
      $('#' + errorID).html("Не менее двух символов");
      $('#' + inputID).removeClass('successInputColor').addClass('errorInputColor');
      $("#fam" + i).empty();
      return false;
  } else if (sname.length > 30 ) {
      $('#' + errorID).html("Не более 30 символов");
      $('#' + inputID).removeClass('successInputColor').addClass('errorInputColor');
      $("#fam" + i).empty();
      return false;
   } else {
      var re = /^[А-яЁ ё]{0,}$/;
      if(!re.test(sname)) {
           $('#' + errorID).html("Только русские буквы");
           $('#' + inputID).removeClass('successInputColor').addClass('errorInputColor');
           $("#fam" + i).empty();
           return false;
      } else {
           $('#' + errorID).html("");
           $('#' + inputID).removeClass('errorInputColor').addClass('successInputColor');
           $(sname).html();

           $("#fam" + id).empty();
           $("#fam" + id).append($('#sname'+ id).val());
           return true;
      }
   }
}

//Функция проверки поля ввода имени

function f_nameValidation(fname, inputID, errorID, id) {
   if(fname.length === 0) {
      $('#' + errorID).html("Введите имя");
      $('#' + inputID).removeClass('successInputColor').addClass('errorInputColor');
      $("#nam" + i).empty();
      return false;
  } else if (fname.length < 2 ) {
      $('#' + errorID).html("Не менее двух символов");
      $('#' + inputID).removeClass('successInputColor').addClass('errorInputColor');
      $("#nam" + i).empty();
      return false;
  } else if (fname.length > 30 ) {
      $('#' + errorID).html("Не более 30 символов");
      $('#' + inputID).removeClass('successInputColor').addClass('errorInputColor');
      $("#nam" + i).empty();
      return false;
   } else {
      var re = /^[А-яЁ ё]{0,}$/;
      if(!re.test(fname)) {
           $('#' + errorID).html("Только русские буквы");
           $('#' + inputID).removeClass('successInputColor').addClass('errorInputColor');
           $("#nam" + i).empty();
           return false;
      } else {
           $('#' + errorID).html("");
           $('#' + inputID).removeClass('errorInputColor').addClass('successInputColor');

           $("#nam" + id).empty();
           $("#nam" + id).append($('#fname'+ id).val());
           return true;
      }
   }
}

//Функция проверки поля ввода телефона

function telValidation(tel, errorID, id) {
    $("#" + tel).mask('+7(999)999-99-99');
    if ($('#' + tel).val().length == 0) {
        $("#" + errorID).html("Введите номер телефона");
        $('#' + tel).removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else if ($("#" + tel).val().length != 16) {
        $('#' + errorID).html("Неверно введен номер телефона");
        $('#' + tel).removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else {
       $("#" + errorID).html("");
       $('#' + tel).removeClass('errorInputColor').addClass('successInputColor');
       var k = $("#" + tel).val();

       $("#num" + id).empty();
       $("#num" + id).append($('#tel'+ id).val());
       return true;
   }
}

//Функция проверки поля ввода почты

function mailValidation(mail) {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mail.length === 0) {
       $('#errorReviewMail').html("Введите электронную почту");
       $("#mailReview").removeClass('successInputColor').addClass('errorInputColor');
       return false;
    } else if (!pattern .test(mail)) {
        $('#errorReviewMail').html("Неверный ввод");
        $("#mailReview").removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else {
        $('#errorReviewMail').html("");
        $("#mailReview").removeClass('errorInputColor').addClass('successInputColor');
        return true;
   }
}

//Функция подтверждения поля ввода почты

function conmailValidation(mailConfirm) {
    var mail = document.getElementById("mailReview").value;
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mailConfirm.length === 0) {
       $('#errorReviewMailConf').html("Введите электронную почту");
       $("#emailConfirm").removeClass('successInputColor').addClass('errorInputColor');
       return false;
    } else if (!pattern .test(mailConfirm)) {
        $('#errorReviewMailConf').html("Неверный ввод");
        $("#emailConfirm").removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else if (mailConfirm != mail) {
        $('#errorReviewMailConf').html("Email не совпадает");
        $("#emailConfirm").removeClass('successInputColor').addClass('errorInputColor');
        return false;

    } else {
        $('#errorReviewMailConf').html("");
        $("#emailConfirm").removeClass('errorInputColor').addClass('successInputColor');
        return true;
    }
}
