mp3Player();
    var i;
    function mp3Player()
        {
            $("#mp3Player")[0].src = $("#MusicTitle li a")[0];       
            $("#MusicTitle li a").click(function(e)
            {
            // 음악 링크를 클릭했을 때 원본 소스 링크로 이동하는 것을 방지
            e.preventDefault();
            // 링크를 클릭하면 해당 곡이 플레이어에서 재생되게함(인덱스 값은 건드리지 말 것)
            $("#mp3Player")[0].src = this;
        });
        }
