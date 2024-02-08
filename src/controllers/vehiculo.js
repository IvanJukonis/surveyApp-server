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
      message: 'Internal Server Error',
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
        message: 'Vehiculo found',
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
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const postVehiculo = async (req, res) => {
  try {
    const {
      siniestro,
      rol,
      prioridad,
      dominio,
      marca,
      modelo,
      color,
      uso,
      fabricacion,
      tipo,
      fechaAdquisicion,
      danos,
      descripcionDanos,
      alarma,
      cierreCentralizado,
    } = req.body;

    const newVehiculo = await Vehiculos.create({
      siniestro,
      rol,
      prioridad,
      dominio,
      marca,
      modelo,
      color,
      uso,
      fabricacion,
      tipo,
      fechaAdquisicion,
      danos,
      descripcionDanos,
      alarma,
      cierreCentralizado,
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
      siniestro,
      rol,
      prioridad,
      dominio,
      marca,
      modelo,
      color,
      uso,
      fabricacion,
      tipo,
      fechaAdquisicion,
      danos,
      descripcionDanos,
      alarma,
      cierreCentralizado,
    } = req.body;

    const updatedVehiculo = await Vehiculos.findByIdAndUpdate(
      id,
      {
        siniestro,
        rol,
        prioridad,
        dominio,
        marca,
        modelo,
        color,
        uso,
        fabricacion,
        tipo,
        fechaAdquisicion,
        danos,
        descripcionDanos,
        alarma,
        cierreCentralizado,
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
      message: 'Internal Server Error',
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
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

module.exports = {
  getVehiculo,
  getVehiculoById,
  postVehiculo,
  updateVehiculo,
  deleteVehiculo,
};
