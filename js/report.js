$(document).ready(function () {
    //what kind of interface we want at the start 
  const APIKEY = "d2d02cc0510d5401d5ef408bdcb358168c7bf";
    // $("#update-contact-container").hide();
  $("#success-msg col-12").hide();
  
    //[STEP 1]: Create our submit form listener
  $("#feedback-submit").on("click", function (e) {
      //prevent default action of the button 
    e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
    let Name = $("#feed-name").val();
    let Email = $("#feed-email").val();
    let Report = $("#feed-msg").val();

      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
    let jsondata = {
      "name": Name,
      "message": Report,
      "email": Email
    };

    console.log(jsondata);
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
    // let settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://quizwebsiteasg2-c11c.restdb.io/rest/reports",
    //   "method": "POST", //[cher] we will use post to send info
    //   "headers": {
    //     "content-type": "application/json",
    //     "x-apikey": APIKEY,
    //     "cache-control": "no-cache"
    //   },
    //   "processData": false,
    //   "data": JSON.stringify(jsondata),
    //   "beforeSend": function(){
    //       //@TODO use loading bar instead
    //       //disable our button or show loading bar
    //     $("#feedback-submit").prop( "disabled", true);
    //       //clear our form using the form id and triggering it's reset feature
    //     $("#feedback-form").trigger("reset");
    //   }
    // }
    

    // $.ajax(settings).done(function (response){
    //     console.log(response);

    //     $("#success-msg col-12").show();
    // })

    $.ajax({
      "async": true,
      "crossDomain": true,
      "url": "https://quizwebsiteasg2-c11c.restdb.io/rest/reports",
      "method": "POST", //[cher] we will use post to send info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      // "data": jsondata,
      // "data": JSON.stringify(jsondata),
      "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
        $("#feedback-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
        $("#feedback-form").trigger("reset");
      }
    })

  })
})
