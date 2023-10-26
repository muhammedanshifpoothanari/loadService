const { updateUseCase : wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');

const updateCntrl = async (data:any) => {
  try {
    const {
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
      } = data
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
      }
    const isUpdated = await wrappedFunctionToUpdate(newData);

    if(isUpdated)       
      return isUpdated;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    updateCntrl
};