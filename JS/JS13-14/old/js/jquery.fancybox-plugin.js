(function($){
  $.fn.fancybox = function(options){


    var defaults = {
      fontFamily: 'Arial'
    };
    var settings = $.extend(defaults, options);

    var $link = this;
    var $body = $('body');
    var $modal;
    var $overlay;
    function showModal(e) {
        var href = $link.attr('href');
        $modal = $('<div class="results"></div>');
        $overlay = $('<div class="fancybox-overlay"></div>');
        $overlay.css({
          'background-color': settings.overlayColor
        });

        $body.append($overlay);
        e.preventDefault();
        $body.append($modal);
        $overlay.one('click', hideModal);
    }

    function hideModal(){
        $modal.remove();
        $overlay.remove();
    }

    $link.on('click', showModal);
    return this;
  };


})(jQuery);
