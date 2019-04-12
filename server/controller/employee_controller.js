

    const successJS = require('../dto/successDTO');
    const errorJS = require('../dto/errorDTO');
    const employeeService = require('../service/employeeService');
    module.exports = { 
    getEmployee: (req, res, next) => {
      try{
  
        
        var successDTO = new successJS.SuccessDTO();
        successDTO.data = employeeService.getEmployee();

        //return successDTO
        res.json(successDTO);

      } catch(error){

        //return errorDTO
        var errorDTO = new errorJS.ErrorDTO();
        errorDTO.message = ""
        errorDTO.data = error;
        res.status(401).json(errorDTO);
      }
    },
    addEmployee: (req, res, next) => {
      try{
  
        
        var successDTO = new successJS.SuccessDTO();
        successDTO.data = employeeService.addEmployee();

        //return successDTO
        res.json(successDTO);

      } catch(error){

        //return errorDTO
        var errorDTO = new errorJS.ErrorDTO();
        errorDTO.message = ""
        errorDTO.data = error;
        res.status(401).json(errorDTO);
      }
    } }

