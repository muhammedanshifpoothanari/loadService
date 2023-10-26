import { Request, Response } from 'express';
const { getByLoadIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getByLoadIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getByLoadIdCntrl,'hdhdhhdhd');
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
 getByLoadIdCntrl
};