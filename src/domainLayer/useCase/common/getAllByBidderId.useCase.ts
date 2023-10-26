const { getAllByBidderIdRepo: getAllByBidderIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByBidderWrapper  = require('../utility');
type functionIdToGetAllLoadByBidderId = (...args: any[]) => Promise<any>;
const getAllByBidderIdExecute: functionIdToGetAllLoadByBidderId = async (dependency: typeof getAllByBidderIdRepository, id: string) => {
  console.log('getAllByBidderIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = getAllByBidderWrapper(getAllByBidderIdRepository, getAllByBidderIdExecute)

