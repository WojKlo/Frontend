var login_button = document.getElementById("log");
var register_button = document.getElementById("reg");
var login = "Routa";
var password = "legenda";

var in_log, in_pass;
in_log = document.getElementById("log-text");
in_pass = document.getElementById("pass-text");

login_button.onclick = function()
{
    if (location.href == "http://127.0.0.1:5500/main.html")
    {
        if (login == in_log.value && password == in_pass.value)
        {
            console.log("Hello " + login);
        }
        else
        {
            console.log("Incorrect login or password!");
        }
    }
    else
    {
        location.href = "http://127.0.0.1:5500/main.html";
    }
}


/*REGISTER*/
var c_login, c_email, c_pass, c_pass_s;
register_button.onclick = function()
{
    if (location.href == "http://127.0.0.1:5500/register.html")
    {
        c_login = document.getElementById("log-text").value;
        c_email = document.getElementById("e-text").value;
        c_pass = document.getElementById("pass-text").value;
        c_pass_s = document.getElementById("pass-text-2").value;
        if (c_pass == c_pass_s)
        {
            if (c_pass == "" || c_email == "" || c_login == "")
            {
                console.log("Login, e-mail or password can not be empty!");
            }
            else
            {
                alert(c_login + "  " + c_email + "  " +  c_pass);
                location.href = "http://127.0.0.1:5500/main.html";
            }
        }
    }
    else
    {
        location.href = "http://127.0.0.1:5500/register.html";
    }
}