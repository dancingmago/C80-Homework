var inputs_1 = []
function get_para_1(){
    for(var i = 1; i <= 6; i++){
        inputs_1.push(document.getElementById("box_" + i).value);
    }
    document.getElementById("show_para_1").innerHTML = inputs_1.join(". ");
}

var inputs_2 = []
function get_para_2(){
    for(var k = 1; k <= 6; k++){
        inputs_2.push(document.getElementById("2_box_" + k).value);
    }
    document.getElementById("show_para_2").innerHTML = inputs_2.join(". ");
}