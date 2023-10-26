
const { createUseCase : wrappedFunctionToSet } = require('../../../domainLayer/useCase/index');

const setCntrl = async (data:any) => {
  try {
    const {
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
    const isCreated = await wrappedFunctionToSet(newData);

    if (isCreated) 
      return isCreated;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    setCntrl
};