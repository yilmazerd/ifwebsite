$(function () {
    var bar = '';
    bar += '<nav id="nav-placeholder" class="navbar navbar-expand-md navbar-light">'
    bar += '<div class="container"> <a class="navbar-brand text-primary" href="index.html">'
    bar += '<img src="sqlg1.png" width="30" height="30" class="d-inline-block align-top" alt="">'
    bar += '<b> Instant Function (Beta) </b>'
    bar += '</a> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">'
    bar += '<span class="navbar-toggler-icon"></span>'
    bar += '</button>'
    bar += '<div class="collapse navbar-collapse" id="navbar4">'
    bar += '<ul class="navbar-nav ml-auto">'
    bar += '<li class="nav-item"> <a class="nav-link" href="features.html">Features</a> </li>'
    bar += '<li class="nav-item"> <a class="nav-link" href="mockserver.html">Mock</a> </li>'
    bar += '<li class="nav-item"> <a class="nav-link" href="#">About</a> </li>'
    bar += '</ul> <a class="btn navbar-btn ml-md-2 btn-outline-primary" href="create-your-function.html">Create your function</a>'
    bar += '</div>'
    bar += '</div>'
    bar += '</nav>'
 
    $("#nav-placeholder").html(bar);
 
    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

