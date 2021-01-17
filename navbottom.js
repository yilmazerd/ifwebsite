$(function () {
    var bar = '';
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
    bar += '<div class="p-4 col-md-4">'
    bar += '<h2 class="mb-4">Subscribe to news</h2>'
    bar += '<form>'
    bar += '<fieldset class="form-group"> <label for="exampleInputEmail1">Get our newsletter</label> <input type="email" class="form-control" placeholder="Enter email"> </fieldset> <button type="submit" class="btn btn-outline-dark">Submit</button>'
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


