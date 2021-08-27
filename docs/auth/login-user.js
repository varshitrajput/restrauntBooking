module.exports = {
    post:{
        tags:['User and Booking CRUD'],
        description: "Login User",
        operationId: "/api/login",
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Login'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"Login Successful",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Login"
                        }
                    }
                }
            },
            
        }
    }
}