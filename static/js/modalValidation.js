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
       var re = /^[А-яЁ ё]{0,}$/;
       if(!re.test(this.value)) {
            $("#e_name_label").html("Только русские буквы");
            $("#name_label").addClass('errorInputColor');
            $("#name_label").removeClass('successInputColor');
            return false;
       } else {
            $("#e_name_label").html("");
            $("#name_label").addClass('successInputColor');
            $("#name_label").removeClass('errorInputColor');
            return true;
       }
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
       var re = /^[А-яЁ ё]{0,}$/;
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
    $("#tel").mask('+7(999)999-99-99');
});

$("#tel").on("blur", function() {
    $("#tel").mask('+7(999)999-99-99');
    if (this.value.length == 0) {
        $("#e_tel").html("Введите номер телефона");
        $("#tel").addClass('errorInputColor');
        $("#tel").removeClass('successInputColor');
        return false;
    } else if (this.value.length != 16) {
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

$("#email").on("blur", function() {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.value.length === 0) {
       $('#e_email').html("Введите электронную почту");
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
	        if(nameValidation($('#name_label').val(), '#name_label',"#e_name_label")) { flagSend = 1; } else { flagSend = 0;}
            if(structureValidation($('#structure').val(), '#structure','#e_structure')) { flagSend = 1; } else { flagSend = 0;}
            if(telValidation('#tel','#e_tel') || emailValidation('#email','#e_email')) { flagSend = 1; } else { flagSend = 0;}
            // if(emailValidation('#email','#e_email')) { flagSend = 1; } else { flagSend = 0;}
            //if(mailValidation('#email')) { flagSend = 1; } else { flagSend = 0;}

		    if (flagSend==1){
			    return true;
		    } else {
			    return false;
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
       var re = /^[А-яЁ ё]{0,}$/;
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
       var re = /^[А-яЁ ё]{0,}$/;
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
    $(tel).mask('+7(999)999-99-99');
    if ($(tel).val().length == 0) {
        $(errorID).html("Введите номер телефона");
        $(tel).removeClass('successInputColor').addClass('errorInputColor');
        return false;
    } else if ($(tel).val().length != 16) {
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
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if($(mail).val().length === 0) {
       $(errorID).html("Введите электронную почту");
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
