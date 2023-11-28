const Vehicles = require('../models/Vehiculo');

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicles.find();

    if (vehicles.length > 0) {
      return res.status(200).json({
        message: 'Vehicles list',
        data: vehicles,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No vehicles found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicles.findById(id).populate('involved');

    if (vehicle) {
      return res.status(200).json({
        message: 'Vehicle Found',
        data: vehicle,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Vehicle not found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Request failed due to a server error',
      data: null,
      error: true,
    });
  }
};

const createVehicle = async (req, res) => {
  try {
    const {
      involved,
      dominio,
      marca,
      modelo,
      color,
      uso,
      año,
      descripcionDaños,
    } = req.body;

    const newVehicle = await Vehicles.create({
      involved,
      dominio,
      marca,
      modelo,
      color,
      uso,
      año,
      descripcionDaños,
    });

    return res.status(201).json({
      message: 'Vehicle created',
      data: newVehicle,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      involved,
      dominio,
      marca,
      modelo,
      color,
      uso,
      año,
      descripcionDaños,
    } = req.body;

    const updatedVehicle = await Vehicles.findByIdAndUpdate(
      id,
      {
        involved,
        dominio,
        marca,
        modelo,
        color,
        uso,
        año,
        descripcionDaños,
      },
      { new: true },
    );

    if (updatedVehicle) {
      return res.status(200).json({
        message: 'Vehicle updated',
        data: updatedVehicle,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Vehicle not found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Request failed due to a server error',
      data: null,
      error: true,
    });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVehicle = await Vehicles.findByIdAndDelete(id);

    if (deletedVehicle) {
      return res.status(200).json({
        message: `Vehicle ${id} deleted`,
        data: deletedVehicle,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Vehicle not found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Request failed due to a server error',
      data: null,
      error: true,
    });
  }
};

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
