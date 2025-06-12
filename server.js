require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');
const SensorData = require('./models/SensorData');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" ,methods:['GET','POST']}
});

app.use(cors());
app.use(express.json());

// Connexion MongoDB
connectDB();


// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Middleware Socket.IO pour auth JWT
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Token manquant'));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.id;
    next();
  } catch (err) {
    next(new Error('Token invalide'));
  }
});

// Gestion connexions Socket.IO
io.on('connection', (socket) => {
  console.log(`Utilisateur connecté: ${socket.userId}`);

  socket.on('disconnect', () => {
    console.log(`Utilisateur déconnecté: ${socket.userId}`);
  });
});

// Simulation multi-capteurs
const sensorIds = ['temp', 'humidity', 'pressure'];

function simulateSensors() {
  sensorIds.forEach(async (sensorId) => {
    const value = Math.floor(Math.random() * 100);
    const data = new SensorData({ sensorId, value });
    await data.save();

    // Émission en temps réel à tous les clients
    io.emit('sensor-data', { sensorId, timestamp: data.timestamp, value });
  });
}

// Envoie toutes les secondes
setInterval(simulateSensors, 1000);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
