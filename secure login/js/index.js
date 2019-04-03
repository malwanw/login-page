    $(document).ready(function(){
        $(".text-success").hide().html();
        $(".text-danger").hide().html();
        $(".text-info").hide().html();
        $("#submit").click(function(){

            var username=$("#name").val();
            var password=$("#pass").val();
            if(username == 'admin' && password == 123){
                $("#form").html('<h4 style="text-align:center">User Login Successfully</h4><a href="">Back</a>').css('color','green');
            }else if(username == '' || password == ''){
                $(".text-danger").html("masukkan username anda dan password anda").show().fadeOut(4000);
            }else{
                $(".text-info").html("username atau password yang anda masukkan salah").show().fadeOut(4000);
            }
        });
    });