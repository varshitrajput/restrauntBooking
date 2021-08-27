module.exports = {
    post:{
        tags:['Booking Crud'],
        description: "Get Reservation for Table",
        operationId: "/api/getReservations",
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/GetReservations'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"Reservation Fetched",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/GetReservations"
                        }
                    }
                }
            },
            
        }
    }
}