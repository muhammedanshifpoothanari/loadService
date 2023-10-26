const { createLoadRepo: createLoadRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  wrapperTocreateLoad  = require('../utility');

type functionTypeToCreateLoad = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
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
const createUserAbsExecute: functionTypeToCreateLoad = async (dependency: typeof createLoadRepository,
   data: dataAtCreateUseCase) => {
  console.log('createLoadUseCase:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(data);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = wrapperTocreateLoad(createLoadRepository, createUserAbsExecute)

