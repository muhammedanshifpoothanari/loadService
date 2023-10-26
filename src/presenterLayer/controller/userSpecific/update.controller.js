"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { updateUseCase: wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');
const updateCntrl = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id, loadName, loadType, loadDetails, startingPoint, startPointPostalCode, destinationPointPostalCode, destination, ownerId, weight, truckRequired, truckType, wareHouseType, wareHouseRequired, advanceAvailable, expiresAt, expectedPrice, } = data;
        const newData = {
            _id,
            loadName,
            loadType,
            loadDetails,
            startingPoint,
            startPointPostalCode,
            destinationPointPostalCode,
            destination,
            ownerId,
            weight,
            truckRequired,
            truckType,
            wareHouseType,
            wareHouseRequired,
            advanceAvailable,
            expiresAt,
            expectedPrice,
        };
        const isUpdated = yield wrappedFunctionToUpdate(newData);
        if (isUpdated)
            return isUpdated;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    updateCntrl
};
