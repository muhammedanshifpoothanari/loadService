const { getAllByWarehouseIdRepo: getAllByWarehouseIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByWarehouseIdRepoWrapper  = require('../utility');
type functionToGetAllByWarehouseIdRepo = (...args: any[]) => Promise<any>;
const getAllByWareHouseIdExecute: functionToGetAllByWarehouseIdRepo = async (dependency: typeof getAllByWarehouseIdRepository, id: string) => {
  console.log('getAllByWarehouseIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = getAllByWarehouseIdRepoWrapper(getAllByWarehouseIdRepository, getAllByWareHouseIdExecute)

