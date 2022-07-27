
function ProfileMenu()
{
    document.getElementById("ProfileMenu").classList.toggle("show");
    window.onclick = function(event) 
    {
        if(!event.target.matches('.ProfileButton') && !event.target.matches('.UserIcon'))
        {
            var UserMenuContents = document.getElementsByClassName(".ProfileContents");
            var t;
            for(t = 0; t < UserMenuContents.length; t++)
            {
                var UserMenuWindow = UserMenuContents[i];
                if(UserMenuWindow.classList.contains("show"))
                {
                    UserMenuWindow.classList.remove("show");
                }
            }
        }
    }
     // JQuery
    var $Frame = $("#LogoIframe");
    $Frame.attr('src', '');
    $Frame.attr('src', url);
    // JQuery
}

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
        // JQuery 
        // attr: 값을 지정한 값으로 리턴해준다.
        // 2. 아래에서 삭제된 컨텐츠를 재생 버튼 클릭시 다시 새로 
        // 주소를 지정해서 재생 가능하게 만듬
        var $Frame = $("#LogoIframe"); // JQuery Object 변수
        var url = 'https://www.youtube.com/embed/bdvidv6RXJY?autoplay=1';
        $Frame.attr('src', '');
        $Frame.attr('src', url);
        // JQuery
        document.getElementById("LoadingCat").style.visibility = "hidden";
        document.getElementById("LogoIframe").style.display = "block";
        document.getElementById("VidContainer").style.display = "block";
        document.getElementById("PageLogo").style.display = "none";
        document.getElementById("LogoBtn").style.display = "none";
        document.getElementById("CatBtn").style.display = "none";
    }
    function CloseIframe()
    {
        document.getElementById("PageLogo").style.display = "initial";
        document.getElementById("LogoBtn").style.display = "initial";
        document.getElementById("CatBtn").style.display = "initial";
        document.getElementById("LogoIframe").style.display = "none";
        document.getElementById("LogoIframe").currentTime = 0;
        document.getElementById("VidContainer").style.display = "none";
        // 1. 종료버튼 클릭 시 Iframe 컨텐츠 리셋 및 재생을 불가능하게 만듬(컨텐츠삭제)
        var $Frame = $("#LogoIframe"); // JQuery Object 변수 
        var url = 'src';
        $Frame.attr('src', '');
        $Frame.attr('src', url);
    }
var count = 0;
function CatOnOff()
{
    count++;
    if(count % 2 == 1)
        {
            document.getElementById("ClickMeIMG").style.display = "none";
            document.getElementById("ToggleCat").style.display= "block";
        }
    else
        {
            document.getElementById("ClickMeIMG").style.display= "block";
            document.getElementById("ToggleCat").style.display = "none";
        }
}
 