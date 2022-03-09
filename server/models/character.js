const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { APIReference } = require('./common');

const Subrace = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const Race = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const SubraceOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const AbilityBonusOption = {
    ability_score: APIReference,
    bonus: { type: Number, index: true },
};

const RaceAbilityBonusOptions = {
    choose: { type: Number, index: true },
    from: [AbilityBonusOption],
    type: { type: String, index: true },
};

const RaceAbilityBonus = {
    ability_score: APIReference,
    bonus: { type: Number, index: true },
};

const LanguageOptions = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const Language = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const StartingProficiencyOptions = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const RaceOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const WeaponPropertyChoice = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const Proficiency = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const ProficiencyChoices = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const Choice = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const ActionDamage = {
    damage_type: APIReference,
    damage_at_character_level: Object,
};

const Usage = {
    type: { type: String, index: true },
    times: { type: Number, index: true },
};

const DC = {
    dc_type: APIReference,
    success_type: { type: String, index: true },
};

const Action = {
    name: { type: String, index: true },
    desc: { type: String, index: true },
    usage: Usage,
    dc: DC,
    damage: [ActionDamage],
};

const TraitSpecific = {
    subtrait_options: Choice,
    spell_options: Choice,
    damage_type: APIReference,
    breath_weapon: Action,
};

const Trait = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const SpellPrerequisite = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    type: { type: String, index: true },
    url: { type: String, index: true },
};

const Spell = {
    prerequisites: [SpellPrerequisite],
    spell: APIReference,
};

const SpellOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const Subclass = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const SubclassOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const Skill = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const SkillOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const RuleSection = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const RuleSectionOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const Rule = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const RuleOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const MagicSchool = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const MagicSchoolOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const MagicItem = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const MagicItemOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const ClassSpecificCreatingSpellSlot = {
    sorcery_point_cost: { type: Number, index: true },
    spell_slot_level: { type: Number, index: true },
};

const ClassSpecificMartialArt = {
    dice_count: { type: Number, index: true },
    dice_value: { type: Number, index: true },
};

const ClassSpecificSneakAttack = {
    dice_count: { type: Number, index: true },
    dice_value: { type: Number, index: true },
};

const ClassSpecific = {
    action_surges: { type: Number, index: true },
    arcane_recovery_levels: { type: Number, index: true },
    aura_range: { type: Number, index: true },
    bardic_inspiration_die: { type: Number, index: true },
    brutal_critical_dice: { type: Number, index: true },
    channel_divinity_charges: { type: Number, index: true },
    creating_spell_slots: [ClassSpecificCreatingSpellSlot],
    destroy_undead_cr: { type: Number, index: true },
    extra_attacks: { type: Number, index: true },
    favored_enemies: { type: Number, index: true },
    favored_terrain: { type: Number, index: true },
    indomitable_uses: { type: Number, index: true },
    invocations_known: { type: Number, index: true },
    ki_points: { type: Number, index: true },
    magical_secrets_max_5: { type: Number, index: true },
    magical_secrets_max_7: { type: Number, index: true },
    magical_secrets_max_9: { type: Number, index: true },
    martial_arts: ClassSpecificMartialArt,
    metamagic_known: { type: Number, index: true },
    mystic_arcanum_level_6: { type: Number, index: true },
    mystic_arcanum_level_7: { type: Number, index: true },
    mystic_arcanum_level_8: { type: Number, index: true },
    mystic_arcanum_level_9: { type: Number, index: true },
    rage_count: { type: Number, index: true },
    rage_damage_bonus: { type: Number, index: true },
    sneak_attack: ClassSpecificSneakAttack,
    song_of_rest_die: { type: Number, index: true },
    sorcery_points: { type: Number, index: true },
    unarmored_movement: { type: Number, index: true },
    wild_shape_fly: { type: Boolean, index: true },
    wild_shape_max_cr: { type: Number, index: true },
    wild_shape_swim: { type: Boolean, index: true },
};

const Spellcasting = {
    cantrips_known: { type: Number, index: true },
    spell_slots_level_1: { type: Number, index: true },
    spell_slots_level_2: { type: Number, index: true },
    spell_slots_level_3: { type: Number, index: true },
    spell_slots_level_4: { type: Number, index: true },
    spell_slots_level_5: { type: Number, index: true },
    spell_slots_level_6: { type: Number, index: true },
    spell_slots_level_7: { type: Number, index: true },
    spell_slots_level_8: { type: Number, index: true },
    spell_slots_level_9: { type: Number, index: true },
    spells_known: { type: Number, index: true },
};

const SubclassSpecific = {
    additional_magical_secrets_max_lvl: { type: Number, index: true },
    aura_range: { type: Number, index: true },
};

const Prerequisite = {
    level: { type: Number, index: true },
    type: { type: String, index: true },
};

const FeatureSpecific = {
    subfeature_options: Choice,
    expertise_options: Choice,
};

