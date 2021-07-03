
        
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
           
        ofst=now.getTimezoneOffset()*60000;
        utc=ofst+now.getTime();
        f= utc+(zone*3600000);
        l=now.toLocaleTimeString();
        nd= new Date(f);
         b=nd.toLocaleTimeString();
         j=(isitlocal)?l:b;
        if (document.all)
        worldclock.innerHTML=j
        else if (document.getElementById)
        document.getElementById("worldclock").innerHTML=j
        else if (document.layers){
        document.worldclockns.document.worldclockns2.document.write(j)
        document.worldclockns.document.worldclockns2.document.close()
        document.worldclockns.document.worldclockns2.document.write(j)
        
               
        }
        function calc(ofst) {
      
        d = new Date();
        utc= d.getTime() +(d.getTimezoneOffset()*60000);
      convert = new Date(utc + (3600000*ofst));
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',};
      return convert.toLocaleString(undefined,options);
    
        zone=z.options[z.selectedIndex].value;
        }
      
       
         document.getElementById("dd").innerHTML=calc(zone*1.037735849);
        setTimeout('WorldClock()',1000);
        var obj=document.getElementById("city");
        var result= obj.options[obj.selectedIndex].text;
        document.getElementById("loc").innerHTML=result;
              
        }
        
        window.onload=WorldClock
        
     
       
        
