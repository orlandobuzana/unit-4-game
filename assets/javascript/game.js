//===================global-variables====================
var enemyChoice=[];
var heroChoice=[];
var playersOption = [ch1,ch2,ch3];

 var ch1={
    hp:301,
    attckPower:71,
    counterAttck:Math.floor(Math.random()*2)
 };
 var ch2={
    hp:302,
    attckPower:72,
    counterAttck:Math.floor(Math.random()*2)
 };

 var ch3={
    hp:303,
    attckPower:73,
    counterAttck:Math.floor(Math.random()*2)
 };

 var ch4={
    hp:304,
    attckPower:74,
    counterAttck:Math.floor(Math.random()*2)
 };


//================FUNCTIONS===================

//===Set-up Players===
function displayPlayers(){
    //==Hero1==
    $("#ch1").append('<p id = "hp" > HP: '+ch1.hp+'<p>'),
    $("#ch1").append('<p id = "ch1atk"> Attack: '+ch1.attckPower+'<p>'),
    $("#ch1").append('<p id = "ch1cnt"> Couter attack: 50%<p>')
    //==Hero2==
    $("#ch2").append('<p id = "hp" > HP: '+ch2.hp+'<p>'),
    $("#ch2").append('<p id = "ch2atk"> Attack: '+ch2.attckPower+'<p>'),
    $("#ch2").append('<p id = "ch2cnt"> Couter attack: 50%</h5>')
    //==He"
    $("#ch3").append('<p id = "hp" > HP: '+ch3.hp+'<p>'),
    $("#ch3").append('<p id = "ch3atk"> Attack: '+ch3.attckPower+'<p>'),
    $("#ch3").append('<p id = "ch3cnt"> Couter attack: 50%</h5>')
    //==He"
    $("#ch4").append('<p id = "hp" > HP: '+ch4.hp+'<p>'),
    $("#ch4").append('<p id = "ch4atk"> Attack: '+ch4.attckPower+'<p>'),
    $("#ch4").append('<p id = "ch4cnt"> Couter attack: 50%<p>')   
}
//select Player
function selectPlayer(){
    //add Ids from all the players in currently display #players to heIds array
    var heroIds = [];
    $("#players").find("div").each(function(){ heroIds.push(this.id); });
    for(var i = 0;i<heroIds.length;i++){
        heroIds[i] = "#"+heroIds[i];
    };   
    //click event
    //player1
    $(heroIds[0]).on('click',function(){
        heroChoice.push(heroIds[0]);
        //add to enemies display
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
        //add to enemies display
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
        //add to enemies display
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
        //add to enemies display
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

//select a enemy 
function selectEnemy(){
    var iDs = [];
    $("#enemies").find("div").each(function(){ iDs.push(this.id); });
    for(var i = 0;i<iDs.length;i++){
        iDs[i] = "#"+iDs[i];
    };
    
    $(iDs[0]).on('click',function(){
        enemyChoice.push(iDs[0]);
        $(iDs[1]).hide('slow');
        $(iDs[2]).hide('slow');
        atackSettup();
        return enemyChoice;
    });
    $(iDs[1]).on('click',function(){
        enemyChoice.push(iDs[1]);
        $(iDs[0]).hide('slow');
        $(iDs[2]).hide('slow');
        //attack?
        atackSettup();
        return enemyChoice;    
    });
    $(iDs[2]).on('click',function(){
        enemyChoice.push(iDs[2]);
        $(iDs[0]).hide('slow');
        $(iDs[1]).hide('slow');
        //attack?
        atackSettup();
        return enemyChoice;
    });
}
//setup battle
function battleSetUp(){
    $("#ch1").off();
    $("#ch2").off();
    $("#ch3").off();
    $("#ch4").off();   
}
function atackSettup(){
    $("#vs").html('<h3 id="atkBtn" class="bg-dark col-md-5 text-center">Attack</h3>');
    battleSetUp();
    atack();
}
function atack(){
    //get hero choice and assign atributes
    var p1CurrentHp;
    var p1CurrentAttck;
    var p1CounterAttack;
    var p1 = heroChoice[0];//.slice(1);
    console.log(p1);
    if(p1 === "#ch1"){
        p1 = ch1;
        p1CurrentAttck = ch1.attckPower;
        p1CurrentHp = ch1.hp;
        p1CounterAttack = ch1.counterAttck;
    }else if(p1 === "#ch2"){
        p1 = ch2;
        p1CurrentAttck = ch2.attckPower;
        p1CurrentHp = ch2.hp;
        p1CounterAttack = ch2.counterAttck;
    }else if(p1 ==="#ch3"){
        p1 = ch3;
        p1CurrentAttck = ch3.attckPower;
        p1CurrentHp = ch3.hp;
        p1CounterAttack = ch3.counterAttck;
    }else{
        p1 = ch4;
        p1CurrentAttck = ch4.attckPower;
        p1CurrentHp = ch4.hp;
        p1CounterAttack = ch4.counterAttck;
    }
    console.log(p1CurrentAttck);
    console.log(p1CurrentHp);
    console.log(p1CounterAttack);
    console.log(p1);
    //get enemy choice and assign attributes
    var p2CurrentHp;
    var p2CurrentAttck;
    var p2CounterAttack;
    var p2 = enemyChoice[0];//.slice(1);
    console.log(p2);
    if(p2 === "#ch1"){
        p2 = ch1;
        p2CurrentAttck = ch1.attckPower;
        p2CurrentHp = ch1.hp;
        p2CounterAttack = ch1.counterAttck;
    }else if(p2 === "#ch2"){
        p2 = ch2;
        p2CurrentAttck = ch2.attckPower;
        p2CurrentHp = ch2.hp;
        p2CounterAttack = ch2.counterAttck;
    }else if(p2 ==="#ch3"){
        p2 = ch3;
        p2CurrentAttck = ch3.attckPower;
        p2CurrentHp = ch3.hp;
        p2CounterAttack = ch3.counterAttck;
    }else if(p2==="#ch4"){
        p2 = ch4;
        p2CurrentAttck = ch4.attckPower;
        p2CurrentHp = ch4.hp;
        p2CounterAttack = ch4.counterAttck;
    }
    console.log(p2CurrentAttck);
    console.log(p2CurrentHp);
    console.log(p2CounterAttack);
    console.log(p2.hp+1);

    $("#atkBtn").on('click',function(){
        console.log("clicked");
        var atk_result = p1CurrentAttck - p2CurrentHp;
        console.log("result of the atack"+atk_result);
        p2.hp = atk_result;
        $(enemyChoice[0]).children("hp").text(atk_result);
        $(enemyChoice[0]).find("hp").each(function(){ this.html(atk_result) });
        console.log("updated"+p2.hp);
        

        //todo finish the battle results
    })   
}
//=========  Start Game  ===========
// game condition needs to be a while statement 
displayPlayers();
$("#startGame").on('click',function(){
    
    selectPlayer(); 
    $("#startGame").hide('slow');  
})

