function detectMobile() 
{
    if(navigator.userAgent.match(/Mobile/i))
    {
        return "Mobile";
    }
}

var isMobile = detectMobile();

if(isMobile)
{
    window.location = "/m/index.html";
}
else
{
    window.location = "/d/index.html";
}
