var about_button = document.getElementById("about-me");
var projects_button = document.getElementById("projects");
var exp_button = document.getElementById("experience");
var contact_button = document.getElementById("call-me");

about_button.onclick = function()
{  
    if (location.href !== "http://127.0.0.1:5500/CV/index.html")
    {
        location.href = "http://127.0.0.1:5500/CV/index.html";
    }
}
projects_button.onclick = function()
{
    if (location.href !== "http://127.0.0.1:5500/CV/projects.html")
    {
        location.href = "http://127.0.0.1:5500/CV/projects.html";
    }
}
exp_button.onclick = function()
{
    if (location.href !== "http://127.0.0.1:5500/CV/experience.html")
    {
        location.href = "http://127.0.0.1:5500/CV/experience.html";
    }
}
contact_button.onclick = function()
{
    if (location.href !== "http://127.0.0.1:5500/CV/contact.html")
    {
        location.href = "http://127.0.0.1:5500/CV/contact.html";
    }
    
}