module.exports = {
    post:{
        tags:['User and Booking CRUD'],
        description: "Register User",
        operationId: "/api/register",
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Register'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"User Registered",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Register"
                        }
                    }
                }
            },
            
        }
    }
}