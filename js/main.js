$(function() {

    $.ajax({

        url: "./data/usaid.json",
        type: "GET",
        dataType : "json",
     
        // code to run if the request succeeds;
        // the response is passed to the function
        success: function( json ) {

            var theme = $('#catalog').data("template-theme");
            theme = (theme ? theme : 'default');
            theme = './themes/' + theme + '/datasets.mst';

             $.get(theme, function(template) {
                Mustache.parse(template);   // optional, speeds up future uses
                var rendered = Mustache.render(template, {datasets:json});
                $('#catalog').html(rendered);

                $('#catalog table').DataTable();
             });

             

        },
     
        // code to run if the request fails; the raw request and
        // status codes are passed to the function
        error: function( xhr, status, errorThrown ) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        }
    });

});