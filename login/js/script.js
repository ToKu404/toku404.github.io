$(document).ready(function(){
    $('#btnSign').click(function(e){
        e.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            url : "./js/users.json",
            success : result =>{
                const users = result.Users
                const validUser = users.filter(user =>{
                    return user.username == username && user.password == password;
                })
                if(validUser.length>0){
                    window.open("http://toku404.github.io/portfolio/index.html")
                }else{
                    $(".alert").css("display","block")
                    $("#btnRetry").click(function(){
                        $(".alert").css("display","none");
                        $("#username").val("")
                        $("#password").val("")
                    })
                }
            }
        })
    })

    $("#forgot").click(function(){
        $.ajax({
            url : "./js/users.json",
            success : result =>{
                let data = ""
                const users = result.Users
                users.forEach(user =>{
                    data += `
                    <tr>
                        <td>${user.username}</td>
                        <td>${user.password}</td>
                    </tr>`
                })
                $("#tdata").html(data)
                $(".user-data").css("display","block")
            }
        })
        $("#t-btn").click(function(){
            $(".user-data").css("display","none")
        })
    })
})
