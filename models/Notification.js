"use strict"

const mongoose      = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema        = mongoose.Schema({
    channel: {type: String, required: true},
    key: {type: String, required: true, unique: true},
    message: {type: String, required: true},
    created_at: { type: Date, default: Date.now}

},
    {
        toJSON: {
            transform: function(doc, ret) {
                ret.id = ret._id
                delete ret.__v;
                delete ret._id;
            }

        }

    }
);

Schema.index({"$**":"text"});
Schema.plugin(mongoosePaginate);
const Notification = mongoose.model('Notification', Schema);

module.exports = Notification ;