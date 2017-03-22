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
            search_image();
        }
    });
        search_image();
});

//random pic on load

// $(function() {
//     var search_image = function() {
//         // var searchForm = document.getElementById("find_form");
//         // document.getElementById("myText").value = "Johnny Bravo";
//         // searchForm.value = 'dog';
//         var searchForm = document.getElementById("find_form").value;
//         var API_KEY = '4643588-c041075ab4893ac7a50c51f21';
//         var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + searchForm + "&image_type=photo&pretty=true&per_page=14";
//         $.getJSON(URL, function(images) {
//             if (parseInt(images.totalHits) > 0)
//             // var mainGrid = document.createElement("div");
//             // mainGrid.classList.add('grid');
//             $.each(images.hits, function(i, hit) {
//               // var gridItem = document.createElement("div");
//               // gridItem.classList.add('grid-item');
//               // gridItem.style.width = hit.imageWidth;
//               // gridItem.style.height = hit.imageHeight;
//               // var inner = '<img src=' + hit.webformatURL + '>';
//               // var desc = document.createElement("p");
//               // var innerdesc = hit.likes + " people liked me";
//               // desc.innerHTML = innerdesc;
//               // desc.classList.add('description');
//               // gridItem.classList.add('small');
//               // gridItem.innerHTML = inner;
//               // mainGrid.appendChild(gridItem);
//               // gridItem.appendChild(desc);
//               // $('#results').html(mainGrid);
//             });
//
//             console.log(images.hits[0]);
//             var myPage = $('#mypage').html();
//             var info = images.hits;
//             var content = tmpl(myPage, {data: info});
//             $('#results').append(content);
//             var $container = $('.grid');
//              // Инициализация Масонри, после загрузки изображений
//              $container.imagesLoaded( function() {
//              $container.masonry({
//                  itemSelector: '.grid-item',
//                  columnWidth: '.grid-item',
//                  percentPosition: true,
//                 //  gutter: 5 //horizontal space
//                  });
//              });
//           });
//     };
//
//     $("#find_button").on('click', function() {
//       $('.grid').remove();
//         search_image();
//     });
//
//     $("#find_form").keypress(function(e) {
//         if (e.which === 13) {
//             e.preventDefault();
//             search_image();
//         }
//     });
//         search_image();
// });
