'use strict';

const Note = require('../models/note');

exports.list = (req, res) => {
    const notes = Note.findAll();
    const data = {
        notes: notes
    };

    res.render('notes/notes', Object.assign(data, req.commonData));
};

exports.item = (req, res) => {
    const name = req.params.name;
    const note = Note.find(name);

    if (!note) {
        res.sendStatus(404);

        return;
    }

    const data = {
        name: note.name,
        text: note.text
    };

    res.render('note/note', Object.assign(data, req.commonData));
};

exports.create = (req, res) => {
    const data = {
        name: req.body.name,
        text: req.body.text,
        createdAt: Date.now()
    };

    const note = new Note(data);

    note.save();

    res.send(data);
};

exports.checks = (req, res, next) => {
    if (!req.body.name.trim() || !req.body.text.trim()) {
        res.status(400).send('Заполните все поля.');

        return;
    }

    next();
};
