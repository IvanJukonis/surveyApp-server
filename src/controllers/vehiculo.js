const Vehiculos = require('../models/Vehiculo');

const getVehiculo = async (req, res) => {
  try {
    const vehiculos = await Vehiculos.find();

    if (vehiculos.length > 0) {
      return res.status(200).json({
        message: 'Vehiculos list',
        data: vehiculos,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No vehiculos found',
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

const getVehiculoById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculos.findById(id).populate('involved');

    if (vehiculo) {
      return res.status(200).json({
        message: 'Vehiculo Found',
        data: vehiculo,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Vehiculo not found',
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

const createVehiculo = async (req, res) => {
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

    const newVehiculo = await Vehiculos.create({
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
      message: 'Vehiculo created',
      data: newVehiculo,
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

const updateVehiculo = async (req, res) => {
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

    const updatedVehiculo = await Vehiculos.findByIdAndUpdate(
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

    if (updatedVehiculo) {
      return res.status(200).json({
        message: 'Vehiculo updated',
        data: updatedVehiculo,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Vehiculo not found',
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

const deleteVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVehiculo = await Vehiculos.findByIdAndDelete(id);

    if (deletedVehiculo) {
      return res.status(200).json({
        message: `Vehiculo ${id} deleted`,
        data: deletedVehiculo,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Vehiculo not found',
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
  getVehiculo,
  getVehiculoById,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
};
