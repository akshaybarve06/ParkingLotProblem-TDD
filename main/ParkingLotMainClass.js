// Main Class For Parking Lot System

let owner=require('./ParkingLotOwner')

let parkingCapacity=20;

class ParkingLotMainClass
{
    constructor(){
        this.parking=[]
    }
    //Method To Add Vehicle To Parking
    isParked(parking,vehicle,callback)
    {
        if( vehicle == null || vehicle == undefined)
            throw new Error("Couldn't Park..Invalid Vehicle..")
        else {
            // If Parking is not full then it will add vehicle
            owner.checkParkingFull(parking,function(result){
            if(result == true){
                parking.push(vehicle)
                callback(result)}     
            })
        }
    }  
    //Method To Remove Vehicle To Parking
        isUnparked(vehicle){
        if( vehicle == null || vehicle == undefined)
            throw new Error("Couldn't Unpark Car..Invalid Vehicle..")
        else 
            return true
    };
}
module.exports=new ParkingLotMainClass;
