$(function(){


    $('#btnPhoneAuth').on('click', function(){
        var path = "https://fxcity.co.kr/login/phonecert?from=memberjoin";
        openPhoneAuth(path, 400, 600, '안심본인인증');
    });

    $('#btnDuplCheck').on('click', function(){
        checkIdDuplication();
    });

    $('#id').on('keyup', function(){
        cancelDuplCheck();
    });

    $('#btnFormSubmit').on('click', function(){
        registMember();
    });

    $('#totalAgree').on('click', function(){
        checkAll();
    });


    $('#email_kind').on('change', function(e){
        var domain = e.target.value;
        $('#email2').val(domain);
    });

    var checkAll = function(){
        $('#useAgree1').click();
        $('#useAgree2').click();
        $('#useAgree3').click();
        $('#useAgree4').click();
        $('#useAgree5').click();
    };


    var checkIdDuplication = function(){

        if($('#id').val() == ''){
            validationErrorAlert('아이디를 입력해주세요.');
            return
        }

        $.ajax({
            type: "POST",
            url: "/login/checkid",
            data: {
                "id" : $('#id').val()
            },
            dataType: 'json',
            success: function(result) {
                if(result.resultCode == 'nonexist'){
                    validationOkayAlert('사용 가능한 아이디입니다.');
                    $('#duplicationComplete').val(true);

                }else if(result.resultCode == 'duplication'){
                    validationErrorAlert('이미 존재하는 아이디 입니다.');
                    $('#id').select();
                }
            },
            error: function(request, status, error) {
                validationOkayAlert('에러');
            }
        })
    };

    var cancelDuplCheck = function(){
        $('#duplicationComplete').val(false);
    };

    var registMember = function(){
        if(checkValidation() && checkAgreement()){
            if($('#name').val() != $('#bankAccountName').val()){

                var alertOptions = {
                    title : '알림',
                    content : '이름과 예금주가 다를 경우 가입이 되지 않을수도있습니다. 이대로 진행하시겠습니까?',
                    type : 'questionmark',
                    ok : function(){
                        document.fm.submit();
                    }
                };

                msgAlertfrm(this, '400', '300', '#alerLypopCheck', alertOptions);


            }else {
                document.fm.submit();
            }

        }
    };

    var checkAgreement = function(){
        if(!$('#useAgree1').is(':checked')){
            validationErrorAlert('개인정보수집 및 이용동의서에 동의해주세요.');
            return false;
        }

        if(!$('#useAgree2').is(':checked')){
            validationErrorAlert('서비스이용약관(필수)에 동의해주세요.');
            return false;
        }

        if(!$('#useAgree5').is(':checked')){
            validationErrorAlert('개인정보처리 방침안내에 동의해주세요');
            return false;
        }

        return true;
    };

    var checkValidation = function(){

        //아이디 체크
        var idLength = $('#id').val().length;

        if(idLength == 0){
            validationErrorAlert('아이디를 입력해주세요.');
            return false;
        }

        var pattern = /^[0-9a-zA-Z]+$/g;

        if(!pattern.test($('#id').val())){
            validationErrorAlert('아이디는 6~20자 영문자 또는 숫자 조합이어야합니다. ');
            return false;
        }

        if(idLength < 5 || idLength > 21){
            validationErrorAlert('아이디 글자수가 맞지 않습니다.');
            return false;
        }

        if($('#duplicationComplete').val() == 'false'){
            validationErrorAlert('아이디 중복 체크를 해주세요.');
            return false;
        }


        //비밀번호 같은지 체크
        if($('#password').val() != $('#password_confirmation').val()){
            validationErrorAlert('비밀번호가 다릅니다.');
            return false;
        }

        //비밀번호 크기 체크
        var passwordLength = $('#password').val().length;
        if(passwordLength < 6 || passwordLength > 25){
            validationErrorAlert('비밀번호는 6~25자만 가능합니다.');
            return false;
        }



        if(!checkAge()){
            return false;
        }

        //예금주 확인
        if($('#bankAccountName').val() == ''){
            validationErrorAlert('예금주를 입력해주세요.');
            return false;
        }

        //이메일 입력 여부 확인
        if($('#email1').val() == '' || $('#email2').val() == ''){
            validationErrorAlert('이메일을 입력해주세요.');
            return false;
        }

        //은행 선택여부 체크
        if($('#bankName').val() == ''){
            validationErrorAlert('은행명을 입력해주세요.');
            return false;
        }

        //계좌번호 입력 여부 체크
        if($('#bankAccount').val() == ''){
            validationErrorAlert('계좌번호를 입력해주세요.');
            return false;
        }

        //휴대폰 번호 형식 체크
        if($('#phone').val() == ''){
            validationErrorAlert('본인인증을 해주세요.');
            return false;
        }

        //이름 입력 여부 체크
        if($('#name').val() == ''){
            validationErrorAlert('이름을 입력해주세요.');
            return false;
        }


        if($('#accountValidate').val() == 'false'){
            validationErrorAlert('계좌확인을 해주세요.');
            return false;
        }

        if($('#recommendationCode').val() == ''){
            validationErrorAlert('지점을 선택해주세요.');
            return false;
        }



        return true;
    };

});

