document.addEventListener("DOMContentLoaded",
    function (event){
        document.querySelector("button")
        .addEventListener("click", function() {
            $ajaxUtils
            .sendGetRequest("http://localhost:3000/Week5/jsonEx/data/name.json",
                function(res) {
                    var message =
                        res.firstName + " " + res.lastName;
                        if (res.likesChineseFood) {
                            message += " likes Chinese Food";
                        }
                        else {
                            message += " doesn't like Chinese Food";
                        }
                        message += " and uses ";
                        message += res.numberOfDisplays;
                        message += " displays for coding.";

                        document.querySelector("#content")
                        .innerHTML = "<h2>" + message + "</h2>";
                });
        });
    }
);