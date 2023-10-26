import { Request, Response } from 'express';
const { getAllByWareHouseIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByWareHouseIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByWareHouseIdCntrl,'hdhdhhdhd');
    const id: string =req.params.id 
    const loads = await wrappedFunction(id);
    console.log(loads,'hdhdhhdhd');
    if (loads) 
      return loads;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
 getAllByWareHouseIdCntrl
};