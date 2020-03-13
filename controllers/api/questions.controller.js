var config = require('config.json');
var express = require('express');
var router = express.Router();
var questionService = require('services/question.service');

router.get('/getAll', getAll);
router.post('/register', createQuestion);
router.delete('/:_id', deleteQuestion);

module.exports = router;

function getAll(req, res) {
    questionService.getAll()
        .then(function (questions) {
            res.send(questions);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function createQuestion(req, res) {
    questionService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function deleteQuestion(req, res) {
    questionService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}