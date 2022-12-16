import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new mongoose.Schema({
    title: {String,
    required: true},

    Tasks: [],
})

const TodoModel = mongoose.model( "Todo", TodoSchema)
export default TodoModel;
