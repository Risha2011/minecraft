var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_heigth = 30;
player_x = 10;
player_y = 10;
var player_object= "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeigth(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image){
    fabric.Image.fromURL("get_image", function(Img) {
        player_image_   object = Img;

        player_object.scaleToWidth(block_image_width);
        player_object.scaleToHeigth(block_image_heigth);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image_object);

    });
}

window.addEventListener("keydown", my_keydown);


function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_heigth = block_image_heigth + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_heigth").innerHTML = block_image_heigth;
    }
    if(e.shiftKey && keyPressed == '77'){
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_heigth = block_image_heigth - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_heigth").innerHTML = block_image_heigth;
    }

    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '37'){
        new_image(ground.png);
        console.log("g");
    }
    if(keyPressed == '76'){
        new_image(light_green.png);
        console.log("l");
    }
    if(keyPressed == '84'){
        new_image(trunk.png);
        console.log("t");
    }
    if(keyPressed == '82'){
        new_image(roof.png);
        console.log("r");
    }
    if(keyPressed == '89'){
        new_image(yellow_wall.png);
        console.log("y");
    }
    if(keyPressed == '68'){
        new_image(dark_green.png);
        console.log("d");
    }
    if(keyPressed == '85'){
        new_image(different.png);
        console.log("u");
    }
    if(keyPressed == '67'){
        new_image(cloud.png);
        console.log("c");
    }
}
}