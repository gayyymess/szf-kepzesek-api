const Training = require('../models/training.js')

// @desc   Get all trainings
// @route  GET /api/trainings
// @access Public
exports.getTrainings = async (req, res, next) => {
    const data = await Training.find();
    res.json(data);
    //res.status(200).json({ success: true, msg: "Show all trainings", hello: req.hello });
};
// @desc   Get single training
// @route  GET /api/trainings/:id
// @access Public
exports.getTraining = async (req, res, next) => {
    const data = await Training.find()
    Object.keys(data).forEach(key => {
        if (data[key]["_id"] == req.params.id)
           res.json(data[key])
      });
};
// @desc   Create new training
// @route  POST /api/trainings
// @access Private
exports.createTraining = async (req, res, next) => {
    console.log(req.body);

          try {
            const training = await Training.create(req.body);
            res.status(201).json({ success: true, data: training });
          } catch (error) {
            res.status(400).json({ success: false });
          }
    //res.status(200).json({ success: true, msg: "Create new training" });
};
// @desc   Update training
// @route  PUT /api/trainings/:id
// @access Private
exports.updateTraining = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update training ${req.params.id}` });
};
// @desc   Delete training
// @route  DELETE /api/trainings/:id
// @access Private
exports.deleteTraining = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete training ${req.params.id}` });
};