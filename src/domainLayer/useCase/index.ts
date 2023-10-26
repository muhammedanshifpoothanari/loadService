const getAllUseCase = require('./common/getAll.useCase');
const getAllByBidderIdUseCase = require('./common/getAllByBidderId.useCase');
const getAllByLoadNameUseCase = require('./common/getAllByLoadName.useCase');
const getAllByLoadTypeUseCase = require('./common/getAllByLoadType.useCase');
const getAllByOwnerIdUseCase = require('./common/getAllByOwnerId.useCase');
const getAllByStartingPointUseCase = require('./common/getAllByStartingPoint.useCase');
const getAllByStartingPointPostalUseCase = require('./common/getAllByStartingPointPostalCode.useCase');
const getAllByTruckIdUseCase = require('./common/getAllByTruckId.useCase');
const getAllByWareHouseIdUseCase = require('./common/getAllByWareHouseId.useCase');
const getAllByWeightUseCase = require('./common/getAllByWeight.useCase');
const getByLoadIdUseCase = require('./common/getById.useCase');
const createUseCase = require('./userSpecific/create.useCase');
const updateUseCase = require('./userSpecific/update.useCase');
const blockUseCase = require('./adminSpecific/block.useCase');
const unBlockUseCase = require('./adminSpecific/unBlock.useCase');
const unVerifyUseCase = require('./adminSpecific/unVerify.useCase');
const verifyUseCase = require('./adminSpecific/verify.useCase');

module.exports = {
    getAllUseCase,
    getAllByBidderIdUseCase,
    getAllByLoadNameUseCase,
    getAllByLoadTypeUseCase,
    getAllByOwnerIdUseCase,
    getAllByStartingPointUseCase,
    getAllByStartingPointPostalUseCase,
    getAllByTruckIdUseCase,
    getAllByWareHouseIdUseCase,
    getByLoadIdUseCase,
    getAllByWeightUseCase,
    createUseCase,
    updateUseCase,
    blockUseCase,
    unBlockUseCase,
    unVerifyUseCase,
    verifyUseCase
}