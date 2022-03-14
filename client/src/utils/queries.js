import { gql } from '@apollo/client';

export const QUERY_ABILITY_SCORE = gql`
  query getAbilityScore {
    ability_score {
      _id
      desc
      full_name
      index
      name
    }
  }
`;

export const QUERY_ONE_ABILITY_SCORE = gql`
  query getOneAbilityScore($abilityScoreId: ID!) {
    ability_scores(abilityScoreId: $abilityScoreId) {
      _id
      desc
      full_name
      index
      name
      }
  }
`;

export const QUERY_ALIGNMENT = gql`
  query getAlignment {
    alignments {
      _id
      desc
      abbreviation
      index
      name
      
    }
  }
`;

export const QUERY_ONE_ALIGNMENT = gql`
  query getOneAlignment($alignmentId: ID!) {
    alignments(alignmentId: $alignmentId) {
      _id
      desc
      abbreviation
      index
      name
      }
  }
`;

export const QUERY_BACKGROUND = gql`
  query getBackground {
    backgrounds {
      _id
      index
      name
    }
  }
`;

export const QUERY_ONE_BACKGROUND = gql`
  query getBackground($backgroundId: ID!) {
    backgrounds(backgroundId: $backgroundId) {
      _id
      index
      name
      }
  }
`;

export const QUERY_CLASS = gql`
  query getClass {
    classes {
      _id
      class_levels
      hit_die
      index
      name
      spells
    }
  }
`;

export const QUERY_ONE_CLASS = gql`
  query getOneClass($classId: ID!) {
    classes(classId: $classId) {
      _id
      class_levels
      hit_die
      index
      name
      spells
      }
  }
`;

export const QUERY_CONDITION = gql`
  query getCondition {
    conditions {
      _id
      desc
      index
      name
    }
  }
`;

export const QUERY_ONE_CONDITION = gql`
  query getOneCondition($conditionId: ID!) {
    conditions(conditionId: $conditionId) {
      _id
      desc
      index
      name
      }
  }
`;

export const QUERY_DAMAGE_TYPE = gql`
  query getDamageType {
    damage_types {
      _id
      desc
      index
      name
    }
  }
`;

export const QUERY_ONE_DAMAGE_TYPE = gql`
  query getOneDamageType($damageTypeId: ID!) {
    damage_types(damageTypeId: $damageTypeId) {
      _id
      desc
      index
      name
      }
  }
`;

export const QUERY_EQUIPMENT = gql`
  query getEquipment {
    equipment {
      _id
      armor_category
      capacity
      category_range
      desc
      index
      name
      quantity
      special
      stealth_disadvantage
      str_minimum
      tool_category
      vehicle_category
      weapon_category
      weapon_range
      weight
    }
  }
`;

export const QUERY_ONE_EQUIPMENT = gql`
  query getOneEquipment($equipmentId: ID!) {
    equipment(equipmentId: $equipmentId) {
      _id
      armor_category
      capacity
      category_range
      desc
      index
      name
      quantity
      special
      stealth_disadvantage
      str_minimum
      tool_category
      vehicle_category
      weapon_category
      weapon_range
      weight
      }
  }
`;

export const QUERY_EQUIPMENT_CATEGORY = gql`
  query getEquipmentCategory {
    equipment_category {
      _id
      index
      name
    }
  }
`;

export const QUERY_ONE_EQUIPMENT_CATEGORY = gql`
  query getOneEquipmentCategory($equipmentCategoryId: ID!) {
    equipment_category(equipmentCategoryId: $equipmentCategoryId) {
      _id
      index
      name
      }
  }
`;

export const QUERY_FEAT= gql`
  query getFeat {
    feats {
      _id
      index
      name
    }
  }
`;

export const QUERY_ONE_FEAT = gql`
  query getOneFeat($featId: ID!) {
    feats(featId: $featId) {
      _id
      index
      name
      }
  }
`;

export const QUERY_FEATURE= gql`
  query getFeature {
    features {
      _id
      desc
      index
      level
      name
      reference
    }
  }
`;

export const QUERY_ONE_FEATURE = gql`
  query getOneFeature($featureId: ID!) {
    features(featureId: $featureId) {
      _id
      desc
      index
      level
      name
      reference
      }
  }
`;

export const QUERY_LANGUAGE= gql`
  query getLanguage {
    languages {
      _id
      desc
      index
      name
      script
      type
      typical_speakers
    }
  }
`;

export const QUERY_ONE_LANGUAGE = gql`
  query getOneLanguage($languageId: ID!) {
    languages(languageId: $languageId) {
      _id
      desc
      index
      name
      script
      type
      typical_speakers
      }
  }
`;

export const QUERY_LEVEL= gql`
  query getLevel {
    level {
      _id
      ability_score_bonuses
      index
      level
      prof_bonus
    }
  }
`;

