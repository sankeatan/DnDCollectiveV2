import { gql } from '@apollo/client';

export const QUERY_ABILITY_SCORE = gql`
  query getAbilityScore {
    ability_score {
      _id
      desc
      full_name
      index
      name
      skills
      url
    }
  }
`;

export const QUERY_ONE_ABILITY_SCORE = gql`
  query getOneAbilityScore($abilityScoreId: ID!) {
    ability_score(abilityScoreId: $abilityScoreId) {
      _id
      desc
      full_name
      index
      name
      skills
      url
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
