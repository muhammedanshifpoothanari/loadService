"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LoadSchema = new mongoose_1.Schema({
    loadName: String,
    loadType: String,
    loadDetails: String,
    startingPoint: String,
    startPointPostalCode: Number,
    destinationPointPostalCode: Number,
    destination: String,
    ownerId: String,
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
