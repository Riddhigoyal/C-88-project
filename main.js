canvas=new fabric.Canvas("myCanvas");

playerX=10;
playerY=10;

block_image_width=30;
block_image_height=30;

player_object="";
block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPress=e.keyCode;
    console.log (keyPress)
    if(e.shiftKey==true && keyPress=='80'){
        console.log ("P and shift press together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && keyPress=='77'){
        console.log ("M and shift press toghter");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keyPress=='37'){
        left();
        console.log ("left key is pressed");
    }

    if(keyPress=='38'){
        up();
        console.log ("up key is pressed");
    }

    if(keyPress=='39'){
        right(); 
        console.log ("right key is pressed");
    }

    if(keyPress=='40'){
        down();
        console.log ("down key is pressed");
    }

    if(keyPress=='70'){
        new_image('6.jpg'); 
        console.log ("f is pressed");
    } 
    
    if(keyPress=='66'){
        new_image('5.jpg'); 
        console.log ("b is pressed");
    } 
    
    if(keyPress=='76'){
        new_image('1.jpg'); 
        console.log ("l is pressed");
    }  

    if(keyPress=='71'){
        new_image('2.jpg'); 
        console.log ("g is pressed");
    } 
    
    if(keyPress=='89'){
        new_image('3.jpg'); 
        console.log ("y is pressed");
    }  

    if(keyPress=='69'){
        new_image('4.jpg'); 
        console.log ("e is pressed");
    }  


} 

function up(){
    if(playerY >0){
        playerY=playerY-block_image_height;
        console.log ("block image height= "+block_image_height);
        console.log ("when up arrow is pressed,x= "+playerX+" and Y= "+playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(playerY <=460){
        playerY=playerY+block_image_height;
        console.log ("block image height= "+block_image_height);
        console.log ("when down arrow is pressed,x= "+playerX+" and y= "+playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(playerX <=850){
        playerX=playerX+block_image_width;
        console.log ("block image width= "+block_image_width);
        console.log ("when right arrow is pressed,x= "+playerX+" and y= "+playerY);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(playerX >0){
        playerX=playerX-block_image_width;
        console.log ("block image width= "+block_image_width);
        console.log ("when right arrow is pressed,x= "+playerX+" and y= "+playerY);
        canvas.remove(player_object);
        player_update();
    }
}