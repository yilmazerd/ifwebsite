$(function () {
    var bar = '';
    bar += '<div class="col-md-3 col-sm-3 col-xs-3" style="min-height: 130px;">&nbsp;</div>'
    bar += '<div class="">'
    bar += '<div class="container">'
    bar += '<div class="row">'
    bar += '<div class="p-4 col-md-4">'
    bar += '<h2 class="mb-4">Instant Function</h2>'
    bar += '<p>Easiest way to try your ideas.</p>'
    bar += '</div>'
    bar += '<div class="p-4 col-md-4">'
    bar += '<h2 class="mb-4">Contact</h2>'
    bar += '<p> <a href="#" class="text-dark">'
    bar += '<i class="fa d-inline mr-3 text-muted fa-envelope-o"></i>i</a>nfo@instantfunction.com</p>'
    bar += '</div>'
bar += '<div class="p-4 col-md-4" >'
bar += '<h2 class="mb-4" contenteditable="true">Follow Us</h2>'
bar += '<form>'
bar += '<fieldset class="form-group">'
bar += '<div class="row">'
bar+= '<a href="https://twitter.com/intent/tweet?screen_name=instantfunction&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @InstantFunction</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
bar += '<div class="col-md-3"></div>'
bar += '<div class="col-md-3"></div>'
bar += '<div class="col-md-3"></div>'
bar += '</div>'
bar += '</fieldset>'
bar += '</form>'
bar += '</div>'
    bar += '</div>'
    bar += '<div class="row">'
    bar += '<div class="col-md-12 mt-3">'
    bar += '<p class="text-center"></p>'
    bar += '</div>'
    bar += '</div>'
    bar += '</div>'
    bar += '</div>'
 
    $("#bottomNavPlaceHolder").html(bar);
 
    var id = getValueByName("id");
    $("#" + id).addClass("active");
});


