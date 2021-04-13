/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo3 = /* GraphQL */ `
  query GetTodo3($id: ID!) {
    getTodo3(id: $id) {
      id
      description
      todo2s {
        items {
          id
          todo2ID
          todo3ID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTodo3s = /* GraphQL */ `
  query ListTodo3s(
    $filter: ModelTodo3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        todo2s {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo2 = /* GraphQL */ `
  query GetTodo2($id: ID!) {
    getTodo2(id: $id) {
      id
      description
      todo1ID
      Todo2Todo3s {
        items {
          id
          todo2ID
          todo3ID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodo2s = /* GraphQL */ `
  query ListTodo2s(
    $filter: ModelTodo2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        todo1ID
        Todo2Todo3s {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTodo1 = /* GraphQL */ `
  query GetTodo1($id: ID!) {
    getTodo1(id: $id) {
      id
      description
      Todo2s {
        items {
          id
          description
          todo1ID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTodo1s = /* GraphQL */ `
  query ListTodo1s(
    $filter: ModelTodo1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        Todo2s {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
