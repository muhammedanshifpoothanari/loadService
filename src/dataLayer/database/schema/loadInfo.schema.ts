import mongoose, { Schema, Document } from 'mongoose';

// Define the schema for the Truck
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
  advanceAvailable: boolean;
  expectedPrice: number;
  loadHistory: LoadHistory[];
  isBlocked: boolean;
  isVerified: boolean;
  createdAt: Date;
  expiresAt: Date;
  status: string;
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

const LoadSchema = new Schema<ILoad>({
  loadName: String,
  loadType: String,
  loadDetails: String,
  startingPoint: String,
  startPointPostalCode: Number,
  destinationPointPostalCode: Number,
  destination: String,
  ownerId: String, // User ID of the load owner
  weight: Number,
  truckRequired: Boolean,
  truckType: String,
  wareHouseType: String,
  wareHouseRequired: Boolean,
  advanceAvailable: Boolean,
  expectedPrice: Number,
  loadHistory: [
    {
      truck: {
        truckId: String,
      },
      warehouse: {
        warehouseId: String,
      },
      startedAt: Date,
      deliveredAt: Date,
    },
  ],
  isBlocked: Boolean,
  isVerified: Boolean,
  createdAt: Date,
  expiresAt: Date,
  status: String,
  bids: [
    {
      userId: String,
      bidAmount: Number,
      bidStatus: String,
      bidTime: Date,
    },
  ],
});

module.exports = {
    loadSchema: LoadSchema
};
