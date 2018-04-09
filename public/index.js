socket=io();

$(function(){
    $('.container-chat').hide();
    let login=$('#loginbtn');
    let send=$('#sendbtn');
    let username=$('#login');
    let message=$('#send')

    login.click(function(){
        console.log("aman");

        $('.container-login').hide();
        $('.container-chat').show();
        
        socket.emit('login',{
            username:username.val()
        })
    })

    send.click(function(){
        socket.emit('send_message',{
            message:message.val()
        })
    })


    socket.on('receive_message',(data)=>{
        $('.mess').append(`<li>${data.username} : ${data.message} : ${data.timestamp}</li><br>`)
    })


})