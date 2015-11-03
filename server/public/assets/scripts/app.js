/**
 * Created by Danny on 11/3/15.
 */
var values = {};

$(document).ready(function(){
    onClick();

});

onClick = function(){
    $("#generateEmployee").submit(function(event){
        event.preventDefault();

        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
        });
        console.log(values);
    });

    $.ajax({
        type: "POST",
        url: "/bigData",
        data: values,
        success: function(data){
            console.log(data);
        }
    })
};