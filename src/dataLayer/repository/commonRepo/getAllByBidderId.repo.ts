const { getLoadModel : modelToGetLoadUserId } = require('../getLoadModel')
const getAllByBidderId = async (userId: string) => {
    if (!userId)
        throw new Error('load user id was not properly passed to the repository!');

    const loadModel = modelToGetLoadUserId();
    try {
        const loadArray = await loadModel.find({
            'bids.userId': userId
          }).exec();
          
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by user id!');
    }
};

module.exports = {
    getAllByBidderId
}