$(document).ready(function(){
    // Initializing the variables
    var x = 'x';
    var o = 'o';
    var turns = 0;

    // Function to check for a win
    function checkWin(player) {
        var spot1 = $('.spot1').hasClass(player);
        var spot2 = $('.spot2').hasClass(player);
        var spot3 = $('.spot3').hasClass(player);
        var spot4 = $('.spot4').hasClass(player);
        var spot5 = $('.spot5').hasClass(player);
        var spot6 = $('.spot6').hasClass(player);
        var spot7 = $('.spot7').hasClass(player);
        var spot8 = $('.spot8').hasClass(player);
        var spot9 = $('.spot9').hasClass(player);

        return (
            (spot1 && spot2 && spot3) ||
            (spot4 && spot5 && spot6) ||
            (spot7 && spot8 && spot9) ||
            (spot1 && spot4 && spot7) ||
            (spot2 && spot5 && spot8) ||
            (spot3 && spot6 && spot9) ||
            (spot1 && spot5 && spot9) ||
            (spot3 && spot5 && spot7)
        );
    }

    // Adding click event
    $('#board li').on('click', function(){
        if ($(this).hasClass('disable')) {
            alert('This spot is already filled');
            return;
        }

        turns++;
        var player = (turns % 2 === 0) ? o : x;
        $(this).text(player);
        $(this).addClass('disable ' + player);

        if (checkWin(player)) {
           setTimeout(function() {
                alert('Winner: ' + player.toUpperCase());
                $('#board li').text('+');
                $('#board li').removeClass('disable o x');
                turns = 0;
           }, 300);
        } else if (turns === 9) {
            setTimeout(function() {
                alert('Tie Game!');
                $('#board li').text('+');
                $('#board li').removeClass('disable o x');
                turns = 0;
            }, 300);
        }
    });

    $('#reset').on('click', function(){
        $('#board li').text('+');
        $('#board li').removeClass('disable o x');
        alert('Game Resetted successfully!');
        turns = 0;
    });
});