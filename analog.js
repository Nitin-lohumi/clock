    setInterval(() => {
    d= new Date();
    h= d.getHours();
    m= d.getMinutes();
    s= d.getSeconds();
    let session ="AM";
    

    h_rotate =30*h +m/2;

    m_rotate = 6 * m;

    s_rotate = 6 * s;  

    hour.style.transform =`rotate(${h_rotate}deg)`;
    minute.style.transform =`rotate(${m_rotate}deg)`;
    second.style.transform =`rotate(${s_rotate}deg)`;
    
    h = h-12;

    if(h<=12){
        session ="PM";
    }

    document.getElementById("h").innerHTML = h + ":"+"   Hours";
    document.getElementById("m").innerHTML = m +":"+ "   Minutes";
    document.getElementById("s").innerHTML = s + " "+"   Seconds";
    document.getElementById("ses").innerHTML = session;
    
   

}, 1000);



