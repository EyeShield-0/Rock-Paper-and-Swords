
function arrayRandom() {
    //var array = ["one","two","three"];
    var randomArrayObject = ["cape", "shield", "sword"];

    var random = Math.floor(Math.random() * randomArrayObject.length);

    return randomArrayObject[random];
}
window.onload = function () {




    var battleShield = document.getElementById('battleShield');
    var battleCape = document.getElementById('battleCape');
    var battleSword = document.getElementById('battleSword');
    var points = 0;

    function timer(currentTime) {
        var timeRem = document.getElementById("time");
        timeRem.innerHTML = "100";// starting time display on the html
        var inGame = true;

        var myInterval =setInterval(function () {
            if(currentTime>0){
                inGame = true;
                currentTime--;
                timeRem.innerHTML = currentTime;
            } else if(points<100){
                enemy.style.display = "none";//remove enemyType from display
                p.style.display = "none"; //remove score/crystals on screen display;
                timeRem.style.display = "none"; //remove time and time on screen display;
                timeLeftDiv.style.display = "none"; // for the "time left:"
                toSay.innerHTML="Oh no. This is bad.";
                battleShield.style.display="none";
                battleCape.style.display="none";
                battleSword.style.display="none";
                okButton.style.display="inline-block";



                page = 1000;
                clearInterval(myInterval);
                inGame = false;
            }

            if (points>=100 && inGame===true){
                enemy.style.display = "none";//remove enemyType from display
                p.style.display = "none"; //remove score/crystals on screen display;
                timeRem.style.display = "none"; //remove time and time on screen display;
                timeLeftDiv.style.display = "none"; // for the "time left:"
                toSay.innerHTML="Good job!";
                battleShield.style.display="none";
                battleCape.style.display="none";
                battleSword.style.display="none";
                levelIdentifier = "phase2";
                skipButton.style.display="inline-block";
                okButton.style.display="inline-block";
                clearInterval(myInterval);
                inGame = false;

                page = 34;

            }
            if(points>=95&&points<100 && inGame===true){
                toSay.innerHTML = "They're too fast! Guess their move.";
                enemy.style.display = "none";//remove enemyType from display
            } else if(points>=90 && points <95 && inGame===true) {
                toSay.innerHTML = "We need to break about 100 crystals.";
                enemy.style.display = "inline-block";//show enemyType from display
            }

        }, 1000);

    }
    //----------------------------Phase two timer--------------------------------
    function timerPhaseTwo(currentTime) {
        var timeRem = document.getElementById("time");
        timeRem.innerHTML = "70"; // starting time display on the html
        var inGame = true;
        var myInterval =setInterval(function () {
            if(currentTime>0){
                currentTime--;
                timeRem.innerHTML = currentTime;
            } else if(points<200 && inGame===true){
                enemy.style.display = "none";//remove enemyType from display
                p.style.display = "none"; //remove score/crystals on screen display;
                timeRem.style.display = "none"; //remove time and time on screen display;
                timeLeftDiv.style.display = "none"; // for the "time left:"
                toSay.innerHTML="Elias: Oh no.";
                battleShield.style.display="none";
                battleCape.style.display="none";
                battleSword.style.display="none";
                okButton.style.display="inline-block";




                page = 2000;
                clearInterval(myInterval);
                inGame = false;
            }

            if (points>=200 && inGame===true){
                enemy.style.display = "none";//remove enemyType from display
                p.style.display = "none"; //remove score/crystals on screen display;
                timeRem.style.display = "none"; //remove time and time on screen display;
                timeLeftDiv.style.display = "none"; // for the "time left:"
                toSay.innerHTML="Elias: Good swinging kid!";
                battleShield.style.display="none";
                battleCape.style.display="none";
                battleSword.style.display="none";
                levelIdentifier = "phase3";

                skipButton.style.display="inline-block";

                okButton.style.display="inline-block";
                clearInterval(myInterval);
                inGame = false;
                page = 72;

            }
            if(points>=195&&points<200 && inGame===true){
                toSay.innerHTML = "They're too fast! Guess their move.";
                enemy.style.display = "none";//remove enemyType from display
            } else if(points>=190 && points <195 && inGame===true) {
                toSay.innerHTML = "We need to break about 200 crystals.";
                enemy.style.display = "inline-block";//show enemyType from display
            }
        }, 1000);

    }
    //----------------------------------Phase 3 Timer----------------------------------
    function timerPhaseThree(currentTime) {
        var timeRem = document.getElementById("time");
        timeRem.innerHTML = "55"; // starting time display on the html
        var inGame = true;
        var myInterval =setInterval(function () {
            if(currentTime>0){
                currentTime--;
                timeRem.innerHTML = currentTime;
            } else if(points<300 && inGame===true){
                enemy.style.display = "none";//remove enemyType from display
                p.style.display = "none"; //remove score/crystals on screen display;
                timeRem.style.display = "none"; //remove time and time on screen display;
                timeLeftDiv.style.display = "none"; // for the "time left:"
                toSay.innerHTML="...";
                battleShield.style.display="none";
                battleCape.style.display="none";
                battleSword.style.display="none";
                okButton.style.display="inline-block";



                page = 3000; // bad ending 3
                clearInterval(myInterval);
                inGame = false;
            }

            if (points>=300 && inGame===true){
                enemy.style.display = "none";//remove enemyType from display
                p.style.display = "none"; //remove score/crystals on screen display;
                timeRem.style.display = "none"; //remove time and time on screen display;
                timeLeftDiv.style.display = "none"; // for the "time left:"
                toSay.innerHTML="Crystal Elias: ...";
                battleShield.style.display="none";
                battleCape.style.display="none";
                battleSword.style.display="none";

                skipButton.style.display="none";

                okButton.style.display="inline-block";
                clearInterval(myInterval);
                inGame = false;
                page = 135;

            }
            if(points>=295&&points<300 && inGame===true){
                toSay.innerHTML = "Elias is too fast! Guess his moves!";
                enemy.style.display = "none";//remove enemyType from display
            } else if(points>=290 && points <295 && inGame===true) {
                toSay.innerHTML = "Break 300 crystals to defeat Elias.";
                enemy.style.display = "inline-block";//show enemyType from display
            }
        }, 1000);

    }
    //---------------------------------------------------------------------------------



    var p = document.getElementById('score');
    var enemy = document.getElementById('enemyType');
    var currEnemy = arrayRandom();

    p.innerHTML = "Crystals: " + points;
    enemy.innerHTML = "Enemy using: " + currEnemy;


    battleShield.onclick = function () {
        if(currEnemy === "sword"){
            points +=1;
            p.innerHTML = "Crystals: " + points;
            currEnemy = arrayRandom();
            enemy.innerHTML = "Enemy using: " + currEnemy;


        }else {
            points -=5;
            p.innerHTML = "Crystals: " + points;
            currEnemy = arrayRandom();
            enemy.innerHTML = "Enemy using: " + currEnemy;

        }
    };

    battleCape.onclick = function () {
        if (currEnemy === "shield") {
            points += 2;
            p.innerHTML = "Crystals: " + points;
            currEnemy = arrayRandom();
            enemy.innerHTML = "Enemy using: " + currEnemy;

        } else {
            points -=5;
            p.innerHTML = "Crystals: " + points;
            currEnemy = arrayRandom();
            enemy.innerHTML = "Enemy using: " + currEnemy;

        }

    };

    battleSword.onclick = function () {

        if (currEnemy === "cape") {
            points += 3;
            p.innerHTML = "Crystals: " + points;
            currEnemy = arrayRandom();
            enemy.innerHTML = "Enemy using: " + currEnemy;

        } else {
            points -=5;
            p.innerHTML = "Crystals: " + points;
            currEnemy = arrayRandom();
            enemy.innerHTML = "Enemy using: " + currEnemy;

        }

    };



    //-----------------------------------------------------------------------------------------------------------------------------------------
    //Story Part

    var toSay = document.getElementById("toSay");
    var okButton = document.getElementById("okButton");
    var time = document.getElementById("time");
    var timeLeftDiv = document.getElementById("timeLeftDiv");
    var page = 0;
    var skipButton = document.getElementById("skipButton");
    var tryAgainButton = document.getElementById('tryAgainButton');
    var levelIdentifier = "phase1";

    toSay.innerHTML = "Can anyone hear me?";


    tryAgainButton.onclick = function () {
        window.location.reload();
    };
    okButton.onclick = function () {
        if(page === 0){
            skipButton.style.display="none";
            toSay.innerHTML = ".....";
            page = 1;
        } else if(page === 1){
            toSay.innerHTML = "oh hey! I'm right here!";
            page = 2;
        } else if (page === 2){
            toSay.innerHTML = " I thought no one would ever hear me down here.";
            page = 3;
        } else if (page === 3){
            toSay.innerHTML = "Can you help me?";
            page = 4;
        } else if (page === 4){
            toSay.innerHTML = "You see, I'm a Knight from the Kingdom.";
            page = 5;
        } else if (page === 5){
            toSay.innerHTML = "I was attacked by crystals and got trapped here.";
            page = 6;
        }
        else if (page === 6){
            toSay.innerHTML = "Fortunately they did not kill me. Though, they took my weapons. my Sword, my Shield and even my Cape.";
            page = 7;
        }
        else if (page === 7){
            toSay.innerHTML = "You're lucky you have yours.";
            page = 8;
        }else if (page === 8){
            toSay.innerHTML = "You can help me get back to my Kingdom and help me get back to this war.";
            page = 9;
        } else if (page === 9){
            toSay.innerHTML = "........";
            page = 10;
        } else if (page === 10){
            toSay.innerHTML = "What Kingdom you say?";
            page = 11;
        } else if (page === 11){
            toSay.innerHTML = "I'm from the Kingdom of the Three Gems. Emythyst.";
            page = 12;
        } else if (page === 12){
            toSay.innerHTML = "........";
            page = 13;
        } else if (page === 13){
            toSay.innerHTML = "You're on your way to get there?";
            page = 14;
        } else if (page === 14){
            toSay.innerHTML = "That's excellent! We can head there together kid.";
            page = 15;
        } else if (page === 15){
            toSay.innerHTML = "Now, can you help me remove these chains?";
            page = 16;
        } else if (page === 16){
            toSay.innerHTML = "*chains unlocked*";
            page = 17;
        } else if (page === 17){
            toSay.innerHTML = "Thank you...";
            page = 18;
        } else if (page === 18){
            toSay.innerHTML = "Hey, I'm just wondering, why do you want to come to the Kingdom?";
            page = 19;
        } else if (page === 19){
            toSay.innerHTML = "The Kingdom is at War with the Evil Crystal Sage and it's very dangerous.";
            page = 20;
        } else if (page === 20){
            toSay.innerHTML = "...............!!!";
            page = 21;
        } else if (page === 21){
            toSay.innerHTML = "*crystals forming*";

            page = 22;
        }
        else if (page === 22){
            toSay.innerHTML = "Guard up kid we have company.";
            page = 23;
        }
        else if (page === 23){
            toSay.innerHTML = "Raged crystals are here. Be careful, these are the guys who captured me and took my weapons.";
            page = 24;
        }
        else if (page === 24){
            toSay.innerHTML = "The Sage controls them. They may look like men but these guys are dead. Made of fallen warriors from the War.";
            page = 25;
        }
        else if (page === 25){
            toSay.innerHTML = "They use the same weapons as regular Knights. They have swords, shields and magical capes.";
            page = 26;
        }
        else if (page === 26){
            toSay.innerHTML = "I'll try to help but since I have no weapons and you do. You're gonna do most of the work. But don't worry I got your back.";
            page = 27;
        }
        else if (page === 27){
            toSay.innerHTML = "Alright listen to me kid, since they're dead it's easy to predict their moves.";
            page = 28;
        }
        else if (page === 28){
            toSay.innerHTML = "You can easily block their attacks with a shield, but be careful. Those capes are capable of nullifying your shield.";
            page = 29;
        }
        else if (page === 29){
            toSay.innerHTML = "Fortunately these capes are easily destroyed by swords.";
            page = 30;
        }
        else if (page === 30){
            toSay.innerHTML = "You have to break those crystals on their chest. That's what controls them. Though you have to defeat them fast. If we lose time they'll just come back up again.";
            page = 31;
        }
        else if (page === 31){
            toSay.innerHTML = "At this rate and calculating how many they are. You have 100 seconds to defeat them.";
            page = 32;
        }
        else if (page === 32){
            toSay.innerHTML = "Oh and one more thing, the more crystal you break the more agile and unpredictable they become.";
            okButton.value="Are you ready?";
            page = 33;
        }
        else if (page === 33){
            toSay.innerHTML = "We need to break about 100 crystals.";
            battleShield.style.display="inline-block";
            battleCape.style.display="inline-block";
            battleSword.style.display="inline-block";
            okButton.style.display="none";

            p.style.display="inline-block";
            enemy.style.display="inline-block";

            time.style.display="inline-block";
            timeLeftDiv.style.display="block";

            okButton.value="Continue";
            timer(100); // 120 is default



        }
        else if (page === 34){
            enemy.style.display = "none";//remove enemyType from display
            toSay.innerHTML = "I guess you saved me kid haha! Thank you.";
            skipButton.style.display="none";


            page = 35;

        }
        else if (page === 35){
            toSay.innerHTML = "That was amazing!";
            page = 36;
        }
        else if (page === 36){
            toSay.innerHTML = "The way you counter their every moves! You are a gifted swordsman.";
            page = 37;
        }
        else if (page === 37){
            toSay.innerHTML = "...";
            page = 38;
        }
        else if (page === 38){
            toSay.innerHTML = "... huh?";
            page = 39;
        }
        else if (page === 39){
            toSay.innerHTML = "*clash*";
            page = 40;
        }
        else if (page === 40){
            toSay.innerHTML = "*thunder*";
            page = 41;
        }
        else if (page === 41){
            toSay.innerHTML = "...";
            page = 42;
        }
        else if (page === 42){
            toSay.innerHTML = "Crystal Sage: ...";
            page = 43;
        }
        else if (page === 43){
            toSay.innerHTML = "Crystal Sage: We meet again.";
            page = 44;
        }
        else if (page === 44){
            toSay.innerHTML = "Crystal Sage: I must say, It's pretty pathetic to see a kid saving you Elias.";
            page = 45;
        }
        else if (page === 45){
            toSay.innerHTML = "Elias: ... ";
            page = 46;
        }
        else if (page === 46){
            toSay.innerHTML = "Elias: Kid.";
            page = 47;
        }
        else if (page === 47){
            toSay.innerHTML = "Elias: This is the Crystal Sage that I was talking about earlier.";
            page = 48;
        }
        else if (page === 48){
            toSay.innerHTML = "Crystal Sage: A sword, a shield and a magical cape.";
            page = 49;
        }
        else if (page === 49){
            toSay.innerHTML = "Crystal Sage: 3 weapons that completes a Knight";
            page = 50;
        }
        else if (page === 50){
            toSay.innerHTML = "Elias: I'm going to make you pay Sage!";
            page = 51;
        }
        else if (page === 51){
            toSay.innerHTML = "Crystal Sage: Oh, yea sure.";
            page = 52;
        }
        else if (page === 52){
            toSay.innerHTML = "Crystal Sage: I'm gonna pay alright.";
            page = 53;
        }
        else if (page === 53){
            toSay.innerHTML = "Crystal Sage: After I destroy that scum Kingdom of yours.";
            page = 54;
        }
        else if (page === 54){
            toSay.innerHTML = "Crystal Sage: How far have you fallen Elias? You used to be the strongest Knight of the Kingdom.";
            page = 55;
        }
        else if (page === 55){
            toSay.innerHTML = "Crystal Sage: The Red Gem Guardian Elias.";
            page = 56;
        }
        else if (page === 56){
            toSay.innerHTML = "Crystal Sage: Without your weapons and the Gem. You have no purpose.";
            page = 57;
        }
        else if (page === 57){
            toSay.innerHTML = "Elias: ...";
            page = 58;
        }
        else if (page === 58){
            toSay.innerHTML = "Elias: I should've killed you back then.";
            page = 59;
        }
        else if (page === 59){
            toSay.innerHTML = "Crystal Sage: Enough chit-chat knight!";
            page = 60;
        }
        else if (page === 60){
            toSay.innerHTML = "Crystal Sage: Time to fight";
            page = 61;
        }
        else if (page === 61){
            toSay.innerHTML = "... *crystals reforming*";
            page = 62;
        }
        else if (page === 62){
            toSay.innerHTML = "Elias: This is bad... Are you up to this kid?";
            page = 63;
        }
        else if (page === 63){
            toSay.innerHTML = "....";
            page = 64;
        }
        else if (page === 64){
            toSay.innerHTML = "Elias: You got nothing to do with the War kid. You don't have to do this.";
            page = 65;
        }
        else if (page === 65){
            toSay.innerHTML = "....";
            page = 66;
        }
        else if (page === 66){
            toSay.innerHTML = "Elias: If you really insist.";
            page = 67;
        }
        else if (page === 67){
            toSay.innerHTML = "Elias: Alright kid. this time I'm pretty sure the Raged crystals he's making are now different.";
            page = 68;
        }
        else if (page === 68){
            toSay.innerHTML = "Elias: These Raged crystals regenerate faster than before.";
            page = 69;
        }
        else if (page === 69){
            toSay.innerHTML = "Elias: Based on their forms right now, you only have 70 seconds to defeat them.";
            page = 70;
        }
        else if (page === 70){
            toSay.innerHTML = "Elias: I trust you kid. Now, let's go!";
            page = 71;
        }
        else if (page === 71){
            toSay.innerHTML = "We need to break about 200 crystals.";

            enemy.innerHTML = "Enemy using: " + currEnemy;
            p.innerHTML = "Crystals: " + points;// Display of stats PHASE 2
            //-------------------------------------------

            battleShield.style.display="inline-block";
            battleCape.style.display="inline-block";
            battleSword.style.display="inline-block";
            okButton.style.display="none";

            p.style.display="inline-block";
            enemy.style.display="inline-block";

            time.style.display="inline-block";
            timeLeftDiv.style.display="block";

            timerPhaseTwo(70);
        }
        else if (page === 72){
            enemy.style.display = "none";//remove enemyType from display
            toSay.innerHTML = "Elias: You saved me again!";
            skipButton.style.display="none";
            page =73;
        }
        else if(page === 73){
            toSay.innerHTML = "Elias: I can get used to this you know haha.";
            page = 74;
        }
        else if(page === 74){
            toSay.innerHTML = "Elias: But we have one more enemy to take care of.";
            page = 75;
        }
        else if(page === 75){
            toSay.innerHTML = "Elias: It's over Sage! No more crystals for you today.";
            page = 76;
        }
        else if(page === 76){
            toSay.innerHTML = "Crystal Sage: I have to say...";
            page = 77;
        }
        else if(page === 77){
            toSay.innerHTML = "Crystal Sage: I'm really impress how you can defeat my crystals so quickly.";
            page = 78;
        }
        else if(page === 78){
            toSay.innerHTML = "Crystal Sage: You really came at a good time to save the Knight youngster.";
            page = 79;
        }
        else if(page === 79){
            toSay.innerHTML = "Elias: Yeah, because even fate wants you defeated you evil bastard!";
            page = 80;
        }
        else if(page === 80){
            toSay.innerHTML = "Crystal Sage: Well. I have to agree. ";
            page = 81;
        }
        else if(page === 81){
            toSay.innerHTML = "Crystal Sage: I guess fate has something to do with this. ";
            page = 82;
        }
        else if(page === 82){
            toSay.innerHTML = "Crystal Sage: I guess fate really wants me to win. ";
            page = 83;
        }
        else if(page === 83){
            toSay.innerHTML = "Elias: Are you insane?";
            page = 84;
        }
        else if(page === 84){
            toSay.innerHTML = "Elias: You have no crystals, you're outnumbered and this kid has a special talent to defeat you.";
            page = 85;
        }
        else if(page === 85){
            toSay.innerHTML = "Elias: No more hiding nor running Sage. This kid and I will be your end.";
            page = 86;
        }
        else if(page === 86){
            toSay.innerHTML = "Crystal Sage: I guess we have some misunderstandings here Elias.";
            page = 87;
        }
        else if(page === 87){
            toSay.innerHTML = "Crystal Sage: ...";
            page = 88;
        }
        else if(page === 88){
            toSay.innerHTML = "Crystal Sage: You see, there is a reason why I never ordered my crystals to kill you.";
            page = 89;
        }
        else if(page === 89){
            toSay.innerHTML = "Crystal Sage: Elias the Red Gem Guardian.";
            page = 90;
        }
        else if(page === 90){
            toSay.innerHTML = "Crystal Sage: The Red Gem of talent. Rubium.";
            page = 91;
        }
        else if(page === 91){
            toSay.innerHTML = "Crystal Sage: I want that talent Elias.";
            page = 92;
        }
        else if(page === 91){
            toSay.innerHTML = "Elias: But you already have the Gem.";
            page = 92;
        }
        else if(page === 92){
            toSay.innerHTML = "Elias: You already have it's powers. You took it from the Kingdom along with the others!";
            page = 93;
        }
        else if(page === 93){
            toSay.innerHTML = "Crystal Sage: That's what I thought too. Then I learned something about them.";
            page = 94;
        }
        else if(page === 94){
            toSay.innerHTML = "Crystal Sage: You see, the Gems do not actively transfer their powers that quickly. ";
            page = 95;
        }
        else if(page === 95){
            toSay.innerHTML = "Crystal Sage: They need time to manifest into something until the world can logically comprehend.";
            page = 96;
        }
        else if(page === 95){
            toSay.innerHTML = "Crystal Sage: In this case, talent.";
            page = 96;
        }
        else if(page === 96){
            toSay.innerHTML = "Crystal Sage: Long ago, creatures gained talent because the Red Gem was deeply buried under the soil of this very planet.";
            page = 97;
        }
        else if(page === 97){
            toSay.innerHTML = "Crystal Sage: Slowly affecting living beings and increasing its influence as the time passes by.";
            page = 98;
        }
        else if(page === 98){
            toSay.innerHTML = "Crystal Sage: This is true with the other Gems as well. Thus, creating intelligent creatures in the process.";
            page = 99;
        }
        else if(page === 99){
            toSay.innerHTML = "Crystal Sage: Humans rose from these powers.";
            page = 100;
        }
        else if(page === 100){
            toSay.innerHTML = "Crystal Sage: That's why I'm still a Sage Elias. Despite having the three Gems.";
            page = 101;
        }
        else if(page === 101){
            toSay.innerHTML = "Crystal Sage: I'm not a god.";
            page = 102;
        }
        else if(page === 102){
            toSay.innerHTML = "Crystal Sage: At least not yet.";
            page = 103;
        }
        else if(page === 103){
            toSay.innerHTML = "Crystal Sage: The only human that can showcase this Gem's power is you Elias.";
            page = 104;
        }
        else if(page === 104){
            toSay.innerHTML = "Crystal Sage: You were raised near its influence.";
            page = 105;
        }
        else if(page === 105){
            toSay.innerHTML = "Crystal Sage: Born and raised to be its Guardian.";
            page = 106;
        }
        else if(page === 106){
            toSay.innerHTML = "Crystal Sage: That's why you are a very skilled Knight. A prodigy.";
            page = 107;
        }
        else if(page === 107){
            toSay.innerHTML = "Crystal Sage: That's why I'm gonna use you.";
            page = 108;
        }
        else if(page === 108){
            toSay.innerHTML = "Elias: What? Use me?";
            page = 109;
        }
        else if(page === 109){
            toSay.innerHTML = "Crystal Sage: Hahaha!";
            page = 110;
        }
        else if(page === 110){
            toSay.innerHTML = "Crystal Sage: Time to obey your master Elias!";
            page = 111;
        }
        else if(page === 111){
            toSay.innerHTML = "*Elias is turning to a Raged crystal*";
            page = 112;
        }
        else if(page === 112){
            toSay.innerHTML = "Elias: Oh no. Oh no no no no!";
            page = 113;
        }
        else if(page === 113){
            toSay.innerHTML = "Crystal Sage: You may be talented Elias, but you do not have the fortitude to resist my crystals!";
            page = 114;
        }
        else if(page === 114){
            toSay.innerHTML = "Crystal Sage: Hahahahaha!";
            page = 115;
        }
        else if(page === 115){
            toSay.innerHTML = "Elias: Kid, Run!";
            page = 116;
        }
        else if(page === 116){
            toSay.innerHTML = "Elias: Run away from me!";
            page = 117;
        }
        else if(page === 117){
            toSay.innerHTML = "......";
            page = 118;
        }
        else if(page === 118){
            toSay.innerHTML = "Elias: aahhhhhhhhhhhhhhh!";
            page = 119;
        }
        else if(page === 119){
            toSay.innerHTML = "......";
            page = 120;
        }
        else if(page === 120){
            toSay.innerHTML = "...";
            page = 121;
        }
        else if(page === 121){
            toSay.innerHTML = "Crystal Elias: ...";
            page = 122;
        }
        else if(page === 122){
            toSay.innerHTML = "*thunder*";
            page = 123;
        }
        else if(page === 123){
            toSay.innerHTML = "....";
            page = 124;
        }
        else if(page === 124){
            toSay.innerHTML = "Crystal Sage: I have to get going now. I still have a Kingdom to destroy.";
            page = 125;
        }
        else if(page === 125) {
            toSay.innerHTML = "Crystal Sage: I give you back your weapons Elias.";
            page = 126;

        }
        else if(page === 126) {
            toSay.innerHTML = "Crystal Sage: Now kill this Kid!";
            page = 127;

        }
        else if(page === 127) {
            toSay.innerHTML = "Crystal Sage: When I get back. I want his sword.";
            page = 128;

        }
        else if(page === 128) {
            toSay.innerHTML = "Crystal Elias: .. yess..";
            page = 129;

        }
        else if(page === 129) {
            toSay.innerHTML = "...";
            page = 130;

        }
        else if(page === 130) {
            toSay.innerHTML = "Crystal Elias: ahhhhhhh!";
            page = 131;

        }
        else if(page === 131) {
            toSay.innerHTML = "Crystal Elias: kill meeee...";
            page = 132;

        }
        else if(page === 132) {
            toSay.innerHTML = "Crystal Elias: break... my crystals...";
            page = 133;

        }
        else if(page === 133) {
            toSay.innerHTML = "Crystal Elias: please...";
            okButton.value = "Defeat Elias";
            page = 134;

        }
        else if(page === 134) {

            toSay.innerHTML = "Break 300 crystals to defeat Elias.";

            enemy.innerHTML = "Enemy using: " + currEnemy;
            p.innerHTML = "Crystals: " + points;// Display of stats PHASE 2
            //-------------------------------------------

            battleShield.style.display="inline-block";
            battleCape.style.display="inline-block";
            battleSword.style.display="inline-block";
            okButton.style.display="none";

            p.style.display="inline-block";
            enemy.style.display="inline-block";

            time.style.display="inline-block";
            timeLeftDiv.style.display="block";
            okButton.value = "Continue";
            timerPhaseThree(55); // 60default

            page = 135;

        }
        else if(page === 135) {
            toSay.innerHTML = "*Crystals falling apart*";


            page = 136;

        }
        else if(page === 136) {
            toSay.innerHTML = "Crystal Elias: hey...";

            page = 137;

        }
        else if(page === 137) {
            toSay.innerHTML = "Crystal Elias: thanks kid...";

            page = 138;

        }
        else if(page === 138) {
            toSay.innerHTML = "Crystal Elias: ...";

            page = 139;

        }
        else if(page === 139) {
            toSay.innerHTML = "Crystal Elias: I'm not gonna last any longer...";

            page = 140;

        }
        else if(page === 140) {
            toSay.innerHTML = "...";

            page = 141;

        }
        else if(page === 140) {
            toSay.innerHTML = "Crystal Elias: before I vanish.";

            page = 141;

        }
        else if(page === 141) {
            toSay.innerHTML = "Crystal Elias: Before I go, I have a favor to ask...";

            page = 142;

        }
        else if(page === 142) {
            toSay.innerHTML = "Crystal Elias: ...";

            page = 143;

        }
        else if(page === 143) {
            toSay.innerHTML = "Crystal Elias: Save the other Guardians... I believe he will try to control them too.";

            page = 144;

        }
        else if(page === 144) {
            toSay.innerHTML = "Crystal Elias: also....";

            page = 145;

        }
        else if(page === 145) {
            toSay.innerHTML = "Crystal Elias: I think your sword is the key to end the Sage.";

            page = 146;

        }
        else if(page === 146) {
            toSay.innerHTML = "Crystal Elias: He might not know yet though.";

            page = 147;

        }
        else if(page === 147) {
            toSay.innerHTML = "Crystal Elias: I felt something when I was fighting you...";

            page = 148;

        }
        else if(page === 148) {
            toSay.innerHTML = "Crystal Elias: It seems... the sword can absorb the Gems' properties.";

            page = 149;

        }
        else if(page === 149) {
            toSay.innerHTML = "Crystal Elias: Like...the Sage told earlier, I have the essence of the Red Gem's powers.";

            page = 150;

        }
        else if(page === 150) {
            toSay.innerHTML = "Crystal Elias: I can't sense that anymore in me...";

            page = 151;

        }
        else if(page === 151) {
            toSay.innerHTML = "Crystal Elias: ... ";

            page = 152;

        }
        else if(page === 152) {
            toSay.innerHTML = "Crystal Elias: I sense that in your sword now. ";

            page = 153;

        }
        else if(page === 153) {
            toSay.innerHTML = "*Elias disappearing*";

            page = 154;

        }
        else if(page === 154) {
            toSay.innerHTML = "Crystal Elias: I guess we got not much time left kid...";

            page = 155;

        }
        else if(page === 155) {
            toSay.innerHTML = "Crystal Elias: I suspect your sword is now very weak against the Yellow Gem's power.";

            page = 156;

        }
        else if(page === 156) {
            toSay.innerHTML = "Crystal Elias: However, the Blue Gem Guardian can help you with that.";

            page = 157;

        }
        else if(page === 157) {
            toSay.innerHTML = "Crystal Elias: She must be in the Kingdom right now.";

            page = 158;

        }
        else if(page === 158) {
            toSay.innerHTML = "Crystal Elias: Head there as soon as you can and tell her everything.";

            page = 159;

        }
        else if(page === 159) {
            toSay.innerHTML = "Crystal Elias: It's only a matter of time until the Sage finds her...";

            page = 160;

        }
        else if(page === 160) {
            toSay.innerHTML = "*Elias is glowing*";

            page = 162;

        }
        else if(page === 162) {
            toSay.innerHTML = "Crystal Elias: Goodbye kid... ";
            page = 163;

        }
        else if(page === 163) {
            toSay.innerHTML = "Crystal Elias: I didn't even get to know your name...";
            page = 164;

        }
        else if(page === 164) {
            toSay.innerHTML = "Crystal Elias: Thanks for saving me...";
            page = 165;

        }
        else if(page === 165) {
            toSay.innerHTML = "Crystal Elias: ...";
            page = 166;

        }
        else if(page === 166) {
            toSay.innerHTML = "...";
            page = 167;

        }
        else if(page === 167) {
            toSay.innerHTML = ".........";
            page = 168;

        }
        else if(page === 168) {
            toSay.innerHTML = "To be continued";
            okButton.value ="Thanks for Playing!";
            page = 169;

        }




        // bad ending 1---------------------------------------
        else if (page === 1000){
            // pages 100-199 are pages for bad ending.
            enemy.style.display = "none";//remove enemyType from display
            toSay.innerHTML = "I guess this is it...";
            page = 1010;
        }else if (page === 1010){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "............";
            page = 1020;
        }else if (page === 1020){
            // pages 1000-1990 are pages for bad ending.
            toSay.innerHTML = "........";
            page = 1030;
        }else if (page === 1030){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "....";
            page = 1040;
        }else if (page === 1040){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "At least you fought bravely kid.";
            page = 1050;
        } else if (page === 1050){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "*growl*";
            page = 1060;
        } else if (page === 1060){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "*SLASH* .......";
            page = 1070;
        } else if (page === 1070){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = ".................................... ";
            page = 1080;
        } else if (page === 1080){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "*thunder*";
            page = 1090;
        } else if (page === 1090){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Sage: ...";
            page = 1100;
        } else if (page === 1100){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Sage: I have such plans for you.";
            page = 1110;
        } else if (page === 1110){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Sage: Hahahahaha!";
            page = 1120;
        } else if (page === 1120){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "GAME OVER";
            okButton.style.display="none";
            tryAgainButton.style.display="inline-block";
            page = 1130;
        }
        //bad ending 2-----------------------------------------------------------------------------------------------
        else if (page === 2000){
            // pages 100-199 are pages for bad ending.
            enemy.style.display = "none";//remove enemyType from display
            toSay.innerHTML = "Elias: ...";
            page = 2010;
        }else if (page === 2010){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "............";
            page = 2020;
        }else if (page === 2020){
            // pages 1000-1990 are pages for bad ending.
            toSay.innerHTML = "Elias: You did good.";
            page = 2030;
        }else if (page === 2030){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "...";
            page = 2040;
        }else if (page === 2040){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Elias: At least you fought bravely kid.";
            page = 2050;
        } else if (page === 2050){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "*thunder*";
            page = 2060;
        } else if (page === 2060){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "*SLASH* .......";
            page = 2070;
        } else if (page === 2070){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = ".................................... ";
            page = 2080;
        } else if (page === 2080){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "*thunder*";
            page = 2090;
        } else if (page === 2090){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Sage: ...";
            page = 2100;
        } else if (page === 2100){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Sage: I have such plans for you Elias";
            page = 2110;
        } else if (page === 2110){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Sage: Too bad.";
            page = 2120;
        } else if (page === 2120){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "GAME OVER";
            okButton.style.display="none";
            tryAgainButton.style.display="inline-block";
            page = 2130;
        }
        // bad ending 3(for final boss) ------------------------------------------------------------------
        else if (page === 3000){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Elias: ...";
            page = 3001;
        }
        else if (page === 3001){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Elias: kill...";
            page = 3002;
        }
        else if (page === 3002){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Elias: kill";
            page = 3003;
        }
        else if (page === 3003){
            // pages 100-199 are pages for bad ending.
            toSay.innerHTML = "Crystal Elias: ...";
            page = 3004;
        }
        else if (page === 3004){
                // pages 100-199 are pages for bad ending.
                toSay.innerHTML = "GAME OVER";
                okButton.style.display="none";
                tryAgainButton.style.display="inline-block";
                page = 3005;
            }
        //------------------------------------------------------------------------------------------------------------


    };



    skipButton.onclick = function () {
        if(levelIdentifier === "phase1"){
            toSay.innerHTML = "We need to break about 100 crystals.";
            battleShield.style.display="inline-block";
            battleCape.style.display="inline-block";
            battleSword.style.display="inline-block";
            okButton.style.display="none";

            p.style.display="inline-block";
            enemy.style.display="inline-block";

            time.style.display="inline-block";
            timeLeftDiv.style.display="block";
            skipButton.style.display="none";
            timer(100); // 120 is default
        } else if(levelIdentifier === "phase2"){

            toSay.innerHTML = "We need to break about 200 crystals.";
            battleShield.style.display="inline-block";
            battleCape.style.display="inline-block";
            battleSword.style.display="inline-block";
            okButton.style.display="none";

            p.style.display="inline-block";
            enemy.style.display="inline-block";

            time.style.display="inline-block";
            timeLeftDiv.style.display="block";
            skipButton.style.display="none";
            timerPhaseTwo(70); // 70 default

        } else if(levelIdentifier === "phase3"){

            toSay.innerHTML = "We need to break about 300 crystals.";
            battleShield.style.display="inline-block";
            battleCape.style.display="inline-block";
            battleSword.style.display="inline-block";
            okButton.style.display="none";

            p.style.display="inline-block";
            enemy.style.display="inline-block";

            time.style.display="inline-block";
            timeLeftDiv.style.display="block";
            skipButton.style.display="none";
            timerPhaseThree(55); // 55 default

        }

    }


};
