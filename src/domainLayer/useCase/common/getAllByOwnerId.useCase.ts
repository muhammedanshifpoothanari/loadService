const { getAllByOwnerIdRepo: getAllByOwnerIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByOwnerIdWrapper  = require('../utility');
type functionToGetAllByOwnerIdRepo = (...args: any[]) => Promise<any>;
const getAllByOwnerIdExecute: functionToGetAllByOwnerIdRepo = async (dependency: typeof getAllByOwnerIdRepository, id: string) => {
  console.log('getAllByOwnerIdRepoRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = getAllByOwnerIdWrapper(getAllByOwnerIdRepository, getAllByOwnerIdExecute)

