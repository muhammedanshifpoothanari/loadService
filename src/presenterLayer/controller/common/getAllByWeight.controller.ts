import { Request, Response } from 'express';
const { getAllByWeightUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByWeightCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByWeightCntrl,'hdhdhhdhd');
    const weight: string =req.body.weight;
    const sort: number = req.body.sort; 
    const loads = await wrappedFunction(weight, sort);
    console.log(loads,'hdhdhhdhd');
    if (loads) 
      return loads
  return false;
  } catch (error) {
    console.log(error);
    
  }
};


module.exports = {
    getAllByWeightCntrl
};