$(document).ready(function() {
    console.log("ready!");

    var x = setInterval(function() {
        //get display element
        const countdown = $('.displayCountdown');

        //set the date we are counting down to
        const countDownDate = new Date("Jan 5, 2018").getTime();

        //get todays date
        const now = moment();

        // Find the distance between now an the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //Display the result
        countdown.text(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    }, 1000);

    const selectedMonth = $('.month').change(function() {
        //gets the selected month from the dropdown list
        const month = $('.month :selected').val();
        return month;
    });

    console.log(selectedMonth);

});