export const QUERY_ONE_LEVEL = gql`
  query getOneLevel($levelId: ID!) {
    level(levelId: $levelId) {
      _id
      ability_score_bonuses
      index
      level
      prof_bonus
      }
  }
`;

export const QUERY_MAGIC_ITEM= gql`
  query getMagicItem {
    magic_items {
      _id
      desc
      index
      name
    }
  }
`;

export const QUERY_ONE_MAGIC_ITEM = gql`
  query getOneMagicItem($magicItemId: ID!) {
    magic_items(magicItemId: $magicItemId) {
      _id
      desc
      index
      name
      }
  }
`;

export const QUERY_MAGIC_SCHOOL= gql`
  query getMagicSchool {
    magic_school {
      _id
      desc
      index
      name
    }
  }
`;

export const QUERY_ONE_MAGIC_SCHOOL = gql`
  query getOneMagicSchool($magicSchoolId: ID!) {
    magic_school(magicSchoolId: $magicSchoolId) {
      _id
      desc
      index
      name
      }
  }
`;

export const QUERY_PROFICIENCY= gql`
  query getProficiency {
    proficiency {
      _id
      index
      name
      type
    }
  }
`;

export const QUERY_ONE_PROFICIENCY = gql`
  query getOneProficiency($proficiencyId: ID!) {
    proficiency(proficiencyId: $proficiencyId) {
      _id
      index
      name
      type
      }
  }
`;

export const QUERY_RACE= gql`
  query getRace {
    races {
      _id
      age
      alignment
      index
      language_desc
      name
      size
      size_description
      speed
    }
  }
`;

export const QUERY_ONE_RACE = gql`
  query getOneRace($raceId: ID!) {
    races(raceId: $raceId) {
      _id
      age
      alignment
      index
      language_desc
      name
      size
      size_description
      speed
      }
  }
`;

export const QUERY_RULE= gql`
  query getRule {
    rules {
      _id
      desc
      index
      name
    }
  }
`;

export const QUERY_ONE_RULE = gql`
  query getOneRule($ruleId: ID!) {
    rules(ruleId: $ruleId) {
      _id
      desc
      index
      name
      }
  }
`;

export const QUERY_RULE_SECTION= gql`
  query getRuleSection {
    rule_section {
      _id
      desc
      index
      name
    }
  }
`;

export const QUERY_ONE_RULE_SECTION = gql`
  query getOneRuleSection($ruleSectionId: ID!) {
    rule_section(ruleSectionId: $ruleSectionId) {
      _id
      desc
      index
      name
      }
  }
`;

export const QUERY_SKILL= gql`
  query getSkill {
    skills {
      _id
      desc
      index
      name
    }
  }
`;

export const QUERY_ONE_SKILL = gql`
  query getOneSkill($skillId: ID!) {
    skills(skillId: $skillId) {
      _id
      desc
      index
      name
      }
  }
`;

export const QUERY_SPELL= gql`
  query getSpell {
    spells {
      _id
      attack_type
      casting_time
      components
      concentration
      desc
      duration
      heal_at_slot_level
      higher_level
      index
      level
      material
      name
      range
      ritual
    }
  }
`;

export const QUERY_ONE_SPELL = gql`
  query getOneSpell($spellId: ID!) {
    spells(spellId: $spellId) {
      _id
      attack_type
      casting_time
      components
      concentration
      desc
      duration
      heal_at_slot_level
      higher_level
      index
      level
      material
      name
      range
      ritual
      }
  }
`;

export const QUERY_SUBCLASS= gql`
  query getSubclass {
    subclasses {
      _id
      desc
      index
      name
      subclass_flavor
      subclass_levels
    }
  }
`;

export const QUERY_ONE_SUBCLASS = gql`
  query getOneSubclass($subclassId: ID!) {
    subclasses(subclassId: $subclassId) {
      _id
      desc
      index
      name
      subclass_flavor
      subclass_levels
      }
  }
`;

export const QUERY_SUBRACE= gql`
  query getSubrace {
    subraces {
      _id
      desc
      index
      name
    }
  }
`;

export const QUERY_ONE_SUBRACE = gql`
  query getOneSubrace($subraceId: ID!) {
    subracees(subraceId: $subraceId) {
      _id
      desc
      index
      name
      }
  }
`;












// export const QUERY_THOUGHTS = gql`
//   query getThoughts {
//     thoughts {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//     }
//   }
// `;

// export const QUERY_SINGLE_THOUGHT = gql`
//   query getSingleThought($thoughtId: ID!) {
//     thought(thoughtId: $thoughtId) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       thoughts {
//         _id
//         thoughtText
//         thoughtAuthor
//         createdAt
//       }
//     }
//   }
// `;
