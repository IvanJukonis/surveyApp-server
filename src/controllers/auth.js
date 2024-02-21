import Controlador from '../models/Controlador';
import SuperAdmin from '../models/SuperAdmin';
import Administrativo from '../models/Administrativos';
import Relevador from '../models/Relevador';

const getAuth = async (req, res) => {
  try {
    const controlador = await Controlador.findOne({ firebaseUid: req.headers.firebaseUid });
    if (controlador) {
      return res.status(201).json({
        message: 'Member found',
        data: controlador,
        error: false,
      });
    }
    const administrativo = await Administrativo.findOne({ firebaseUid: req.headers.firebaseUid });
    if (administrativo) {
      return res.status(201).json({
        message: 'Administrativo found',
        data: administrativo,
        error: false,
      });
    }
    const relevador = await Relevador.findOne({ firebaseUid: req.headers.firebaseUid });
    if (relevador) {
      return res.status(201).json({
        message: 'Relevador found',
        data: relevador,
        error: false,
      });
    }
    const superAdmin = await SuperAdmin.findOne({ firebaseUid: req.headers.firebaseUid });
    if (superAdmin) {
      return res.status(201).json({
        message: 'Super Admin found',
        data: superAdmin,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'User not found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: null,
      error: true,
    });
  }
};

export default { getAuth };
