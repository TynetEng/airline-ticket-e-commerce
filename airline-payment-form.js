$(function(){
    let cardName = document.getElementById('card-name');
    let display2 = document.getElementById('num');
    let display = document.getElementById('cname')
    let output = document.getElementById('month-show')
    let output2 = document.getElementById('year-show')
    let codeResult = document.getElementById('pin-number')
    let indexPin = 0;
    let indexPinNum = 0;
    let result = document.getElementById('result');
    let result2 = document.getElementById('result');

    $('#card-name').focus(function(){
        display.style.transition = 'all 2s'
        display.style.transform = 'translateY(-30px)'
    })

    $('#card-number').focus(function(){
        display2.style.transition = 'all 2s'
        display2.style.transform = 'translateY(-22px)'
    })

    $('#card-name').blur(function(){
        display.style.transition = 'all 2s'
        display.style.transform = 'translateY(-22px)'
    })

    $('#card-number').blur(function(){
        display2.style.transition = 'all 2s'
        display2.style.transform = 'translateY(-20px)'
    })

    $('#card-name').on('input',function(){
        $('#name').html($('#card-name').val())
    })
    $('#card-number').on('input', function(){
        $('#pin-number').html($('#card-number').val())
    })

    if(localStorage.getItem('Passenger Details')){
        let c = localStorage.getItem('Passenger Details')
        details = JSON.parse(c)
        for(let i=0; i< details.length; i++){
            let b = details[i].firstName 
            $('.full-name').html(b)
        }
    }
    if(localStorage.getItem('Book Flight')){
        let c = localStorage.getItem('Book Flight')
        showFlight = JSON.parse(c)
        for(let i=0; i< showFlight.length; i++){
            let b = showFlight[i].destinationTravelDate;
            let c = showFlight[i].classBookedFlight;
            let d = showFlight[i].passengerBooked;
            
            $('.departure-date').html(b)
            $('.flight-class').html(c)
            $('.no-pass').html(d)
        }
    }

    if(localStorage.getItem('Mobile Book Flight')){
        let c = localStorage.getItem('Mobile Book Flight')
        showFlightMobile = JSON.parse(c)
        for(let i=0; i< showFlightMobile.length; i++){
            let b = showFlightMobile[i].destinationTravelDate;
            let c = showFlightMobile[i].classBookedFlight;
            let d = showFlightMobile[i].passengerBooked;
            
            $('.departure-date').html(b)
            $('.flight-class').html(c)
            $('.no-pass').html(d)
        }
    }
    let seatNumber=(min,max)=>{
        let a = Math.floor(Math.random() * (max - min + 1) + min);
        $('.seat-number').html(a)
    }
    seatNumber(1, 200)
    $('#month').change(function(){
        if (month.value == 'jan') {
            output.innerHTML = '01'
        }
        else if (month.value == 'feb') {
            output.innerHTML = '02'
        }
        else if (month.value == 'mar') {
            output.innerHTML = '03'
        }
        else if (month.value == 'apr') {
            output.innerHTML = '04'
        }
        else if (month.value == 'may') {
            output.innerHTML = '05'
        }
        else if (month.value == 'jun') {
            output.innerHTML = '06'
        }
        else if (month.value == 'jul') {
            output.innerHTML = '07'
        }
        else if (month.value == 'aug') {
            output.innerHTML = '08'
        }
        else if (month.value == 'sep') {
            output.innerHTML = '09'
        }
        else if (month.value == 'oct') {
            output.innerHTML = '10'
        }
        else if (month.value == 'nov') {
            output.innerHTML = '11'
        }
        else if (month.value == 'dec') {
            output.innerHTML = '12'
        }
    })
    $('#year').change(function(){
        if (year.value == '21') {
            output2.innerHTML = '21'
        }
        else if (year.value == '22') {
            output2.innerHTML = '22'
        }
        else if (year.value == '23') {
            output2.innerHTML = '23'
        }
        else if (year.value == '24') {
            output2.innerHTML = '24'
        }
        else if (year.value == '25') {
            output2.innerHTML = '25'
        }
        else if (year.value == '26') {
            output2.innerHTML = '26'
        }
        else if (year.value == '27') {
            output2.innerHTML = '27'
        }
        else if (year.value == '28') {
            output2.innerHTML = '28'
        }
        else if (year.value == '29') {
            output2.innerHTML = '29'
        }
        else if (year.value == '30') {
            output2.innerHTML = '30'
        }
    })

    $('#pin-number').html('#### #### #### ####')

    $('.validateSubmit').click(function(){
        validateNumber()
        $('.checkout').show()
        $('.main-parent').html('')
    })
    $('.checkoutFinal').click(function(){
        $('.checkout').html('')
        $('.checkoutPage').show()
    })
    $('.print').click(function(){
        window.print()
    })
    if(localStorage.getItem('Book Flight')){
        let c = localStorage.getItem('Book Flight')
        showFlight = JSON.parse(c)
        for(let i=0; i< showFlight.length; i++){
            let b = showFlight[i].originAirport
            $('.fromAirport').html(b)
        }
        for(let i=0; i< showFlight.length; i++){
            let b = showFlight[i].destinationAirport
            $('.toAirport').html(b);
        }
    }
    if(localStorage.getItem('Mobile Book Flight')){
        let c = localStorage.getItem('Mobile Book Flight')
        showFlightMobile = JSON.parse(c)
        for(let i=0; i< showFlightMobile.length; i++){
            let b = showFlightMobile[i].originAirport
            $('.fromAirport').html(b)
        }
        for(let i=0; i< showFlightMobile.length; i++){
            let b = showFlightMobile[i].destinationAirport
            $('.toAirport').html(b);
        }
    }

    
    // // codeResult.innerText = '123'
    // var cardPin = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];
    
    // let printPin = () => {
        
    //     // codeResult.innerText = '#### #### #### ####'
    //     codeResult.innerText = '';
    //     console.log(cardPin);
    //     for (let i = 0; i < cardPin.length; i++) {
    //         if (i > 0 && i % 4 == 0) {
    //             codeResult.innerText += '_';
    //         }
    //         codeResult.innerText += cardPin[i];
    //     }
    // }
    // printPin();
    
    // let cardCodeNumber = (pin) => {

    //     // var prevText = codeResult.innerHTML;
    //     // var input = cardNumber.value;
    //     var lastInp = cardNumber.value[cardNumber.value.length - 1];
    //     // alert(lastInp);
    //     cardPin.shift();
    //     // prevText = prevText.replace(hey, '');
    //     //    console.log(hey,prevText);
    //     if (pin == 'number') {
    //         var tLen = codeResult.innerHTML.length;
    //         if (cardNumber.value.length <= 16) {
    //             cardPin.push(lastInp);
    //             printPin();
    //             // alert()
    //             // var hash = '';
    //             // for (let i = 0; i > tLen; i++) {
    //             //     hash += "#";
    //             // }
    //             // codeResult.innerHTML = prevText;
    //             // codeResult.innerHTML += lastInp;
    //             // codeResult.innerHTML.slice(0,1);

    //             // var theVal = 
    //         } else {
    //             // codeResult.innerHTML = cardNumber.value.concat(prevText);
    //             // alert(codeResult.innerHTML.length)

    //         }
    //     }
    // }


    let validateNumber = () => {
        cardNumber = $('#card-number').val();
        let regex = /^[0-9]{16}/;
        let check = regex.test(cardNumber);
        if (!check || regex > 16 || regex < 16) {
            result.innerHTML = `invalid card number`
        }
        else {
            result.innerHTML = `valid card number`
        }
    }
    
})