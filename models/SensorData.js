const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  sensorId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  value: { type: Number, required: true }
});

module.exports = mongoose.model('SensorData', sensorDataSchema);
