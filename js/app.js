$(document).ready(function(){
    $("#toggle1").click(function(){
        $(".inner1").slideToggle(600);
    });
    $("#toggle2").click(function(){
        $(".inner2").slideToggle(600);
    });
});

$(document).ready(function(){
    $("#loginT").click(function(){
        $(".login-view").fadeIn(),
        $('.sign-view').fadeOut(),
        $('.login-view-company').fadeOut(),
        $('.sign-view-company').fadeOut(),
        $('.login-view-admin').fadeOut(),
        $(".login-view-admin").fadeOut(),
        $('.login-check-admin').fadeOut(),
        $('.login-check-company').fadeOut(),
        $('.login-check').fadeOut()
    })
    $(".close").click(function(){
        $('.login-view').fadeOut()
    })
    })
    
    $(document).ready(function(){
    $("#signin").click(function(){
        $(".sign-view").fadeIn(),
        $('.login-view').fadeOut(),
        $('.sign-view-company').fadeOut(),
        $('.login-view-company').fadeOut(),
        $('.login-view-admin').fadeOut(),
        $('.login-check-admin').fadeOut(),
        $('.login-check-company').fadeOut(),
        $('.login-check').fadeOut()
    })
    $(".close2").click(function(){
        $('.sign-view').fadeOut()
    })
})

$(document).ready(function(){
    $("#loginO").click(function(){
        $(".login-view-company").fadeIn(),
        $('.sign-view-company').fadeOut(),
        $('.login-view').fadeOut(),
        $('.sign-view').fadeOut(),
        $('.login-check-admin').fadeOut(),
        $('.login-check-admin').fadeOut(),
        $('.login-check-company').fadeOut(),
        $('.login-check').fadeOut()
    })
    $(".close").click(function(){
        $('.login-view-company').fadeOut()
    })
    })
    
    $(document).ready(function(){
    $("#signin-company").click(function(){
        $(".sign-view-company").fadeIn(),
        $('.login-view').fadeOut()
    })
    $(".close2").click(function(){
        $('.sign-view-company').fadeOut()
    })
})

$(document).ready(function(){
    $("#add").click(function(){
        $(".login-view-company").fadeIn(),
        $('.sign-view-company').fadeOut()
    })
    $(".close").click(function(){
        $('.login-view-company').fadeOut()
    })
    })
    
    $(document).ready(function(){
    $("#signin-company").click(function(){
        $(".sign-view-company").fadeIn(),
        $('.login-view-company').fadeOut()
    })
    $(".close2").click(function(){
        $('.sign-view-company').fadeOut()
    })
})

$(document).ready(function(){
    $("#delete").click(function(){
        $(".login-view-company").fadeIn(),
        $('.sign-view-company').fadeOut()
    })
    $(".close").click(function(){
        $('.login-view-company').fadeOut()
    })
    })
    
    $(document).ready(function(){
    $("#signin-company").click(function(){
        $(".sign-view-company").fadeIn(),
        $('.login-view-company').fadeOut()
    })
    $(".close2").click(function(){
        $('.sign-view-company').fadeOut()
    })
})

$(document).ready(function(){
    $("#addTrainee").click(function(){
        $(".login-view").fadeIn(),
        $('.sign-view').fadeOut()
    })
    $(".close").click(function(){
        $('.login-view').fadeOut()
    })
    })
    
    $(document).ready(function(){
    $("#signin").click(function(){
        $(".sign-view").fadeIn(),
        $('.login-view').fadeOut()
    })
    $(".close2").click(function(){
        $('.sign-view').fadeOut()
    })
})

$(document).ready(function(){
    $("#loginA").click(function(){
        $(".login-view-admin").fadeIn(),
        $(".login-view").fadeOut(),
        $('.sign-view').fadeOut(),
        $('.login-view-company').fadeOut(),
        $('.sign-view-company').fadeOut(),
        $('.login-check-admin').fadeOut(),
        $('.login-check-company').fadeOut(),
        $('.login-check').fadeOut()
    })
    $(".close").click(function(){
        $('.login-view-admin').fadeOut()
    })
})


$(document).ready(function(){
    $(".check").click(function(){
        $(".login-view").fadeIn(),
        $('.login-check').fadeOut(),
        $('.sign-view').fadeOut(),
        $('.login-view-company').fadeOut(),
        $('.sign-view-company').fadeOut(),
        $('.login-view-admin').fadeOut()
    })
    $(".close3").click(function(){
        $('.login-check').fadeOut(),
        $('.login-check-company').fadeOut(),
        $('.login-check-admin').fadeOut()
    })
})

$(document).ready(function(){
    $(".check-company").click(function(){
        $(".login-view-company").fadeIn(),
        $('.sign-view-company').fadeOut(),
        $('.login-check-company').fadeOut(),
        $('.login-view').fadeOut(),
        $('.sign-view').fadeOut(),
        $('.login-view-admin').fadeOut()
    })
    $(".close3").click(function(){
        $('.login-check-company').fadeOut(),
        $('.login-check').fadeOut(),
        $('.login-check-admin').fadeOut()
    })
})

$(document).ready(function(){
    $(".check-admin").click(function(){
        $(".login-view-admin").fadeIn(),
        $(".login-view").fadeOut(),
        $('.sign-view').fadeOut(),
        $('.login-view-company').fadeOut(),
        $('.sign-view-company').fadeOut(),
        $('.login-check-admin').fadeOut()
    })
    $(".close3").click(function(){
        $('.login-check-admin').fadeOut(),
        $('.login-check').fadeOut(),
        $('.login-check-company').fadeOut()
    })
})