
function DropClk()
{
    // Show the contents inside the dropdown menu when clicking on it.
    document.getElementById("dropcont").classList.toggle("show");

// Close the menu if user clicks outside the menu box.
window.onclick = function(event) 
{
    // If beside area of class '.dropbtn'(Menu Button) and '.buttonImg'(Menu Image) is clicked,
    if(!event.target.matches('.dropbtn') && !event.target.matches('.buttonImg'))
    {
        var DropdownContents = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < DropdownContents.length; i++)
        {
             // Insert all the contents in dropdown-content to this variable,
            var DropdownWindow = DropdownContents[i];
            // and turn off the box of dropdown-content.
            if(DropdownWindow.classList.contains("show"))
            {
                DropdownWindow.classList.remove("show");
            }
        }
    }
}
}
function Iframe()
{
    document.getElementById("PageLogo").style.display = "none";
    document.getElementById("LogoBtn").style.display = "none";
    document.getElementById("VidContainer").style.display = "block";
    document.getElementById("LogoIframe").classList.toggle("show");
}
function CloseIframe()
{
    var iframe = document.getElementById("LogoIframe");
    document.getElementById("PageLogo").style.display = "initial";
    document.getElementById("LogoBtn").style.display = "initial";
    document.getElementById("LogoIframe").style.visibility = "hidden";
    document.getElementById("LogoIframe").currentTime = 0;
    document.getElementById("VidContainer").style.visibility = "hidden";
   
    // JQuery
    var video = $("#LogoIframe").attr("src");
    $("#LogoIframe").attr("src", "");
    $("#LogoIframe"),attr("src", video);
    // JQuery
}
