/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo3 = /* GraphQL */ `
  subscription OnCreateTodo3 {
    onCreateTodo3 {
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
export const onUpdateTodo3 = /* GraphQL */ `
  subscription OnUpdateTodo3 {
    onUpdateTodo3 {
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
export const onDeleteTodo3 = /* GraphQL */ `
  subscription OnDeleteTodo3 {
    onDeleteTodo3 {
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
export const onCreateTodo2 = /* GraphQL */ `
  subscription OnCreateTodo2($owner: String!) {
    onCreateTodo2(owner: $owner) {
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
export const onUpdateTodo2 = /* GraphQL */ `
  subscription OnUpdateTodo2($owner: String!) {
    onUpdateTodo2(owner: $owner) {
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
export const onDeleteTodo2 = /* GraphQL */ `
  subscription OnDeleteTodo2($owner: String!) {
    onDeleteTodo2(owner: $owner) {
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
export const onCreateTodo1 = /* GraphQL */ `
  subscription OnCreateTodo1 {
    onCreateTodo1 {
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
export const onUpdateTodo1 = /* GraphQL */ `
  subscription OnUpdateTodo1 {
    onUpdateTodo1 {
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
export const onDeleteTodo1 = /* GraphQL */ `
  subscription OnDeleteTodo1 {
    onDeleteTodo1 {
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
export const onCreateTodo2Todo3 = /* GraphQL */ `
  subscription OnCreateTodo2Todo3 {
    onCreateTodo2Todo3 {
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
export const onUpdateTodo2Todo3 = /* GraphQL */ `
  subscription OnUpdateTodo2Todo3 {
    onUpdateTodo2Todo3 {
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
export const onDeleteTodo2Todo3 = /* GraphQL */ `
  subscription OnDeleteTodo2Todo3 {
    onDeleteTodo2Todo3 {
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
