window.addEventListener("load", function() {

    document.body.addEventListener('mousemove', moveEyes);


    function moveEyes(e){
            var eyes = document.querySelectorAll('.eye');

            eye.forEach(function(eye){

            var x = (eye.getBoundingClientRect().left) + (eye.getBoundingClientRect().Width / 2);
            var y = (eye.getBoundingClientRect().top) + (eye.getBoundingClientRect().height / 2);

            var radian = Math.atan2 (e.pageX - x, e.pageY - y);
            var rotation = (radian * (180 / Math.PI) * -1) +180;

            eye.style.transform = 'rotate('+rotation+ 'deg)';
        });
    }

});
