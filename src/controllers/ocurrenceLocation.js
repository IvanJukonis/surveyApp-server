const OcurrenceLocation = require('../models/OccurrenceLocation');

const createOcurrenceLocation = (req, res) => {
  const {
    calleVA,
    calleVT,
    direccionVA,
    direccionVT,
    direccionCalleVA,
    direccionCalleVT,
    estadoCalleVA,
    estadoCalleVT,
    calleAdicional,
    direccionCalleAdicional,
    ciudad,
    localidad,
  } = req.body;

  OcurrenceLocation.create({
    calleVA,
    calleVT,
    direccionVA,
    direccionVT,
    direccionCalleVA,
    direccionCalleVT,
    estadoCalleVA,
    estadoCalleVT,
    calleAdicional,
    direccionCalleAdicional,
    ciudad,
    localidad,
  })
    .then((result) => res.status(201).json({
      message: 'OcurrenceLocation created successfuly',
      data: result,
      error: false,
    }))
    .catch((error) => {
      if (error.message.includes('E11000 duplicate key error collection')) {
        return res.status(400).json({
          message: 'Email already exists',
          error,
        });
      }
      return res.status(500).json({
        message: 'An error ocurred',
        error,
      });
    });
};

const updateOcurrenceLocation = (req, res) => {
  const { id } = req.params;
  const {
    calleVA,
    calleVT,
    direccionVA,
    direccionVT,
    direccionCalleVA,
    direccionCalleVT,
    estadoCalleVA,
    estadoCalleVT,
    calleAdicional,
    direccionCalleAdicional,
    ciudad,
    localidad,
  } = req.body;

  OcurrenceLocation.findByIdAndUpdate(
    id,
    {
      calleVA,
      calleVT,
      direccionVA,
      direccionVT,
      direccionCalleVA,
      direccionCalleVT,
      estadoCalleVA,
      estadoCalleVT,
      calleAdicional,
      direccionCalleAdicional,
      ciudad,
      localidad,
    },
    { new: true },
  )
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: `OcurrenceLocation with id: ${id} was not found`,
          error: true,
        });
      }
      return res.status(201).json(result);
    })
    .catch((error) => res.status(500).json(error));
};

const getAllOcurrenceLocations = (req, res) => {
  OcurrenceLocation.find()
    .then((ocurrenceLocations) => res.status(200).json({
      message: 'Complete ocurrenceLocations list',
      data: ocurrenceLocations,
      error: false,
    }))
    .catch((error) => res.status(500).json({
      message: 'An error ocurred',
      error,
    }));
};

const getById = (req, res) => {
  const { id } = req.params;
  OcurrenceLocation.findById(id)
    .then((ocurrenceLocation) => {
      if (ocurrenceLocation) {
        res.status(200).json({
          message: 'OcurrenceLocation found!',
          data: ocurrenceLocation,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'OcurrenceLocation not found',
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'An error ocurred',
      error,
    }));
};

const deleteOcurrenceLocation = async (req, res) => {
  try {
    const { id } = req.params;

    const ocurrenceLocationExist = await OcurrenceLocation.findById(id);

    if (!ocurrenceLocationExist) {
      return res.status(404).send('ID was not found');
    }

    await OcurrenceLocation.findByIdAndDelete(id);

    res.send('OcurrenceLocation has been deleted');
  } catch (error) {
    res.status(500).send('OcurrenceLocation could not be deleted');
  }
  return null;
};

module.exports = {
  updateOcurrenceLocation,
  deleteOcurrenceLocation,
  createOcurrenceLocation,
  getAllOcurrenceLocations,
  getById,
};
