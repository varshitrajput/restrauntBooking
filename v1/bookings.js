const mongoose = require('mongoose');
const Bookings = require('../model/bookings')

const addBooking = async function (req) {
    
    let { tableId, server, name,email,startTime,endTime,guests } = req.body
    if (!tableId||!server||!name||!email||!startTime||!guests) return { status: false, data: {}, message: "Invalid Request, Please enter all the data" }
    try {
        const check = await Bookings.find({ tableId }).lean()
        console.log("END1",check)
        let flag = 0
        let result = check.forEach(el => {
            console.log("END2")
            console.log("startTime:", startTime, "el startTime:", el.startTime)
            console.log("endTime:", endTime, "el endTime:", el.endTime)
            console.log(startTime >= el.startTime)
            console.log(endTime >= el.endTime )
            if (startTime >= el.startTime && startTime <= el.endTime) {
                flag++
                return { err: false, data: {}, message: "Table Already Booked for the current time, please change startTime and endTime" }
            }
        })
        if (flag > 0) {
            return { err: false, data: {}, message: "Table Already Booked for the current time, please change startTime and endTime" }
        }

        let bookingId = tableId + name;
        endTime = endTime ? endTime:startTime+360000
        const response = await Bookings.create({
            bookingId,
            tableId,
            server,
            name,
            email,
            startTime,
            endTime,
            guests
        })
        console.log("response", response)
        return {err:false,data:{response},message:"Booking Added Successfully"}
    } catch (error) {
            return { status: false, data: {},message:error}
        console.log("END")
    }   

}


const getBooking = async function (req) {
    let { name } = req.body
    if (!name) return { status: false, data: {}, message: "Invalid name" }
    const user = await Bookings.find({ name }).lean()
    console.log(user)
    if(!user.length){ return{status: false,user, message:"No Reservation Found"}}
    return {status:true,user,message:"Booking Fetched"}

}


const getAllBooking = async function (req) {
    
    const user = await Bookings.find().lean()
    console.log(user)
    if(!user.length){ return{status: false,user, message:"No Reservation Found"}}
    return {status:true,user,message:"Booking Fetched"}

}

const cancelBooking = async function (req) {
    let { bookingId } = req.body
    if (!bookingId) return { status: false, data: {}, message: "Invalid bookingId" }
    const user = await Bookings.remove({ bookingId }).lean()
    console.log(user)
    if(!user.length){ return{status: false,user, message:"No Reservation Found"}}
    return {status:true,user,message:"Booking Fetched"}
}

const updateBooking = async function (req) {
    let { bookingId,startTime,endTime} = req.body
    if (!bookingId || !startTime) return { status: false, data: {}, message: "Data missing" }
    const check = await Bookings.find({ bookingId }).lean()
    console.log("data:",check)
        let flag = 0
        let result = check.forEach(el => {
            console.log(startTime >= el.startTime)
            console.log(endTime >= el.endTime )
            if (startTime >= el.startTime && startTime <= el.endTime) {
                flag++
            }
        })
        if (flag > 0) {
            return { err: false, data: {}, message: "Table Already Booked for the current time, please change startTime and endTime" }
        }
    endTime = endTime ? endTime:parseInt(startTime)+360000
    const user = await Bookings.updateOne({ bookingId }, { $set: { startTime: startTime, endTime: endTime } })
    console.log(user)
    if(!user.length){ return{status: false,user, message:"No Reservation Found"}}
    return {status:true,user,message:"Booking Fetched"}


}


module.exports = { addBooking,getBooking,getAllBooking,cancelBooking,updateBooking };