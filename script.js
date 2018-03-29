    !(window.onload = function() {
    console.log('script loaded!');
     

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

//сложение случайных чисел
    var x = randomInteger(6, 9);
    var z = randomInteger(11, 14);
    var y = (z - x);

    const parent = document.querySelector('#parent');

    parent.innerHTML = '<span id="1st" style = "background-color: orange">' + "&nbsp;" + x + "&nbsp;" + '</span>' + '+' + '<span id="2nd">' + "&nbsp;" + y + "&nbsp;" + '</span>' + ' = ' + '<span id="block">' + "?" + '</span>' + '<input  tabindex="0" id = "result" style="display: none ">';

    
// Рисуем canvas
    function drawArc1() {
        var widthWrap = 800/22; // высчитываем ширину ячейки для box
        var canvas = document.getElementById("myCanvas1");
        var context = canvas.getContext("2d");
        var box = document.getElementById("box1");
        
        box.style.width =  widthWrap * x + "px";
        
        var startX = 1;
        var finishX = 295; //конечная точка чуть меньше размера холста
        var yAxis = 100;
        var yOffset = 125;

        context.beginPath();
        context.moveTo(startX, yAxis);
        context.bezierCurveTo(startX, yAxis - yOffset, finishX, yAxis - yOffset, finishX, yAxis);

        context.lineWidth = 2;
        context.strokeStyle = "red";
        context.stroke();

        context.lineTo(finishX - 5, yAxis - 10);
        context.moveTo(finishX, yAxis);
        context.lineTo(finishX + 4, yAxis - 11);
        context.stroke();
        
        // обработка первого инпута
        
        var input = document.getElementById("input1");
        input.value = ""; // обнуляем для ff
        input.oninput = function(){
            if (+input.value !== x){
                input.style.color = "red";
        }else{
            input.style.color = "black";
            document.getElementById("box2").style.visibility= "visible";
            document.getElementById('1st').style = "background-color: none";
            document.getElementById('2nd').style = "background-color: orange";
        }
        };
    }

    function drawArc2() {
        var widthWrap = 800/22; // высчитываем ширину ячейки для box
        var canvas = document.getElementById("myCanvas2");
        var context = canvas.getContext("2d");
        var box = document.getElementById("box2");
        
        box.style.width =  widthWrap * y + "px";
        
        var startX = 0;
        var finishX = 288; //конечная точка чуть меньше размера холста
        var yAxis = 100;
        var yOffset = 125;

        context.beginPath();
        context.moveTo(startX, yAxis);
        context.bezierCurveTo(startX, yAxis - yOffset, finishX, yAxis - yOffset, finishX, yAxis);

        context.lineWidth = 2;
        context.strokeStyle = "red";
        context.stroke();

        context.lineTo(finishX - 5, yAxis - 10);
        context.moveTo(finishX, yAxis);
        context.lineTo(finishX + 4, yAxis - 11);
        context.stroke();


            // обработка второго инпута
        var input = document.getElementById("input2");
        input.value = ""; // обнуляем для ff
        input.oninput = function(){
            if (+input.value !== y){
                input.style.color = "red";
            }else{
                input.style.color = "black";
                document.getElementById("block").style.display = "none";
                document.getElementById("result").style.display = "inline-block";
                document.getElementById('2nd').style = "background-color: none";
                }
        };

        //  обработка результата
        var result = document.getElementById("result");
        result.value = ""; // обнуляем для ff
        result.oninput = function(){
            if (+result.value !== z){
                result.style.color = "red";
            }else{
                result.style.color = "black";
                result.style.display="none";
                document.getElementById("block").style.display = "inline";
                document.getElementById("block").textContent = z;

                
                }
        };

    }

    
    
        drawArc1();

        drawArc2();


    });
