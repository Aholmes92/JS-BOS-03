// find template and compile it
var resultsPlaceholder = $('#results'),
    playingCssClass = 'playing',
    audioObject = null,
    albumCoversHtml = "";


var fetchTracks = function (albumId, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId,
        success: function (response) {
            callback(response);
        }
    });
};

var addAlbumsToPage = function ( albums) {

    albums.items.forEach(function(album){
        albumCoversHtml += '<div style="background-image:url('+album.images[0].url+')" data-album-id="'+album.id+'" class="cover"></div>';    
    })
    resultsPlaceholder.append(albumCoversHtml);
}

var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            // console.log(response);
            // console.log(response.albums);
            // console.log(response.albums.items);
            // console.log(response.albums.items[0]);
            // console.log(response.albums.items[0].images);
            // console.log(response.albums.items[0].images[0].url);
            addAlbumsToPage(response.albums);
        }
    });
};

results.addEventListener('click', function (e) {
    var target = e.target;
    if (target !== null && target.classList.contains('cover')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            fetchTracks(target.getAttribute('data-album-id'), function (data) {
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function () {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function () {
                    target.classList.remove(playingCssClass);
                });
            });
        }
    }
});

$('#search-form').on('submit', function (e) {
    e.preventDefault();
    searchAlbums($('#query').val());
});