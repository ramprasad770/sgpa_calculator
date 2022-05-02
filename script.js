var x=1;
function add(){
     x=x+1;
     html='<input type="text" id="sub'+x+'" placeholder="Enter subject '+x+' Grade:">\
     <input type="text" id="grade'+x+'" placeholder="Enter subject '+x+' Credits:"><br>'
     var form=document.getElementById("get_form");
     form.innerHTML+=html;
 };
 function calculate(){
     let sum=0;
     let credits_sum=0;
     for(var i=1;i<x+1;i++)
    {
        var grade=document.getElementById("sub"+i).value;
        var credit=Number(document.getElementById("grade"+i).value);
        check=true;
        if(grade=="O"||grade=="o"){
            grade=10;
        }
        else if(grade=="S"||grade=="s"){
            grade=9;
        }
        else if(grade=="A"||grade=="a"){
            grade=8;
        }
        else if(grade=="B"||grade=="b"){
            grade=7;
        }
        else if(grade=="C"||grade=="c"){
            grade=6;
        }
        else if(grade=="D"||grade=="d"){
            grade=5;
        }
        else{
            var check=false;
            alert("Please enter correct grade.")
        }
        credits_sum=credits_sum+credit;
        let cred_points=grade*credit;
        sum=sum+cred_points;
    }
    if(check){
    let sgpa=sum/credits_sum;
    let percent=(sgpa*10)-7.5
    alert("Your SGPA is: "+sgpa+"\n"+"Your Percentage is: "+percent);   
 //result_heading='<h3>Your SGPA is: '+sgpa+'</h3><br>\
 //<h3Your Percentage is: '+percent+'</h3>';
 //document.getElementById("div_1").innerHTML=result_heading;
}
}