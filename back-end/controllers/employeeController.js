const Employee = require("../models/Employee")
const { StatusCodes } = require("http-status-codes")

const createEmployee = async (req, res) => {
  try {
    console.log("the request body is ", req.body)
    const employee = await Employee.create(req.body)
    res.status(StatusCodes.CREATED).json({ employee })
  } catch (err) {
    // console.log(err)
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ err: "please make sure the inputs are valid " })
  }
}
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({})
    res.status(StatusCodes.OK).json({ employees })
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ err: error.message })
  }
}

const editEmployee = async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const employee = await Employee.findByIdAndUpdate(id,updatedData,{new:true})
    res.status(StatusCodes.OK).json(employee)
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.BAD_REQUEST).json({err:error.message})}
  }

const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const employee = await Employee.findByIdAndDelete(id)
    res.status(StatusCodes.OK).json({msg:`employee with id ${id} has been succesfully deleted `})
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.BAD_REQUEST).json({err:error.message})}
}

module.exports = {
  createEmployee,
  getAllEmployees,
  editEmployee,
  deleteEmployee,
}
