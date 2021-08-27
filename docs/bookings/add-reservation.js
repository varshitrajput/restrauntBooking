module.exports = {
    post:{
        tags:['Booking Crud'],
        description: "Add Reservation for Table",
        operationId: "/api/addReservation",
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/AddReservation'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"Reservation Added",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/AddReservation"
                        }
                    }
                }
            },
            
        }
    }
}