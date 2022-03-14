const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Spellcasting = {
    cantrips_known: [ { type: String, index: true } ],
    spell_slots_level_1: { type: Number, index: true },
    spell_slots_level_2: { type: Number, index: true },
    spell_slots_level_3: { type: Number, index: true },
    spell_slots_level_4: { type: Number, index: true },
    spell_slots_level_5: { type: Number, index: true },
    spell_slots_level_6: { type: Number, index: true },
    spell_slots_level_7: { type: Number, index: true },
    spell_slots_level_8: { type: Number, index: true },
    spell_slots_level_9: { type: Number, index: true },
    spells_known: [ { type: String, index: true } ],
};

const Feature = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    desc: { type: String, index: true },
};

const ArmorClass = {
    base: { type: Number, index: true },
    dex_bonus: { type: Boolean, index: true },
    max_bonus: { type: Number, index: true },
};

const AbilityScores = {
    str: { type: Number, index: true },
    dex: { type: Number, index: true },
    con: { type: Number, index: true },
    wis: { type: Number, index: true },
    int: { type: Number, index: true },
    cha: { type: Number, index: true },
}

const Equipment= {
    index: { type: String, index: true },
    name: { type: String, index: true },
    desc: { type: String, index: true },
};


const Background = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    desc: { type: String, index: true },
};

const Feat = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    desc: { type: String, index: true },
};

const Character = new Schema({
    _id: { type: String, select: false },
    desc: { type: [String], index: true },
    full_name: { type: String, index: true },
    skills: [ { type: String, index: true } ],
    url: { type: String, index: true },
    age: { type: String, index: true },
    alignment: { type: String, index: true },
    size: { type: String, index: true },
    speed: { type: Number, index: true },
    proficiency: [ { type: String, index: true } ],
    subrace: { type: String, index: true },
    race: { type: String, index: true },
    languages: [ { type: String, index: true } ],
    ability_score: AbilityScores,
    background: Background,
    multi_class: { type: String, index: true },
    equipment: [Equipment],
    armor_class: ArmorClass,
    feats: [Feat],
    features: [Feature],
    spellcasting: Spellcasting,
    skills: [ { type: String, index: true } ],
    subclass: { type: String, index: true },
    user:
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
});

module.exports = mongoose.model('Character', Character, 'character');