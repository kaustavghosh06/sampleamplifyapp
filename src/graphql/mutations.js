/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo3 = /* GraphQL */ `
  mutation CreateTodo3(
    $input: CreateTodo3Input!
    $condition: ModelTodo3ConditionInput
  ) {
    createTodo3(input: $input, condition: $condition) {
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
export const updateTodo3 = /* GraphQL */ `
  mutation UpdateTodo3(
    $input: UpdateTodo3Input!
    $condition: ModelTodo3ConditionInput
  ) {
    updateTodo3(input: $input, condition: $condition) {
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
export const deleteTodo3 = /* GraphQL */ `
  mutation DeleteTodo3(
    $input: DeleteTodo3Input!
    $condition: ModelTodo3ConditionInput
  ) {
    deleteTodo3(input: $input, condition: $condition) {
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
export const createTodo2 = /* GraphQL */ `
  mutation CreateTodo2(
    $input: CreateTodo2Input!
    $condition: ModelTodo2ConditionInput
  ) {
    createTodo2(input: $input, condition: $condition) {
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
export const updateTodo2 = /* GraphQL */ `
  mutation UpdateTodo2(
    $input: UpdateTodo2Input!
    $condition: ModelTodo2ConditionInput
  ) {
    updateTodo2(input: $input, condition: $condition) {
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
export const deleteTodo2 = /* GraphQL */ `
  mutation DeleteTodo2(
    $input: DeleteTodo2Input!
    $condition: ModelTodo2ConditionInput
  ) {
    deleteTodo2(input: $input, condition: $condition) {
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
export const createTodo1 = /* GraphQL */ `
  mutation CreateTodo1(
    $input: CreateTodo1Input!
    $condition: ModelTodo1ConditionInput
  ) {
    createTodo1(input: $input, condition: $condition) {
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
export const updateTodo1 = /* GraphQL */ `
  mutation UpdateTodo1(
    $input: UpdateTodo1Input!
    $condition: ModelTodo1ConditionInput
  ) {
    updateTodo1(input: $input, condition: $condition) {
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
export const deleteTodo1 = /* GraphQL */ `
  mutation DeleteTodo1(
    $input: DeleteTodo1Input!
    $condition: ModelTodo1ConditionInput
  ) {
    deleteTodo1(input: $input, condition: $condition) {
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
export const createTodo2Todo3 = /* GraphQL */ `
  mutation CreateTodo2Todo3(
    $input: CreateTodo2Todo3Input!
    $condition: ModelTodo2Todo3ConditionInput
  ) {
    createTodo2Todo3(input: $input, condition: $condition) {
      id
      todo2ID
      todo3ID
      todo2 {
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
      todo3 {
        id
        description
        todo2s {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo2Todo3 = /* GraphQL */ `
  mutation UpdateTodo2Todo3(
    $input: UpdateTodo2Todo3Input!
    $condition: ModelTodo2Todo3ConditionInput
  ) {
    updateTodo2Todo3(input: $input, condition: $condition) {
      id
      todo2ID
      todo3ID
      todo2 {
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
      todo3 {
        id
        description
        todo2s {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo2Todo3 = /* GraphQL */ `
  mutation DeleteTodo2Todo3(
    $input: DeleteTodo2Todo3Input!
    $condition: ModelTodo2Todo3ConditionInput
  ) {
    deleteTodo2Todo3(input: $input, condition: $condition) {
      id
      todo2ID
      todo3ID
      todo2 {
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
      todo3 {
        id
        description
        todo2s {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
