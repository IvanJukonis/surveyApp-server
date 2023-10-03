const vehicles = require('../models/Vehicle');

const getVehicles = (req, res) => {
  vehicles.find()
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: 'All vehicles',
          data,
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'An error ocurredd',
      error,
    }));
};

const getVehicleById = (req, res) => {
  const { id } = req.params;

  vehicles.findById(id)
    .populate('involved')
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: 'Vehicle Found',
          data,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Vehicle not found',
          error: true,
        });
      }
    })
    .catch((error) => {
      res.status(400).json({
        message: 'An error ocurred',
        error: error.msg,
      });
    });
};
const updateVehicle = (req, res) => {
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

  vehicles.findByIdAndUpdate(
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
  )
    .then((result) => {
      if (result) {
        res.status(201).json({
          message: 'Vehicle Updated',
          result,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Vehicle not found',
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'An error ocurred',
      error,
    }));
};

const deleteVehicle = (req, res) => {
  const { id } = req.params;
  vehicles.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: `Vehicle ${id} deleted`,
          data: result,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Vehicle not found',
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'Error in the request',
      error,
    }));
};

const createVehicle = (req, res) => {
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

  vehicles.create({
    involved,
    dominio,
    marca,
    modelo,
    color,
    uso,
    año,
    descripcionDaños,
  })
    .then((data) => {
      res.status(201).json({
        message: 'Vehicle created',
        data,
        error: false,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An error ocurred',
        error,
      });
    });
};

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
