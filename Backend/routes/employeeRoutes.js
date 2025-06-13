import express from 'express';
import Employee from '../models/Employee.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all routes
router.use(authMiddleware);

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find({ createdBy: req.user.userId })
      .sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees' });
  }
});

// Get single employee
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findOne({
      _id: req.params.id,
      createdBy: req.user.userId
    });
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee' });
  }
});

// Create employee
router.post('/', async (req, res) => {
  try {
    const employee = new Employee({
      ...req.body,
      createdBy: req.user.userId
    });
    
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error creating employee' });
  }
});

// Update employee
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.findOne({
      _id: req.params.id,
      createdBy: req.user.userId
    });
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    Object.assign(employee, req.body);
    await employee.save();
    res.json(employee);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error updating employee' });
  }
});

// Delete employee
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId
    });
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee' });
  }
});

export default router; 