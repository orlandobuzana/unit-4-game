//===================Heros====================
var enemyChoice=[];
var heroChoice=[];
 var ch1={
    "Health Points":300,
    "Attack Power":70,
    "Counter Attack Power":Math.floor(Math.random()*2)
 };
 var ch2={
    "Health Points":300,
    "Attack Power":70,
    "Counter Attack Power":Math.floor(Math.random()*2)
 };

 var ch3={
    "Health Points":300,
    "Attack Power":70,
    "Counter Attack Power":Math.floor(Math.random()*2)
 };

 var ch4={
    "Health Points":300,
    "Attack Power":70,
    "Counter Attack Power":Math.floor(Math.random()*2)
 };


//================FUNCTIONS===================

//===Set-up Players===
function displayPlayers(){
    //==Hero1==
    var p1 ={
    hp:$("#ch1").append('<p> HP: '+ch1["Health Points"]+'<p>'),
    atck:$("#ch1").append('<p> Attack: '+ch1["Attack Power"]+'<p>'),
    catck:$("#ch1").append('<p> Couter attack: 50%<p>')
    };
    //==Hero2==
    var p2 =[
    $("#ch2").append('<p> HP: '+ch2["Health Points"]+'<p>'),
    $("#ch2").append('<p> Attack: '+ch2["Attack Power"]+'<p>'),
    $("#ch2").append('<p> Couter attack: 50%</h5>')
    ];
    //==Hero3==
    var p3 = [
    $("#ch3").append('<p> HP: '+ch3["Health Points"]+'<p>'),
    $("#ch3").append('<p> Attack: '+ch3["Attack Power"]+'<p>'),
    $("#ch3").append('<p> Couter attack: 50%</h5>')
    ];
    //==Hero4==
    var p4 = [
    $("#ch4").append('<p> HP: '+ch4["Attack Power"]+'<p>'),
    $("#ch4").append('<p> Attack: '+ch4["Health Points"]+'<p>'),
    $("#ch4").append('<p> Couter attack: 50%<p>')
    ];
}
//select Player
function selectPlayer(){
    
    var heroIds = [];
    $("#players").find("div").each(function(){ heroIds.push(this.id); });
    for(var i = 0;i<heroIds.length;i++){
        heroIds[i] = "#"+heroIds[i];
    };
    
    //click event
    //player1
    $(heroIds[0]).on('click',function(){
        heroChoice.push(heroIds[0]);
        $(heroIds[1]).appendTo('#enemies');
        $(heroIds[2]).appendTo('#enemies');
        $(heroIds[3]).appendTo('#enemies');
        //add vs and show potential enemies
        $("#vs").html('<h3>Choose your enemy</h3>');
        battleSetUp(); 
        selectEnemy();
        return heroChoice; 

    });
   
       //player2
       $(heroIds[1]).on('click',function(){
        heroChoice.push(heroIds[1]);
        $(heroIds[0]).appendTo('#enemies');
        $(heroIds[2]).appendTo('#enemies');
        $(heroIds[3]).appendTo('#enemies');
        //add vs and show potential enemies
        $("#vs").html('<h3>Choose your enemy</h3>');
        battleSetUp(); 
        selectEnemy(); 
        return heroChoice;

    });
       //player3
       $(heroIds[2]).on('click',function(){
        heroChoice.push(heroIds[2]);
        $(heroIds[0]).appendTo('#enemies');
        $(heroIds[1]).appendTo('#enemies');
        $(heroIds[3]).appendTo('#enemies');
        //add vs and show potential enemies
        $("#vs").html('<h3>Choose your enemy</h3>');
        battleSetUp(); 
        selectEnemy(); 
        return heroChoice;

    });
       //player4
       $(heroIds[3]).on('click',function(){
        heroChoice.push(heroIds[3]);
        $(heroIds[0]).appendTo('#enemies');
        $(heroIds[1]).appendTo('#enemies');
        $(heroIds[2]).appendTo('#enemies');
        //add vs and show potential enemies
        $("#vs").html('<h3>Choose your enemy</h3>');
        battleSetUp(); 
        selectEnemy(); 
        return heroChoice;

    });
}
//setup battle
function battleSetUp(){
    $("#ch1").off();
    $("#ch2").off();
    $("#ch3").off();
    $("#ch4").off();
    
}
//select enemy
function selectEnemy(){
    
    var iDs = [];
    $("#enemies").find("div").each(function(){ iDs.push(this.id); });
    for(var i = 0;i<iDs.length;i++){
        iDs[i] = "#"+iDs[i];
    };
    
    $(iDs[0]).on('click',function(){
        enemyChoice.push(iDs[0]);
        $(iDs[1]).css('display','none');
        $(iDs[2]).css('display','none');
        atackSettup();
        return enemyChoice;
    });
    $(iDs[1]).on('click',function(){
        enemyChoice.push(iDs[1]);
        $(iDs[0]).css('display','none');
        $(iDs[2]).css('display','none');
        //attack?
        atackSettup();
        return enemyChoice;
        
    });
    $(iDs[2]).on('click',function(){
        enemyChoice.push(iDs[2]);
        $(iDs[0]).css('display','none');
        $(iDs[1]).css('display','none');
        //attack?
        atackSettup();
        return enemyChoice;
    });

 

}
function atackSettup(){
    $("#vs").html('<h3 id="atkBtn" class="bg-dark col-md-5 text-center">Attack</h3>');
    atack();
}
function atack(){
    console.log(heroChoice+'VS'+enemyChoice);
        
       /* var p1 = $("#players").find("div").each(function(){ 
            p1.filter(":visible");
            p1=('#'+this.id); 
            console.log(p1);
        });
        var comp = $("#enemies").find("div").each(function(){ 
            comp=('#'+this.id); 
            console.log(comp);
        });


*/
    
}
displayPlayers();
selectPlayer();
