module.exports = {
    post:{
        tags:['Booking Crud'],
        description: "Cancel Reservation for Table",
        operationId: "/api/cancelReservations",
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/CancelReservations'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"Reservation Cancelled",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/CancelReservations"
                        }
                    }
                }
            },
            
        }
    }
}