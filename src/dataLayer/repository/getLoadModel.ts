import mongoose, { Model } from 'mongoose';

// Define the Load schema type (assuming it matches your schema)
interface Truck {
    truckId: string;
    truckType: string; // You can add a truck type (e.g., 'van', 'flatbed', 'container', etc.)
    capacity: number; // Truck capacity in units (e.g., tons)
  }
  
  // Define the schema for the Warehouse
  interface Warehouse {
    warehouseId: string;
    warehouseName: string;
    location: string;
    capacity: number; // Warehouse capacity in square feet or other relevant unit
  }
  
  // Define the schema for the Load
  export interface ILoad extends Document {
    loadName: string;
    loadType: string;
    loadDetails: string;
    startingPoint: string;
    startPointPostalCode: number,
    destinationPointPostalCode: number,
    destination: string;
    ownerId: string;
    weight: number;
    truckRequired: boolean;
    truckType: string;
    wareHouseType: string;
    wareHouseRequired: boolean;
    loadHistory: LoadHistory[];
    isBlocked: boolean;
    isVerified: boolean;
    createdAt: Date;
    expiresAt: Date;
    status: string;
    expectedPrice: number;
    bids: Bid[]; // An array to store bid information related to this load
  }
  
  // Define the schema for Load Bids
  interface Bid {
    userId: string; // ID of the user making the bid
    bidAmount: number;
    bidStatus: string; // Status of the bid (e.g., 'pending', 'accepted', 'rejected', etc.)
    bidTime: Date;
  }
  
  // Define the schema for the Load History
  interface LoadHistory {
    truck: Truck;
    warehouse: Warehouse; // You can track the warehouse where the load was stored
    startedAt: Date;
    deliveredAt: Date;
  }


// Create a Mongoose model for the Load
const getLoadModel = (): Model<ILoad> => {
    const entityName = 'LoadInfo';
    const { loadSchema } = require('../database/schema/loadInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!loadSchema)
        throw new Error('Load schema not found!');
    
    return mongoose.model<ILoad>(entityName, loadSchema);
};
module.exports = {
    getLoadModel
}