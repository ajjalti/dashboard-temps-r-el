const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const SensorData = require('../models/SensorData');

// Récupérer historique d’un capteur (limit 100)
router.get('/:sensorId', authMiddleware, async (req, res) => {
  try {
    const data = await SensorData.find({ sensorId: req.params.sensorId })
      .sort({ timestamp: -1 })
      .limit(100);
    res.json(data.reverse()); // renvoyer dans l’ordre chronologique
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
