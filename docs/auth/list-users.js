module.exports = {
    get:{
        tags:['User and Booking CRUD'],
        description: "List User",
        operationId: "/api/listUsers",
        
        responses:{
            '200':{
                description:"List of users",
                content:{
                    'application/json':{
                        schema:null
                    }
                }
            },
            
        }
    }
}