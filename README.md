# PersonalRepo
For Personal Projects


Making Changes

@bg:  #363b3e;
@fill: #9DE86F;
@shade: #222222;


<script>
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    
        if (screen.width > 600) {
                    window.onscroll = function() {myFunction()};
                }
                else {
                    navbar.classList.remove("sticky")
                }
    </script>