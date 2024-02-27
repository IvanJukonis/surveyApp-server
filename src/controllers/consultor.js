const Consultores = require('../models/Consultor');
const firebaseApp = require('../helper/firebase/firebase-config');

const getConsultor = async (req, res) => {
  try {
    const consultores = await Consultores.find();

    if (consultores.length > 0) {
      return res.status(200).json({
        message: 'Consultores list',
        data: consultores,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No consultores found',
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

const getConsultorById = async (req, res) => {
  const { id } = req.params;
  try {
    const consultores = await Consultores.findById(id);
    if (consultores) {
      res.status(200).json({
        message: 'Consultor found',
        data: consultores,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Consultor not found',
        data: null,
        error: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const postConsultor = async (req, res) => {
  const {
    tipo,
    nombre,
    apellido,
    email,
    dni,
    activo,
    atendido,
    aseguradora,
  } = req.body;

  let firebaseUid;

  try {
    const existingConsultor = await Consultores.findOne({ email });
    const existingDNIConsultor = await Consultores.findOne({ dni });

    if (existingConsultor) {
      return res.status(400).json({
        message: 'Email already exists',
        data: null,
        error: true,
      });
    }

    if (existingDNIConsultor) {
      return res.status(400).json({
        message: 'This DNI is registered',
        data: null,
        error: true,
      });
    }

    const newFirebaseUser = await firebaseApp.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    });

    firebaseUid = newFirebaseUser.uid;

    await firebaseApp.auth().setCustomUserClaims(newFirebaseUser.uid, { role: 'CONSULTOR' });

    const result = await Consultores.create({
      firebaseUid,
      tipo,
      nombre,
      apellido,
      email,
      dni,
      activo,
      atendido,
      aseguradora,
    });

    return res.status(201).json({
      message: 'Consultor created',
      data: result,
      error: false,
    });
  } catch (error) {
    if (error.message.includes('E11000 duplicate key error collection')) {
      return res.status(400).json({
        message: 'Email already exists',
        data: null,
        error: true,
      });
    }
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const updateConsultor = async (req, res) => {
  const { id } = req.params;

  const {
    tipo,
    nombre,
    apellido,
    email,
    dni,
    activo,
    atendido,
    aseguradora,
  } = req.body;

  try {
    const consultores = await Consultores.findByIdAndUpdate(
      id,
      {
        tipo,
        nombre,
        apellido,
        email,
        dni,
        activo,
        atendido,
        aseguradora,
      },
      { new: true },
    );

    if (consultores) {
      res.status(201).json({
        message: 'Consultor updated',
        data: consultores,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Consultor not found',
        data: null,
        error: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const deleteConsultor = async (req, res) => {
  const { id } = req.params;
  try {
    const existingConsultor = await Consultores.findOne({ _id: id });

    if (!existingConsultor) {
      return res.status(404).json({
        message: 'Consultor not found',
        data: null,
        error: true,
      });
    }
    const { firebaseUid } = existingConsultor;

    await firebaseApp.auth().deleteUser(firebaseUid);

    const result = await Consultores.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        message: 'Consultor not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Consultor deleted',
      data: null,
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

module.exports = {
  getConsultor,
  getConsultorById,
  postConsultor,
  updateConsultor,
  deleteConsultor,
};
