function submitVote(choice) {
    if (choice == 1) {
        wait();
        var result = $("input[name='optionsRadios']:checked").attr("id");
        if (result != undefined) {
            setTimeout(function () {
                successful();
            }, 2000);
        } else {
            emptySet();
        }
    } else if (choice == 0) {
        wait();
        var obj = document.getElementsByName("optionsCheckbox");
        var checkBoxes = [];
        for(var i in obj){
            if(obj[i].checked)
                checkBoxes.push(obj[i].getAttribute("id"));
        }
        if (checkBoxes.length != 0) {
            setTimeout(function () {
                successful();
            }, 2000);
        } else {
            emptySet();
        }
    }
}

function wait() {
    $(".alert").html("");
    $("#submitButton").html("<i class=\"fa fa-circle-o-notch fa-spin\"></i> Please wait");
}

function successful() {
    $("#submitButton").html("<i class=\"fa fa-check\"></i> Thank you : )")
    $("#submitButton").removeClass("btn-default");
    $("#submitButton").addClass("btn-success");
    $("#submitButton").removeAttr("onclick");
}

function emptySet() {
    $(".alert").html("<br><div class=\"alert alert-warning\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a><strong>Going wrong！</strong>You must select at least 1 option.</div>")
    $("#submitButton").html("<i class=\"fa fa-rotate-right\"></i> Retry");
}

function connectionRefused() {
    $(".alert").html("<br><div class=\"alert alert-danger\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a><strong>Sorry, try again！</strong>Connection refused.</div>")
    $("#submitButton").html("<i class=\"fa fa-rotate-right\"></i> Retry");
}