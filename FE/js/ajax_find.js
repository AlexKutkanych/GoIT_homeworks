$(function() {
    var search_image = function() {
        // var searchForm = document.getElementById("find_form");
        // document.getElementById("myText").value = "Johnny Bravo";
        // searchForm.value = 'dog';
        var searchForm = document.getElementById("find_form").value;
        var API_KEY = '4643588-c041075ab4893ac7a50c51f21';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + searchForm + "&image_type=photo&pretty=true&per_page=8";
        $.getJSON(URL, function(data) {
            if (parseInt(data.totalHits) > 0)
                var mainGrid = document.createElement("div");
                mainGrid.classList.add('grid');
            $.each(data.hits, function(i, hit) {
                var gridItem = document.createElement("div");
                gridItem.classList.add('grid-item');
                gridItem.style.width = hit.imageWidth;
                gridItem.style.height = hit.imageHeight;
                var inner = '<img src=' + hit.webformatURL + '>';
                var desc = document.createElement("p");
                var innerdesc = hit.likes + " people liked me";
                desc.innerHTML = innerdesc;
                desc.classList.add('description');
                gridItem.classList.add('small');
                gridItem.innerHTML = inner;
                mainGrid.appendChild(gridItem);
                gridItem.appendChild(desc);
                $('#results').html(mainGrid);
            });
        });
    };

    $("#find_button").on('click', function() {
        search_image();
    });

    $("#find_form").keypress(function(e) {
        if (e.which === 13) {
            e.preventDefault();
            search_image();
        } 
    });

    // search_image('cat');

});


// $(function() {
//     var search_image = function() {
//         // var searchForm = document.getElementById("find_form");
//         // document.getElementById("myText").value = "Johnny Bravo";
//         // searchForm.value = 'dog';
//         var searchForm = document.getElementById("find_form").value;
//         var API_KEY = '4643588-c041075ab4893ac7a50c51f21';
//         var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + searchForm + "&image_type=photo&pretty=true&per_page=10&editors_choice=true&orientation=vertical&word=cat";
//         $.getJSON(URL, function(data) {
//             if (parseInt(data.totalHits) > 0)
//                 var ul = document.createElement("ul");
//             $.each(data.hits, function(i, hit) {
//                 var li = document.createElement("li");
//                 var inner = '<img src=' + hit.webformatURL + '>';
//                 var desc = document.createElement("p");
//                 var innerdesc = "I am liked by " + hit.likes + " people";
//                 desc.innerHTML = innerdesc;
//                 desc.classList.add('description');
//                 li.classList.add('small');
//                 li.innerHTML = inner;
//                 ul.appendChild(li);
//                 li.appendChild(desc);
//                 $('#results').html(ul);
//             });
//         });
//     };
//
//     $("#find_button").on('click', function() {
//         search_image();
//     });
//
//     $("#find_form").keypress(function(e) {
//         if (e.which === 13) {
//             search_image();
//         }
//     });
//
//     search_image();
// });
