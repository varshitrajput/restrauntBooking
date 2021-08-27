module.exports = {
    post:{
        tags:['Booking Crud'],
        description: "Get All Reservation for Restraunt",
        operationId: "/api/getAllReservation",
        requestBody: {
            content:{
                'application/json': {
                  
                }
            }
        },
        responses:{
            '200':{
                description:"All Reservation Fetched",
                content:{
                    'application/json':{
                    }
                }
            },
            
        }
    }
}