$(function(){
      
        $('#mapid').gmap3({
          map:{
            options:{
              center:[46.578498,2.457275],
              zoom: 5
            }
          },
          marker:{
            values:[
              {latLng:[48.8620722, 2.352047], data:"Paris !"},
              {address:"86000 Poitiers, France", data:"Poitiers : great city !"},
              {address:"66000 Perpignan, France", data:"Perpignan ! <br> GO USAP !", options:{icon: "http://maps.google.com/mapfiles/marker_green.png"}}
            ],
            options:{
              draggable: false
            },
            events:{
              mouseover: function(marker, event, context){
                var map = $(this).gmap3("get"),
                  infowindow = $(this).gmap3({get:{name:"infowindow"}});
                if (infowindow){
                  infowindow.open(map, marker);
                  infowindow.setContent(context.data);
                } else {
                  $(this).gmap3({
                    infowindow:{
                      anchor:marker, 
                      options:{content: context.data}
                    }
                  });
                }
              },
              mouseout: function(){
                var infowindow = $(this).gmap3({get:{name:"infowindow"}});
                if (infowindow){
                  infowindow.close();
                }
              }
            }
          }
        });
      });



 //===================================================
    // contact form
    //===================================================
// validate contact form
$('#error-msg').hide();
$('#sucess-msg').hide();
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Name is required",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "Email is required"
            },
            message: {
                required: "You have to write something to send this form.",
                minlength: "thats all? really?"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process.php",
                success: function() {
                  $('#sucess-msg').show();
                },
                error: function() {
                  $('#error-msg').show();
                }
            });
        }
    });
});