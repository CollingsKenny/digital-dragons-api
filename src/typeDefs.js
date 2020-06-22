import { gql } from 'apollo-server';

// Schema
// Defines the shape of queries executed by a client
export const typeDefs = gql`
  type Query {
    user(id: ID!): User
    characters: [Character]
    features: [Feature]
  }
  type Mutation {
    createUser(name: String): User
    createCharacter(userId: ID!, name: String): Character
    createFeature(
      name: String!
      description: String
      parentFeatureId: ID
    ): Feature
  }
  enum Stat {
    STR
    DEX
    CON
  }
  type Trait {
    amount: Int!
    stat: Stat!
    parent: Feature!
  }

  type User {
    id: ID!
    name: String!
    characters: [Character]
  }
  type Character {
    id: ID!
    name: String!
    userId: String!
    user: User
    traits: [Trait]
    str: [Trait]
    dex: [Trait]
    con: [Trait]
    race: Feature
    class: Feature
  }
  type Feature {
    id: ID!
    name: String!
    description: String
    traits: [Trait]
    parent: Feature
  }
`;
