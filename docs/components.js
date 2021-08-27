
module.exports = {
    components:{
        schemas:{
            name:{
                type:'string',
                description:"name of user",
                example: "Varshit"
            },
            email:{
                type:'string',
                description:"name of user",
                example: "Varshit@gmail.com"
            },
            password:{
                type:'string',
                description:"name of user",
                example: "123Varshit"
            },
            Register:{
                type:'object',
                properties:{
                    employeeId:{
                        type:'string',
                        description:"Todo identification number",
                        example:"Varshit1"
                    },
                    email:{
                        type:'string',
                        description:"Todo's title",
                        example:"varshit@gmail.com"
                    },
                    password:{
                        type:"boolean",
                        description:"The status of the todo",
                        example:"temp1233123"
                    }
                }
            },
            Login:{
                type:'object',
                properties:{
                    employeeId:{
                        type:'string',
                        description:"user identification number",
                        example:"Varshit1"
                    },
                   
                    password:{
                        type:"string",
                        description:"password of the user for authentication",
                        example:"temp1233123"
                    }
                }
            },
            AddReservation: {
                type:'object',
                properties:{
                    tableId:{
                        type:'string',
                        description:"table identification number",
                        example:"Table1"
                    },
                   
                    server:{
                        type:"string",
                        description:"Name of table manager",
                        example:"Sushant"
                    },
                    name:{
                        type:"string",
                        description:"Name of Cx",
                        example:"Sushant"
                    },
                    email:{
                        type:"string",
                        description:"Email of Cx",
                        example:"Sushant@gmail.com"
                    },
                    startTime:{
                        type:"string",
                        description:"Reservation Start Time",
                        example:"1629809316209"
                    },
                    endTime:{
                        type:"string",
                        description:"Reservation end time (optional)",
                        example:"1629809916209"
                    },
                    guests:{
                        type:"integer",
                        description:"Number of guests on the table",
                        example:5
                    },
                }
            },

            GetReservations: {
                type:'object',
                properties:{
                    name:{
                        type:'string',
                        description:"name of customer",
                        example:"Sushant"
                    },
                }
            },
            CancelReservations: {
                type: 'object',
                properties: {
                    bookingId:{type:'string', description:"booking Id of the reservation",example:"Table1Sushant"}
                 },
            },

            UpdateReservation: {
                type: 'object',
                properties: {
                    bookingId: { type: 'string', description: "booking Id of the reservation", example: "Table1Sushant" },
                    startTime: { type: 'string', description: "Start Time new", example: "1629809316509" },
                    endTime: { type: 'string', description: "EndTimeNew", example: "1629809816209" },
                 },
                 
            },



            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}