(function($){
    //登录接口
    function login(_data){
        $.__Request__.login(_data, function(res){
            if(res.code==200){
                $.__Request__.save_token(res['result']['token']);
                //记住密码
                if('undefined'!==typeof _data['checked']){
                    $.__Request__.remember_user(_data);
                }
                //
                window.location.href = '/index2.html';
            }else{
                $.Screen_Dialog.alert(res['msg']);
            }
        });
    }

    //校验登录信息
    function validateForm(){
        var _form = $('#validateFrom');

        _form.validate({
            errorContainer: "div.error",
            errorLabelContainer: _form.find('.error-box'),
            wrapper: "p",
            rules: {
                username: { required: true },
                password: { required: true }
            },
            messages: {
                username: { required: "请输入您的账号" },
                password: { required: "请输入您的密码" }
            }
        });
        //登录事件
        _form.on('click', 'button.btn-login', function(){
           if(_form.valid()){
               //提交登录
               login($.urlToObject2(_form.serialize()));
           }
        });
    }

    //获取用户信息
    function initialForm(){
        var _validateFrom = $('#validateFrom'),
            _userInfo = $.__Request__.get_remember_user();
        _validateFrom.html(template('tpl-login', _userInfo));
    }

    $(function(){
        initialForm();
        validateForm();
    });
})(jQuery);