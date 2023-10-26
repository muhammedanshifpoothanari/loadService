const { getLoadModel : modelToGetLoadByWarehouseId } = require('../getLoadModel')
const getAllByWarehouseId = async (warehouseId: string) => {
    if (!warehouseId)
        throw new Error('warehouse id was not properly passed to the repository!');

    const loadModel = modelToGetLoadByWarehouseId();
    try {
        const loadArray = await loadModel.find({
            'loadHistory.warehouse.warehouseId' : warehouseId
          }).exec();
          
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by wareHouse id!');
    }
};

module.exports = {
    getAllByWarehouseId
}