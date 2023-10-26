const { getLoadModel: modelToCreateLoad } = require('../getLoadModel');
  
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
    expiresAt: Date;
    expectedPrice: number;
  }
  
const createLoad = async (loadData: ILoad) => {
  if (!loadData) {
    throw new Error('loadData was not properly passed to the repository!');
  }

  const loadModel = modelToCreateLoad();

  try {
    // Create a new user document with the provided data, including the isAdmin field
    const newLoad = new loadModel({
        ...loadData,
        isBlocked: false,
        isVerified: false,
        status: 'active',
        createdAt : new Date()
    });

    // Save the new load to the database
    const doneTheJob = await newLoad.save();
    if(!doneTheJob)
    return false;
    // Return the newly created load
    return true;
  } catch (error) {
    throw new Error(`Error in creating the user in the database: ${error}`);
  }
};

module.exports = {
    createLoad,
};
