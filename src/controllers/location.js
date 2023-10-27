const Location = require('../models/Location');

const createLocation = (req, res) => {
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

  Location.create({
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
      message: 'Location created successfuly',
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

const updateLocation = (req, res) => {
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

  Location.findByIdAndUpdate(
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
          message: `Location with id: ${id} was not found`,
          error: true,
        });
      }
      return res.status(201).json(result);
    })
    .catch((error) => res.status(500).json(error));
};

const getAllLocations = (req, res) => {
  Location.find()
    .then((locations) => res.status(200).json({
      message: 'Complete locations list',
      data: locations,
      error: false,
    }))
    .catch((error) => res.status(500).json({
      message: 'An error ocurred',
      error,
    }));
};

const getById = (req, res) => {
  const { id } = req.params;
  Location.findById(id)
    .then((location) => {
      if (location) {
        res.status(200).json({
          message: 'Location found!',
          data: location,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Location not found',
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'An error ocurred',
      error,
    }));
};

const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;

    const locationExist = await Location.findById(id);

    if (!locationExist) {
      return res.status(404).send('ID was not found');
    }

    await Location.findByIdAndDelete(id);

    res.send('Location has been deleted');
  } catch (error) {
    res.status(500).send('Location could not be deleted');
  }
  return null;
};

module.exports = {
  updateLocation,
  deleteLocation,
  createLocation,
  getAllLocations,
  getById,
};
