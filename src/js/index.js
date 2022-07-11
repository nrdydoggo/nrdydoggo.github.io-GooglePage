
function DropClk()
{
        // Show the contents inside the dropdown menu when clicking on it.
    document.getElementById("dropcont").classList.toggle("show");
    var contents = document.getElementById("dropcont");

    // Close the menu if user clicks outside the menu box.
    window.onclick = function(event)
    {
        if(!event.target.matches('.dropbtn'))
        {
            for(var i = 0; i < contents.length; i++)
            {
                var openDrop = contents[i];
                if(openDrop.classList.contains('show'))
                {
                    openDrop.classList.remove('show');
                }
            }
        }
    }
}