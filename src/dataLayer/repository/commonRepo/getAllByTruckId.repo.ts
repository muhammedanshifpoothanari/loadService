const { getLoadModel : modelToGetLoadTruckId } = require('../getLoadModel')
const getAllByTruckId = async (truckId: string) => {
    if (!truckId)
        throw new Error('load truck id was not properly passed to the repository!');

    const loadModel = modelToGetLoadTruckId();
    try {
        const loadArray = await loadModel.find({
            'loadHistory.truck.truckId' :truckId
          }).exec();
          
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by truck id!');
    }
};

module.exports = {
    getAllByTruckId
}