var sdz = {};

$(function() {
    sdz.init();
});

sdz.init = function() {
    var $article = $("article.gallery:first");
    if($article.length < 1) {
        return;
    }

    sdz.initNavigation($article.data("bind"));
    $(".iqadgalleryshim, .iqadgalleryoverlay").remove();
};

sdz.initNavigation = function($json) {
    $(document).keyup(function(e) {
        switch(e.which) {
            case 37: // left
                // first image -> cannot go back
                if ($json.imageGallery.prevURL == $json.imageGallery.baseURL + "-" + $json.imageGallery.total) {
                    return;
                }
                window.location.href = $json.imageGallery.prevURL + "#wrapper";
                break;

            case 39: // right
                // last image -> cannot go further
                if ($json.imageGallery.nextURL == $json.imageGallery.baseURL + "-" + $json.imageGallery.total) {
                    return;
                }
                window.location.href = $json.imageGallery.nextURL + "#wrapper";
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
};