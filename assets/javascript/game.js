//===================global-variables====================
var enemyChoice=[];
var heroChoice=[];
var deadEnemies=[];
var p1CurrentHp;
var p1CurrentAttck;
var p1CounterAttack;
var p2CurrentHp;
var p2CurrentAttck;
var p2CounterAttack;


 var ch1={
    name: "Luke", 
    hp:301,
    attckPower:71,
    counterAttck:Math.floor(Math.random()*2)
 };
 var ch2={
    name: "Yoda",
    hp:302,
    attckPower:72,
    counterAttck:Math.floor(Math.random()*2)
 };

 var ch3={
    name: "Darthvader",
    hp:303,
    attckPower:73,
    counterAttck:Math.floor(Math.random()*2)
 };

 var ch4={
    name: "Palpatine",
    hp:304,
    attckPower:74,
    counterAttck:Math.floor(Math.random()*2)
 };


//================FUNCTIONS===================

//===Set-up Players===
function displayPlayers(){
    //==Hero1==
    var ch1Display=[
    $("#ch1").append('<h1> '+ch1.name+'</h1>'),
    $("#ch1").append('<p id = "hp" > HP: '+ch1.hp+'</p>'),
    $("#ch1").append('<p id = "ch1atk"> Attack: '+ch1.attckPower+'</p>'),
    $("#ch1").append('<p id = "ch1cnt"> Couter attack: 50%<p>')
    ];
    //==Hero2==
    var ch2Display=[
    $("#ch2").append('<h1> '+ch2.name+'</h1>'),
    $("#ch2").append('<p id = "hp" > HP: '+ch2.hp+'</p>'),
    $("#ch2").append('<p id = "ch2atk"> Attack: '+ch2.attckPower+'</p>'),
    $("#ch2").append('<p id = "ch2cnt"> Couter attack: 50%</h5>')
    ];
    //==Hero3==
    var  ch3Display=[
    $("#ch3").append('<h1> '+ch3.name+'</h1>'),
    $("#ch3").append('<p id = "hp" > HP: '+ch3.hp+'</p>'),
    $("#ch3").append('<p id = "ch3atk"> Attack: '+ch3.attckPower+'</p>'),
    $("#ch3").append('<p id = "ch3cnt"> Couter attack: 50%</h5>')
    ];
    //==Hero4==
    var ch4Display = [
    $("#ch4").append('<h1> '+ch4.name+'</h1>'),
    $("#ch4").append('<p id = "hp" > HP: '+ch4.hp+'</p>'),
    $("#ch4").append('<p id = "ch4atk"> Attack: '+ch4.attckPower+'</p>'),
    $("#ch4").append('<p id = "ch4cnt"> Couter attack: 50%</p>')
    ]
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
    
    var enemyIds = [];
    $("#enemies").find("div").each(function(){ enemyIds.push(this.id); });
    for(var i = 0;i<enemyIds.length;i++){
        enemyIds[i] = "#"+enemyIds[i];
    };
    
    $(enemyIds[0]).on('click',function(){
        enemyChoice.push(enemyIds[0]);
        $(enemyIds[1]).hide('slow');
        $(enemyIds[2]).hide('slow');
        atackSettup();
        return enemyChoice;
    });
    $(enemyIds[1]).on('click',function(){
        enemyChoice.push(enemyIds[1]);
        $(enemyIds[0]).hide('slow');
        $(enemyIds[2]).hide('slow');
        //attack?
        atackSettup();
        return enemyChoice;    
    });
    $(enemyIds[2]).on('click',function(){
        enemyChoice.push(enemyIds[2]);
        $(enemyIds[0]).hide('slow');
        $(enemyIds[1]).hide('slow');
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
//post battle
function postBattleSetUp(){       //<|============================currrently working
    //change btn 
    $("#vs").html('<h3 >Choose your next opponent</h3>');
    var remainingEnemies =[];
    //for each div inside the #enemies , return the id="" and place inside remainingEnemies
    $("#enemies").find("div").each(function(){ remainingEnemies.push(this.id); });
    for(var i = 0;i<remainingEnemies.length;i++){   
        remainingEnemies[i] = "#"+remainingEnemies[i];
    }
    remainingEnemies = remainingEnemies.filter(val => !deadEnemies.includes(val));
    console.log("this is the post"+remainingEnemies);
    for(var i = 0;i < remainingEnemies.length;i++){
        $(remainingEnemies[i]).show('slow');
    }
console.log("this is the post"+remainingEnemies);
enemyChoice = [];
resetStatus();   
selectEnemy();     

}
//flush temp var
function resetStatus(){
    p2CurrentHp = 0;
    p2CounterAttack =0;
    p2CurrentAttck = 0;
}
//show btn for attack
function atackSettup(){
    $("#vs").html('<h3 id="atkBtn" type="button" class="btn btn-secondary text-dark">Attack</h3>');
    battleSetUp();
    atack();
}
function atack(){

    //get hero choice and assign atributes
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
    //get enemy choice and assign attributes
    
    var p2 = enemyChoice[0];//.slice(1);
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
    console.log(p2.hp);
    
    
    $("#atkBtn").on('click',function(){
        //herochoise or enemy choise is the element id wrapper for status 
       
        console.log("clicked");
        p2.hp = p2.hp-p1.attckPower;
        console.log("result of the atack"+p2.hp);
        $(enemyChoice[0]).html("");
        $(enemyChoice[0]).append("<h1>"+p2.name+" </h1>");
        $(enemyChoice[0]).append("<p>HP: "+p2.hp+"</p>");
        $(enemyChoice[0]).append("<p>Attack Power: "+p2.attckPower+"</p>");
        $(enemyChoice[0]).append('<p> Couter attack: 50%</h5>');
        //for key in object add to hero status 
        
        console.log("loop startef");
        
        
        if(p2.hp <= 0 ){ 
            
            $(enemyChoice[0]).html("");
            $(enemyChoice[0]).append("<h1>"+p2.name+" </h1>");
            $(enemyChoice[0]).append("<p>dead</p>");
            deadEnemies.push(enemyChoice[0]);
            console.log(" the dead enemies"+deadEnemies); 
            postBattleSetUp();
            
        }
        
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

//to do function post battle 
//todo status bar 
//incorp sounds