$(document).ready(function(){
    let showFlight =[];
    let showFlightMobile =[];
    
    $('.sideBar').hide()
    $('.spin').hide()

    if(localStorage.getItem('Book Flight')){
        let c = localStorage.getItem('Book Flight')
        showFlight = JSON.parse(c)
    }
    if(localStorage.getItem('Mobile Book Flight')){
        let c = localStorage.getItem('Mobile Book Flight')
        showFlightMobile= JSON.parse(c)
    }

    $('.showFlight').on('click', function(){
        if($('.fromAirport').val()=='' && $('.toAirport').val()==''){
            $('.showFlight').attr('disabled', true);
        }
        else if($('.fromAirport').val()!='' && $('.toAirport').val()!=''){
            let flightDetails = {
                originAirport: $('.fromAirport').val(),
                destinationAirport: $('.toAirport').val(),
                passengerBooked: $('.noPass').val(),
                classBookedFlight: $('.classFlight').val(),
                originTravelDate: $('.fromDate').val(),
                destinationTravelDate: $('.toDate').val(),
                tripFlightType : $('.tripType').val()
            }
            showFlight.push(flightDetails)

            localStorage.setItem('Book Flight', JSON.stringify(showFlight));

            $('.avail').show()
            $('.fromVal').html($('.fromAirport').val())
            $('.toVal').html($('.toAirport').val())
            $('.parent').html('')
            $('.spin').show()
            $('.avail').modal().show()
            
            setTimeout(function(){
                $('.avail').modal().hide()
            },4000)
            setTimeout(()=>{
                window.location.href = './airline-flight-details.html';
            },6000)
            
            

            
        }
    })

    // MOBILE VIEW //

    $('.showFlight2').on('click', function(){ 
        if($('.fromAirport2').val()=='' && $('.toAirport2').val()==''){
            $('.showFlight2').attr('disabled', true);
        }
        else if($('.fromAirport2').val()!='' && $('.toAirport2').val()!=''){
            $('.fromVal').html($('.fromAirport2').val())
            $('.toVal').html($('.toAirport2').val())

            
            let flightDetailsMobile= {
                originAirport: $('.fromAirport2').val(),
                destinationAirport: $('.toAirport2').val(),
                passengerBooked: $('.noPass2').val(),
                classBookedFlight: $('.classFlight2').val(),
                originTravelDate: $('.fromDate2').val(),
                destinationTravelDate: $('.toDate2').val(),
                tripFlightType : $('.tripType2').val()
            }
            
            showFlightMobile.push(flightDetailsMobile)

            localStorage.setItem('Mobile Book Flight', JSON.stringify(showFlightMobile));
            
            
            $('.avail').show()
            
            $('.parent').html('')
            $('.spin').show()
            $('.avail').modal().show()          
            
            
            setTimeout(()=>{
                window.location.href = './airline-flight-details.html';
            },6000)
            
        }
    })


    $('#log-in').click(function(){
        window.location.href = './airline.html'
    })
    $('#oneWayTrip').click(function(){
        $('#roundTrip').prop('checked', false);
        $('#redeemMiles').prop('checked', false);
        $('.bae2').hide()
        $('#oneWayTrip').html('')
    })
    $('#roundTrip').click(function(){
        $('#oneWayTrip').prop('checked',false);
        $('#redeemMiles').prop('checked', false);
        $('.bae2').show()
    })
    $('#redeemMiles').click(function(){
        $('#roundTrip').prop('checked', false);
        $('#oneWayTrip').prop('checked',false);
        $('.bae2').show()
    })
    $('.bookFlight').click(function(){
        let flightDetails = {
            originAirport: $('.fromAirport').val(),
            destinationAirport: $('.toAirport').val(),
            passengerBooked: $('.noPass').val(),
            classBookedFlight: $('.classFlight').val(),
            originTravelDate: $('.fromDate').val(),
            destinationTravelDate: $('.toDate').val()
        }
        showFlight.push(flightDetails)

        localStorage.setItem('Book Flight', JSON.stringify(showFlight));
        let a = localStorage.getItem('Book Flight') ; 
        window.location.href = './airline.html'
    })

    $('#openSideBar').click(function(){
        $('.sideBar').toggle()   
    })
    
})