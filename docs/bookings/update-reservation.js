module.exports = {
    post:{
        tags:['Booking Crud'],
        description: "Update Reservation for Table",
        operationId: "/api/updateReservation",
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/UpdateReservation'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"Reservation Updated",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/UpdateReservation"
                        }
                    }
                }
            },
            
        }
    }
}