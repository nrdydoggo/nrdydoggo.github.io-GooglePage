var run = 0;
function AnimeClickEvent()
{
    run++;
    if(run % 2 == 1)
    {
        document.getElementById("GregShaking").style.display = "none";
        document.getElementById("GregAngusShaking").style.display = "block";
    }
    else
    {
        document.getElementById("GregAngusShaking").style.display = "none";
        document.getElementById("GregShaking").style.display = "block";
    }  
    
}