const Feature = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const Feat = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const FeatOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const FeatureOption = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const EquipmentCategory= {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const EquipmentCategoryOptions = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const ArmorClass = {
    base: { type: Number, index: true },
    dex_bonus: { type: Boolean, index: true },
    max_bonus: { type: Number, index: true },
};

const Content = {
    item: APIReference,
    quantity: { type: Number, index: true },
};

const Cost = {
    quantity: { type: Number, index: true },
    unit: { type: String, index: true },
};

const Range = {
    long: { type: Number, index: true },
    normal: { type: Number, index: true },
};

const Speed = {
    quantity: { type: Number, index: true },
    unit: { type: String, index: true },
};

const ThrowRange = {
    long: { type: Number, index: true },
    normal: { type: Number, index: true },
};

const TwoHandedDamage = {
    damage_dice: { type: String, index: true },
    damage_type: APIReference,
};

const Equipment= {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const EquipmentOptions = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const DamageType= {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const Condition= {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const StartingEquipmentOption = {
    equipment: APIReference,
    quantity: { type: Number, index: true },
};

const StartingEquipmentOptions = {
    choose: { type: Number, index: true },
    from: [StartingEquipmentOption],
    type: { type: String, index: true },
};

const ProficiencyChoice = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const MultiClassingPrereq = {
    ability_score: APIReference,
    minimum_score: { type: Number, index: true },
};

const MultiClassingPrereqOptions = {
    choose: { type: Number, index: true },
    from: [MultiClassingPrereq],
    type: { type: String, index: true },
};

const MultiClassing = {
    prerequisites: [MultiClassingPrereq],
    prerequisite_options: MultiClassingPrereqOptions,
    proficiencies: [APIReference],
    proficiency_choices: [ProficiencyChoice],
};

const Ideal = {
    desc: { type: String, index: true },
    alignments: [APIReference],
};

const IdealOptions = {
    choose: { type: Number, index: true },
    from: [Ideal],
    type: { type: String, index: true },
};

const Background = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const BackgroundOptions = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const AlignmentOptions = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const Alignment = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const AbilityScore = {
    index: { type: String, index: true },
    name: { type: String, index: true },
    url: { type: String, index: true },
};

const AbilityScoreOptions = {
    choose: { type: Number, index: true },
    from: [APIReference],
    type: { type: String, index: true },
};

const AreaOfEffect = new Schema({
    _id: false,
    size: Number,
    type: String,
});

const Damage = new Schema({
    _id: false,
    // As this has keys that are numbers, we have to use an `Object`, which you can't query subfields
    damage_at_slot_level: Object,
    // As this has keys that are numbers, we have to use an `Object`, which you can't query subfields
    damage_at_character_level: Object,
    damage_type: APIReference,
    damage_dice: { type: String, index: true },
});


const Character = new Schema({
    _id: { type: String, select: false },
    desc: { type: [String], index: true },
    full_name: { type: String, index: true },
    index: { type: String, index: true },
    name: { type: String, index: true },
    skills: [APIReference],
    url: { type: String, index: true },
    ability_bonus_options: RaceAbilityBonusOptions,
    ability_bonuses: [RaceAbilityBonus],
    age: { type: String, index: true },
    alignment: Alignment,
    alignment_options: AlignmentOptions,
    language_desc: { type: String, index: true },
    language_options: LanguageOptions,
    languages: [APIReference],
    size: { type: String, index: true },
    size_description: { type: String, index: true },
    speed: Speed,
    starting_proficiencies: [APIReference],
    starting_proficiency_options: StartingProficiencyOptions,
    proficiency: Proficiency,
    subrace: Subrace,
    subrace_options: SubraceOption,
    trait: Trait,
    trait_specific: TraitSpecific,
    race: Race,
    race_option: RaceOption,
    language: Language,
    proficiency_choices: ProficiencyChoices,
    weapon_property_choice: WeaponPropertyChoice,
    ability_score_options: AbilityScoreOptions,
    ability_score: AbilityScore,
    background: Background,
    background_options: BackgroundOptions,
    ideal_options: IdealOptions,
    ideal: Ideal,
    multi_classing: MultiClassing,
    two_handed_damage: TwoHandedDamage,
    throw_range: ThrowRange,
    cost: Cost,
    damage: Damage,
    contents: [Content],
    starting_equipment_options: StartingEquipmentOptions,
    damage_type: DamageType,
    condition: Condition,
    range: Range,
    equipment: Equipment,
    equipment_options: EquipmentOptions,
    armor_class: ArmorClass,
    equipment_category: EquipmentCategory,
    equipment_category_options: EquipmentCategoryOptions,
    feature_specific: FeatureSpecific,
    feature_option: FeatureOption,
    feat: Feat,
    feat_option: FeatOption,
    feature: Feature,
    area_of_effect: AreaOfEffect,
    prerequisites: [Prerequisite],
    subclass_specific: SubclassSpecific,
    spellcasting: Spellcasting,
    class_specific: ClassSpecific,
    magic_item: MagicItem,
    magic_item_option: MagicItemOption,
    magic_school_option: MagicSchoolOption,
    magic_school: MagicSchool,
    rule_option: RuleOption,
    rule: Rule,
    rule_section_option: RuleSectionOption,
    rule_section: RuleSection,
    skill_option: SkillOption,
    skill: Skill,
    subclass_option: SubclassOption,
    subclass: Subclass,
    spell_option: SpellOption,
    spell: Spell,
});

module.exports = mongoose.model('Character', Character, 'character');