function validationErrorAlert(msg){
    msgAlert(null, '510', '240', msg, 'x');
}

function validationOkayAlert(msg){
    msgAlert(null, '510', '240', msg, 'o');
}

function checkAge(){
    var sn = $('#sn').val();
    var curDate = new Date();
    var year = curDate.getFullYear();

    var snTenYearStr = sn.substr(0, 2);
    var snTenYear = parseInt(sn.substr(0, 2));
    var TodayTenYear = parseInt(year.toString().substr(2,2));

    var snFullYear = 0;

    if(snTenYear > TodayTenYear){
        snFullYear =  parseInt('19'+ snTenYearStr);
    }else {
        snFullYear = parseInt('20' + snTenYearStr);
    }

    var age = parseInt(year - snFullYear) + 1;

    if(age < 20){
        validationErrorAlert("미성년자는 가입할 수 없습니다.");
        return false;

    }
    return true;
}

function onCheckAccount() {
    if($('#sn').prop('readonly')){
        activateAccountInput();
        return
    }

    //var name = $("#name").val();
    var name = $("#bankAccountName").val();
    var bankCode = $("#bankName").val();
    var accountNum = $("#bankAccount").val();
    var sn = $("#sn").val();

    if(name === "") {
        validationErrorAlert("예금주를 입력하세요");
        return;
    }
    if(bankCode === "") {
        validationErrorAlert("은행을 선택하세요");
        return;
    }
    if(accountNum === "") {
        validationErrorAlert("계좌번호를 입력하세요");
        return;
    }

    if(sn === "" || sn.length != 6) {
        validationErrorAlert("주민번호 앞 6자리를 입력하세요.");
        return;
    }

    if(!checkAge()){
        return;
    };


    $('#accountValidate').val(false);
    $.post("/login/account_validate",{name:name,bankCode:bankCode,accountNum:accountNum,sn:sn},function(res){
        if(res.result == true) {
            validationOkayAlert("계좌 인증 성공")
            inactivateAccountInput();
            $('#accountValidate').val(true);
        }else {
            validationErrorAlert("계좌 인증 오류 : "+res.message);
        }
    })
        .fail(function(e){
            validationErrorAlert("계좌 인증 요청 오류 ");
        });
}

function inactivateAccountInput(){
    $('#btnCheckAccount').text('변경');
    var $sn = $('#sn');
    var $bankAccount = $('#bankAccount');
    var $bankName = $('#bankName');
    var $bankAccountName = $('#bankAccountName');
    $sn.prop('readonly', true);
    $bankAccount.prop('readonly', true);
    $bankName.css('pointer-events','none');
    $bankAccountName.prop('readonly', true)

    $sn.parent().addClass('readonly');
    $bankAccount.parent().addClass('readonly');
    $bankName.parent().addClass('readonly');
    $bankAccountName.parent().addClass('readonly');
}

function activateAccountInput(){
    $('#btnCheckAccount').text('확인');
    $('#accountValidate').val(false);
    var $sn = $('#sn');
    var $bankAccount = $('#bankAccount');
    var $bankName = $('#bankName');
    var $bankAccountName = $('#bankAccountName');
    $sn.prop('readonly', false);
    $bankAccount.prop('readonly', false);
    $bankName.css('pointer-events','unset');
    $bankAccountName.prop('readonly', false);

    $sn.parent().removeClass('readonly');
    $bankAccount.parent().removeClass('readonly');
    $bankName.parent().removeClass('readonly');
    $bankAccountName.parent().removeClass('readonly');
}