
        
        if (document.all||document.getElementById)
        document.write('<span id="worldclock" style="font:bold 16px Arial;"></span><br />')
        now=new Date();
        zone=0;
        isitlocal=true;
        ampm='';
        
        function updateclock(z){
        zone=z.options[z.selectedIndex].value;
        isitlocal=(z.options[0].selected)?true:false;
        }
        
        function WorldClock(){
            
            
         now=new Date();
           
        ofst=now.getTimezoneOffset()/60;
        secs=now.getSeconds();
        sec=-1.575+Math.PI*secs/30;
        mins=now.getMinutes();
        min=-1.575+Math.PI*mins/30;
        
        hr=(isitlocal)?now.getHours():(now.getHours() + parseInt(ofst)) + parseInt(zone);
        hrs=-1.575+Math.PI*hr/6+Math.PI*parseInt(now.getMinutes())/360;
        if (hr < 0) hr+=24;
        if (hr > 23) hr-=24;
        ampm = (hr > 11)?"PM":"AM";
        statusampm = ampm.toLowerCase();
        
        hr2 = hr;
        if (hr2 == 0) hr2=12;
        (hr2 < 13)?hr2:hr2 %= 12;
        if (hr2<10) hr2="0"+hr2
        
        var finaltime=hr2+':'+((mins < 10)?"0"+mins:mins)+':'+((secs < 10)?"0"+secs:secs)+' '+statusampm;
        
        if (document.all)
        worldclock.innerHTML=finaltime
        else if (document.getElementById)
        document.getElementById("worldclock").innerHTML=finaltime
        else if (document.layers){
        document.worldclockns.document.worldclockns2.document.write(finaltime)
        document.worldclockns.document.worldclockns2.document.close()
        document.worldclockns.document.worldclockns2.document.write(finaltime)
        
               
        }
        function calc(ofst) {
      
        d = new Date();
        utc= d.getTime() +(d.getTimezoneOffset()*60000);
      convert = new Date(utc + (3600000*ofst));
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',};
      return convert.toLocaleString(undefined,options);
    
        zone=z.options[z.selectedIndex].value;
        }
        //  console.log(calc(zone*1.037735849));
       
         document.getElementById("dd").innerHTML=calc(zone*1.037735849);
        setTimeout('WorldClock()',1000);
        var obj=document.getElementById("city");
        var result= obj.options[obj.selectedIndex].text;
        document.getElementById("loc").innerHTML=result;
              
        }
        
        window.onload=WorldClock
        
     
       
        