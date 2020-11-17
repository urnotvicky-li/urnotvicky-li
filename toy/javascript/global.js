window.addEventListener("load", function() {

    document.body.addEventListener('mousemove', moveEyes);
<<<<<<< HEAD

    var eyes = document.querySelectorAll('.eye');

    function moveEyes(e){

        eyes.forEach(function(eye){
            var cursorX = e.x;
            var cursorY = e.y;

=======
    var eyes = document.querySelectorAll('.eye');
    
   
    function moveEyes(e){
        eyes.forEach(function(eye) {
            var cursorX = e.x;
            var cursorY = e.y;

>>>>>>> 053a8c4a3cfb8a7d5c9c6b27743e6f323a983438
            var x = (eye.getBoundingClientRect().left) + (eye.getBoundingClientRect().width / 2);
            var y = (eye.getBoundingClientRect().top) + (eye.getBoundingClientRect().height / 2);

            var radian = Math.atan2(cursorX - x, cursorY - y);
<<<<<<< HEAD
            var rotation = (radian * (180 / Math.PI) * -1) +270;

=======
            var rotation = (radian * (180 / Math.PI) * -1) +180;
            
>>>>>>> 053a8c4a3cfb8a7d5c9c6b27743e6f323a983438
            eye.style.transform = 'rotate('+rotation+ 'deg)';
        });
    }
});    