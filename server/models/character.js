const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Spellcasting = {
    cantrips_known: [ { type: String } ],
    spell_slots_level_1: { type: Number },
    spell_slots_level_2: { type: Number },
    spell_slots_level_3: { type: Number },
    spell_slots_level_4: { type: Number },
    spell_slots_level_5: { type: Number },
    spell_slots_level_6: { type: Number },
    spell_slots_level_7: { type: Number },
    spell_slots_level_8: { type: Number },
    spell_slots_level_9: { type: Number },
    spells_known: [ { type: String } ],
};

const Feature = {
    index: { type: String },
    name: { type: String },
    desc: { type: String },
};

const ArmorClass = {
    base: { type: Number },
    dex_bonus: { type: Boolean },
    max_bonus: { type: Number },
};

const AbilityScores = {
    str: { type: Number },
    dex: { type: Number },
    con: { type: Number },
    wis: { type: Number },
    int: { type: Number },
    cha: { type: Number },
}

const Equipment= {
    index: { type: String },
    name: { type: String },
    desc: { type: String },
};


const Background = {
    index: { type: String },
    name: { type: String },
    desc: { type: String },
};

const Feat = {
    index: { type: String },
    name: { type: String },
    desc: { type: String },
};

const Character = new Schema({
    _id: { type: String },
    desc: { type: [String] },
    full_name: { type: String },
    skills: [ { type: String } ],
    url: { type: String },
    age: { type: String },
    alignment: { type: String },
    size: { type: String },
    speed: { type: Number },
    proficiency: [ { type: String } ],
    subrace: { type: String },
    race: { type: String },
    languages: [ { type: String } ],
    ability_score: AbilityScores,
    background: Background,
    multi_class: { type: String },
    equipment: [Equipment],
    armor_class: ArmorClass,
    feats: [Feat],
    features: [Feature],
    spellcasting: Spellcasting,
    skills: [ { type: String } ],
    subclass: { type: String },
    user:
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        },
});

module.exports = mongoose.model('Character', Character, 'character');