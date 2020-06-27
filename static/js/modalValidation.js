$("#name_label").on("input", function() {
    if(this.value.length === 0) {
       $("#e_name_label").html("Введите название коллектива");
       $("#name_label").addClass('errorInputColor');
       $("#name_label").removeClass('successInputColor');
       return false;
    } else if (this.value.length < 2 ) {
       $("#e_name_label").html("Не менее двух символов");
       $("#name_label").addClass('errorInputColor');
       $("#name_label").removeClass('successInputColor');
       return false;
    } else if (this.value.length > 30 ) {
       $("#e_name_label").html("Не более 30 символов");
       $("#name_label").addClass('errorInputColor');
       $("#name_label").removeClass('successInputColor');
       return false;
    } else {
            $("#e_name_label").html("");
            $("#name_label").addClass('successInputColor');
            $("#name_label").removeClass('errorInputColor');
            return true;
    }
});

$("#structure").on("input", function() {
    if(this.value.length === 0) {
       $("#e_structure").html("Введите музыкальный состав");
       $("#structure").addClass('errorInputColor');
       $("#structure").removeClass('successInputColor');
       return false;
    } else if (this.value.length < 2 ) {
       $("#e_structure").html("Не менее двух символов");
       $("#structure").addClass('errorInputColor');
       $("#structure").removeClass('successInputColor');
       return false;
    } else if (this.value.length > 30 ) {
       $("#e_structure").html("Не более 30 символов");
       $("#structure").addClass('errorInputColor');
       $("#structure").removeClass('successInputColor');
       return false;
    } else {
       var re = /^[А-яЁ ё , 0-9]{0,}$/;
       if(!re.test(this.value)) {
            $("#e_structure").html("Только русские буквы");
            $("#structure").addClass('errorInputColor');
            $("#structure").removeClass('successInputColor');
            return false;
       } else {
            $("#e_structure").html("");
            $("#structure").addClass('successInputColor');
            $("#structure").removeClass('errorInputColor');
            return true;
       }
    }
});

$("#tel").on("focus", function() {
    $("#tel").click(function(){
        $(this).setCursorPosition(0);
    }).mask('9(999)999-99-99');
});

$("#tel").on("blur", function() {
    $("#tel").mask('9(999)999-99-99');
    if (this.value.length == 0) {
        $("#e_tel").html("Введите номер телефона");
        $("#tel").addClass('errorInputColor');
        $("#tel").removeClass('successInputColor');
        return false;
    } else if (this.value.length != 15) {
        $("#e_tel").html("Неверно введен номер телефона");
        $("#tel").addClass('errorInputColor');
        $("#tel").removeClass('successInputColor');
        return false;
    } else {
        $("#e_tel").html("");
        $("#tel").addClass('successInputColor');
        $("#tel").removeClass('errorInputColor');
        return true;
    }
});

$("#telBack").on("focus", function() {
    $("#telBack").click(function(){
        $(this).setCursorPosition(0);
    }).mask('9(999)999-99-99');
});

$("#telBack").on("blur", function() {
    $("#telBack").mask('9(999)999-99-99');
    if (this.value.length == 0) {
        $("#e_telBack").html("Введите номер телефона");
        $("#telBack").addClass('errorInputColor');
        $("#telBack").removeClass('successInputColor');
        return false;
    } else if (this.value.length != 15) {
        $("#e_telBack").html("Неверно введен номер телефона");
        $("#telBack").addClass('errorInputColor');
        $("#telBack").removeClass('successInputColor');
        return false;
    } else {
        $("#e_telBack").html("");
        $("#telBack").addClass('successInputColor');
        $("#telBack").removeClass('errorInputColor');
        return true;
    }
});

$("#email").on("blur", function() {
    var pattern  = /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
    if(this.value.length === 0) {
       $('#e_email').html("Введите электронную почту");
       $("#email").addClass('errorInputColor');
       $("#email").removeClass('successInputColor');
       return false;
    } else if (this.value.length < 2 ) {
       $("#e_email").html("Не менее двух символов");
       $("#email").addClass('errorInputColor');
       $("#email").removeClass('successInputColor');
       return false;
   } else if (this.value.length > 30 ) {
      $("#e_email").html("Не более 30 символов");
      $("#email").addClass('errorInputColor');
      $("#email").removeClass('successInputColor');
      return false;
   } else if (!pattern .test(this.value)) {
        $('#e_email').html("Неверный ввод");
        $("#email").addClass('errorInputColor');
        $("#email").removeClass('successInputColor');
        return false;
    } else {
        $('#e_email').html("");
        $("#email").addClass('successInputColor');
        $("#email").removeClass('errorInputColor');
        return true;
   }
});

$( document ).ready(function() {
    $("#memberBtn").click(
		function(){
	        if(nameValidation($('#name_label').val(), '#name_label',"#e_name_label") && structureValidation($('#structure').val(), '#structure','#e_structure') && emailValidation('#email','#e_email') && telValidation('#tel','#e_tel')) { flagSend = 1; } else { flagSend = 0;}

		    if (flagSend==0){
			    return false;
		    } else {
			    return true;
		    }
		}
	);
});

$( document ).ready(function() {
    $("#telback").click(
		function(){
            if(telValidation('#telBack','#e_telBack')) { flagSend = 1; } else { flagSend = 0;}

		    if (flagSend==0){
			    return false;
		    } else {
			    return true;
		    }
		}
	);
});

function nameValidation(name, inputID, errorID) {
     if(name.length === 0) {
       $(errorID).html("Введите название коллектива");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
    } else if (name.length < 2 ) {
       $(errorID).html("Не менее двух символов");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
    } else if (name.length > 30 ) {
       $(errorID).html("Не более 30 символов");
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

function structureValidation(name, inputID, errorID) {
     if(name.length === 0) {
       $(errorID).html("Введите музыкальный состав");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
    } else if (name.length < 2 ) {
       $(errorID).html("Не менее двух символов");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
    } else if (name.length > 30 ) {
       $(errorID).html("Не более 30 символов");
       $(inputID).addClass('errorInputColor');
       $(inputID).removeClass('successInputColor');
       return false;
    } else {
       var re = /^[А-яЁ ё , 0-9]{0,}$/;
       if(!re.test(name)) {
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
    } else if ($(tel).val().length != 15) {
        $(errorID).html("Неверно введен номер телефона");
        $(tel).removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else {
       $(errorID).html("");
       $(tel).removeClass('errorInputColor').addClass('successInputColor');
       return true;
   }
}

function emailValidation(mail, errorID) {
    var pattern  = /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
    if($(mail).val().length === 0) {
       $(errorID).html("Введите электронную почту");
       $(mail).removeClass('successInputColor').addClass('errorInputColor');
       return false;
    } else if (mail.length < 2 ) {
       $(errorID).html("Не менее двух символов");
       $(mail).removeClass('successInputColor').addClass('errorInputColor');
       return false;
    } else if (mail.length > 30 ) {
       $(errorID).html("Не более 30 символов");
       $(mail).removeClass('successInputColor').addClass('errorInputColor');
       return false;
    } else if (!pattern .test($(mail).val())) {
        $(errorID).html("Неверный ввод");
        $(mail).removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else {
        $(errorID).html("");
        $(mail).removeClass('errorInputColor').addClass('successInputColor');
        return true;
   }
}
