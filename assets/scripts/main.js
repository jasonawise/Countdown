$(document).ready(function() {
    console.log("ready!");
    /*
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

    */


    //Gets the selected month from the user
    const selectedMonth = $('.month').change(function() {
        //gets the selected month from the dropdown list
        const month = $('.month :selected').val();
        return month;
    });

    //Gets the selected day from the user
    const selectedDay = $('.day').change(function() {
        //gets the selected month from the dropdown list
        const day = $('.day :selected').val();
        return day;
    });

    //Gets the selected year from the user
    const selectedYear = $('.year').change(function() {
        //gets the selected month from the dropdown list
        const year = $('.year :selected').val();
        return year;
    });

    $('.countdownClick').click(function() {
        const countdown = $('.displayCountdown');
        const month = selectedMonth.val();
        const day = selectedDay.val();
        const year = selectedYear.val();

        //Set the number of days based on the month selected
        const daysInMonth = moment(selectedMonth.val()).daysInMonth();

        console.log("Days in the month: " + daysInMonth);
        console.log("Month: " + month);
        console.log("Day: " + day);
        console.log("Year: " + year);
        //countdown.text(moment(selectedMonth.val()).format("MMM"));
        //countdown.text(moment().format("ddd, hA"));
    });

});