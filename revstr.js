function rev(){
    var str = document.getElementById("str").value;
    var revstr = ""
    var str2 = str.toLowerCase();
    var a=0,e=0,i=0,o=0,u=0;

    for(var j=str.length-1;j>=0;j--)
    {
        revstr+=str[j]
        if(str2[j]=="a"){a++}else
        if(str2[j]=="e"){e++}else
        if(str2[j]=="i"){i++}else
        if(str2[j]=="o"){o++}else
        if(str2[j]=="u"){u++}
    }

    document.getElementById("err").innerHTML=   "Reverse = " +revstr
                                                +"<br>No.of a = "+a
                                                +"<br>No.of e = "+e
                                                +"<br>No.of i = "+i
                                                +"<br>No.of o = "+o
                                                +"<br>No.of u = "+u
  
    }

    function colr(){
        document.getElementById("str").style.backgroundColor='dodgerblue';
        document.getElementById("str").style.color='red';
    }

    function change1(ab){
        ab.style.backgroundColor='yellow';
    }
    function change2(ab){
        ab.style.backgroundColor='green';
    }

    
    
