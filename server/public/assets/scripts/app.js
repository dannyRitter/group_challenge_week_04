/**
 * Created by Danny on 11/3/15.
 */
var values = {};
var counter = 0;

$(document).ready(function(){
    onClick();

});

onClick = function(){
    $("#generateEmployee").submit(function(event){
        event.preventDefault();

        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
        });

        employeeRequest();

    });


};

function employeeRequest (){

        $("#status").text("Creating Employees...");
        $.ajax({
            type: "POST",
            url: "/bigData",
            data: values,
            beforeSend: function () {
                console.log("Here's the info getting sent", values)
            },
            success: function (data) {
                counter++;
                console.log("employee!!!!!: ", data);
                if (parseInt(values.numberEmployees) != counter) {
                    employeeRequest();
                }else{
                    counter =0;
                    $("#status").text("Employees Created!");
                }
            }
        });




}