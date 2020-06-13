$("#name_label").on("input", function nameValidation() {
    if(this.value.length === 0) {
       $("#e_name_label").html("Введите имя");
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

$("#structure").on("input", function nameValidation() {
    if(this.value.length === 0) {
       $("#e_structure").html("Введите имя");
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

$("#tel").on("input", function () {
    $("#tel").mask('+7(999)999-99-99');
});

$("#tel").on("blur", function telValidation() {
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

$("#email").on("blur", function mailValidation() {
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
