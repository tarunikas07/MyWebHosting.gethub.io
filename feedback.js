   function submit_feedback() {

                   var username = document.getElementById("feedback-name").value;

                var email = document.getElementById("feedback-email").value;

                var feedback = document.getElementById("feedback-comment").value;

                if ( username == "" || email == "" || feedback == ""){

                alert("Please fill the feedback");

                return false;

                }

                else{                     

                                alert("Feedback Submitted Successfully");

                                location.reload();

                                return false;