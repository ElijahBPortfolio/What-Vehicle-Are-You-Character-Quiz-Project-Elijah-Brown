// Variables
var submit = 1;
// Variables

// Fix this code. Follow the example in the car conditional

$(".submit-button").click(function (){
    let wheels = Number($(".wheelAmount").val());
    let vehicle = $(".vehicleType").val();
    let surveyAnswered = 0;
//     Do This!	
    if (vehicle === "car") {
        $("h3").show();
        $(".surveyAnswerCount").show();
        $(".surveyAnswerCount").text(surveyAnswered += submit);
        submit += 1;
        $(".description").text("you are a" + " " + vehicle + " " + "and you have" + " " + wheels + " " + "wheels and travel on roads and highways!");
        $(".carImage").show();
        $(".planeImage").hide();
        $(".trainImage").hide();
        $(".boatImage").hide();
        $(".errorMessage").hide();
  
    } else if (vehicle === "plane") {
        $("h3").show();
        $(".surveyAnswerCount").show();
        $(".surveyAnswerCount").text(surveyAnswered += submit);
        submit += 1;
        $(".description").text("you are a" + " " + vehicle + " " + "and you have" + " " + wheels + " " + "wheels and fly in the sky!");
        $(".planeImage").show();
        $(".carImage").hide();
        $(".boatImage").hide();
        $(".trainImage").hide();
        $(".errorMessage").hide();
    } else if (vehicle === "boat") {
        $("h3").show();
        $(".surveyAnswerCount").show();
        $(".surveyAnswerCount").text(surveyAnswered += submit);
        submit += 1;
        $(".description").text("you are a" + " " + vehicle + " " + "and you have" + " " + wheels + " " + "wheels and travel on water, from the lakes to the ocean!");
        $(".boatImage").show();
        $(".carImage").hide();
        $(".planeImage").hide();
        $(".trainImage").hide();
        $(".errorMessage").hide();
    } else if (vehicle === "train") {
        $("h3").show();
        $(".surveyAnswerCount").show();
        $(".surveyAnswerCount").text(surveyAnswered += submit);
        submit += 1;
        $(".description").text("you are a" + " " + vehicle + " " + "and you have" + " " + wheels + " " + "wheels and transport people through the subway!");
        $(".trainImage").show();
        $(".carImage").hide();
        $(".boatImage").hide();
        $(".planeImage").hide();
        $(".errorMessage").hide();
    } else {
        $(".errorMessage").show();
        $("h3").hide();
        $(".surveyAnswerCount").hide();
        $(".description").hide();
        $(".carImage").hide();
        $(".trainImage").hide();
        $(".boatImage").hide();
        $(".planeImage").hide();
    }
});
// Submission counter: Success
// figure out how to restrict inputs to strings, and then identify specific string values
// Then figure out how to display certain hidden images based on the string value

// Conditional Lesson Notes: the && operator in Javascript stands for "and".
// by wrapping a jQuery val() in Number() [Ex. Number($(".myClass").val());], it strictly returns the value as a number.