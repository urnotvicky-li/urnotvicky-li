window.addEventListener("load", function() {

    document.body.addEventListener('mousemove', moveEyes);


    var eyes = document.querySelectorAll('.eye');

    function moveEyes(e){

        eyes.forEach(function(eye){
            var cursorX = e.x;
            var cursorY = e.y;

    var eyes = document.querySelectorAll('.eye');
    

            var x = (eye.getBoundingClientRect().left) + (eye.getBoundingClientRect().width / 2);
            var y = (eye.getBoundingClientRect().top) + (eye.getBoundingClientRect().height / 2);

            var radian = Math.atan2(cursorX - x, cursorY - y);
            var rotation = (radian * (180 / Math.PI) * -1) +270;

            var rotation = (radian * (180 / Math.PI) * -1) +270;
            
            eye.style.transform = 'rotate('+rotation+ 'deg)';
        });
    }
});   