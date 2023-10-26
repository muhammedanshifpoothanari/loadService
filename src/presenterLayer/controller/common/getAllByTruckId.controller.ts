import { Request, Response } from 'express';
const { getAllByTruckIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByTruckIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByTruckIdCntrl,'hdhdhhdhd');
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
 getAllByTruckIdCntrl
};