const { updateLoadRepo: updateLoadRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  updateWrapperToupdateLoad  = require('../utility');
type functionToUpdateLoad = (...args: any[]) => Promise<any>;
type dataAtupdateUserUseCase = {
  _id: string;
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
const updateUserAbsExecute: functionToUpdateLoad = async (dependency: typeof updateWrapperToupdateLoad,data: dataAtupdateUserUseCase) => {
  console.log('updateLoadRepository:', );
  console.log('dependency:', dependency);
  const id: string = data._id
  console.log(data,'at usecase');
  
  const loadData = await dependency(id, data);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = updateWrapperToupdateLoad(updateLoadRepository, updateUserAbsExecute)
