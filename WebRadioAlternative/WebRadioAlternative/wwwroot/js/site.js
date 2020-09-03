var connection = new signalR.HubConnectionBuilder().withUrl("/HubM").build();
connection.on("ReceiveMusic", function () {
    //var  = fromUser + ": " + message;
    //var li = docummsgent.createElement("li");
    //li.textContent = msg
    //$("#list").prepend(li);

    var audioElement = document.querySelector('#music');
    audioElement.crossOrigin = "anonymous"; // CORS access restriction. Worth a shot but no dice
    audioElement.type = "audio/mpeg"; // just in case? idk
  //  audioElement.src = "http://novazz.ice.infomaniak.ch/novazz-128.mp3"; // "https://streaming.kansaspublicradio.org:8001/mp3/First_0713886.mp3";
    audioElement.src = "https://ia801401.us.archive.org/4/items/jjj2020-08-30/01.%20K%20Line-.mp3";

    function startPlayback() {
        // .play() is a Promise
        playPromise = audioElement.play();
        if (playPromise == undefined) {
            return;
        }
        playPromise.then(function () {
            console.log('yay!')
        }).catch(function (err) {
            // Automatic playback failed.
            // Show a UI element to let the user manually start playback.
            console.log('Error: ' + err);
        });
    }

    var playButton = document.querySelector('#play');
    playButton.addEventListener('click', startPlayback);
});
connection.start();
$("#btnSend").on("click", function () {
    //var fromUser = $("#txtUser").val();
    //var message = $("#TxtMessage").val();

    connection.invoke("PlayMusic");
});

