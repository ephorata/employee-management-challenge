const {Router}  = require('express')
const {  createEmployee,
    getAllEmployees,
    editEmployee,
    deleteEmployee,} = require('../controllers/employeeController')

const router = Router()


router.route('/').post(createEmployee).get(getAllEmployees)
router.route('/:id').patch(editEmployee).delete(deleteEmployee)

module.exports = router