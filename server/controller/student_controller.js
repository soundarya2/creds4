

    const successJS = require('../dto/successDTO');
    const errorJS = require('../dto/errorDTO');
    const studentService = require('../service/studentService');
    module.exports = { 
    getStudents: (req, res, next) => {
      try{
  
        
        var successDTO = new successJS.SuccessDTO();
        successDTO.data = studentService.getStudents();

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
    addStudent: (req, res, next) => {
      try{
  
        
        var successDTO = new successJS.SuccessDTO();
        successDTO.data = studentService.addStudent();

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

