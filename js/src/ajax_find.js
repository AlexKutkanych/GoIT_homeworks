$(function() {
    var search_image = function() {
        var searchForm = document.getElementById("find_form").value;
        var API_KEY = '4643588-c041075ab4893ac7a50c51f21';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + searchForm + "&image_type=photo&pretty=true&per_page=14";
        $.getJSON(URL, function(images) {
            if (parseInt(images.totalHits) > 0)
            $.each(images.hits, function(i, hit) {
            });

            // console.log(images.hits[0]);
            var myPage = $('#mypage').html();
            var info = images.hits;
            var content = tmpl(myPage, {data: info});
            $('#results').append(content);
            var $container = $('.grid');
             // Инициализация Масонри, после загрузки изображений
             $container.imagesLoaded( function() {
             $container.masonry({
                 itemSelector: '.grid-item',
                 columnWidth: '.grid-item',
                 percentPosition: true,
                //  gutter: 5 //horizontal space
                 });
             });
          });
    };

    $("#find_button").on('click', function() {
      $('.grid').remove();
        search_image();
    });

    $("#find_form").keypress(function(e) {
        if (e.which === 13) {
            e.preventDefault();
            $('.grid').remove();
            search_image();
        }
    });
        search_image();
});
