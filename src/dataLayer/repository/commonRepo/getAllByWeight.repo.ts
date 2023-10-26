const { getLoadModel : modelToGetLoadByWeight } = require('../getLoadModel')
const getAllByWeight = async (weight: number , sort: number = 1) => {
    if (!weight && sort)
        throw new Error('weight or sort was not properly passed to the repository!');

    const loadModel = modelToGetLoadByWeight();
    try {
        let loadArray: any;
        if(weight){
             loadArray = await loadModel.find({weight: weight})
            .sort({ weight: sort }) 
            .exec();
        }else{
             loadArray = await loadModel.find({})
            .sort({ weight: sort }) 
            .exec();
        }
          
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by weight!');
    }
};

module.exports = {
    getAllByWeight
}