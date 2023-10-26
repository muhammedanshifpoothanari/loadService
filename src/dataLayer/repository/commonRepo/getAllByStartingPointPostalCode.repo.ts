const { getLoadModel : modelToGetLoadByStartingPointPostalCode } = require('../getLoadModel')
const getAllByStartingPointPostal = async (startPointPostalCode: number) => {
    if (!startPointPostalCode)
        throw new Error('starting point was not properly passed to the repository!');

    const loadModel = modelToGetLoadByStartingPointPostalCode();
    try {
        const loadArray = await loadModel.find({ startPointPostalCode: startPointPostalCode }).exec();
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by load startingpoint!');
    }
};

module.exports = {
    getAllByStartingPointPostal
}