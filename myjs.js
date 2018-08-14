/**
 * Created by maw42
 *
 */
 function form_submit(){
		
    			
	var date = new Date();
var hours = date.getHours();
    var nm = document.getElementById("name").value;	


if ((hours >= 1) && (hours<=12)){
alert("Good Morning,   " + nm);
location.reload();
} else if((hours>12)&&(hours<18)){
	alert("Good Afternoon,   "+nm);
	location.reload();
} else {
	alert("Good evening,   " + nm);
location.reload();
}
                        }
