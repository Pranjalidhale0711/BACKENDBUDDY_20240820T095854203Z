// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Schema = require('../models/schemaSchema');

// CRUD operations for schema
// Create Controller 
const createSchema = async (req, res) => { 
    const { fieldname1 } = req.body;
    try {
        const schema = await Schema.create({ fieldname1 }) 
        await schema.save();
        res.status(201).json(schema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateSchema = async (req, res) => { 
    const _id=req.params.id;
    const { fieldname1 } = req.body;
    try {
        const schema = await Schema.findByIdAndUpdate( _id, { fieldname1 },{new:true}) 
        if (!schema) {
            return res.status(404).send('schema not found');
        }
        await schema.save();
        res.status(201).json(schema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteSchema = async (req, res) => { 
    const _id=req.params.id;
    try {
        const schema = await Schema.findById(_id)
        if (!schema) {
            return res.status(404).send('schema not found');
        }
        await Schema.deleteOne({_id: _id})
        await schema.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getSchema = async (req, res) => { 
    const _id=req.params.id;
    try {
        const schema = await Schema.findById(_id)
        if (!schema) {
            return res.status(404).send('schema not found');
        }
        res.status(201).json(schema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllSchema = async (req, res) => { 
    try {
        const schema = await Schema.find({})
        if (!schema) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(schema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createSchema,
    updateSchema,
    deleteSchema,
    getSchema,
    getAllSchema
}