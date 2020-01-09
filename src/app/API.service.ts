/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDeckInput = {
  id?: string | null;
  name: string;
};

export type ModelDeckConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelDeckConditionInput | null> | null;
  or?: Array<ModelDeckConditionInput | null> | null;
  not?: ModelDeckConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateDeckInput = {
  id: string;
  name?: string | null;
};

export type DeleteDeckInput = {
  id?: string | null;
};

export type CreateCardInput = {
  id?: string | null;
  question: string;
  answer?: string | null;
  cardDeckId: string;
};

export type ModelCardConditionInput = {
  question?: ModelStringInput | null;
  answer?: ModelStringInput | null;
  and?: Array<ModelCardConditionInput | null> | null;
  or?: Array<ModelCardConditionInput | null> | null;
  not?: ModelCardConditionInput | null;
};

export type UpdateCardInput = {
  id: string;
  question?: string | null;
  answer?: string | null;
  cardDeckId?: string | null;
};

export type DeleteCardInput = {
  id?: string | null;
};

export type ModelDeckFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDeckFilterInput | null> | null;
  or?: Array<ModelDeckFilterInput | null> | null;
  not?: ModelDeckFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null;
  question?: ModelStringInput | null;
  answer?: ModelStringInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
};

export type SearchableCardFilterInput = {
  id?: SearchableIDFilterInput | null;
  question?: SearchableStringFilterInput | null;
  answer?: SearchableStringFilterInput | null;
  and?: Array<SearchableCardFilterInput | null> | null;
  or?: Array<SearchableCardFilterInput | null> | null;
  not?: SearchableCardFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableCardSortInput = {
  field?: SearchableCardSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCardSortableFields {
  id = "id",
  question = "question",
  answer = "answer"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type CreateDeckMutation = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      question: string;
      answer: string | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type UpdateDeckMutation = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      question: string;
      answer: string | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type DeleteDeckMutation = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      question: string;
      answer: string | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type CreateCardMutation = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
  owner: string | null;
};

export type UpdateCardMutation = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
  owner: string | null;
};

export type DeleteCardMutation = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
  owner: string | null;
};

export type GetDeckQuery = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      question: string;
      answer: string | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type ListDecksQuery = {
  __typename: "ModelDeckConnection";
  items: Array<{
    __typename: "Deck";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardQuery = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
  owner: string | null;
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    question: string;
    answer: string | null;
    deck: {
      __typename: "Deck";
      id: string;
      name: string;
      owner: string | null;
    };
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type SearchCardsQuery = {
  __typename: "SearchableCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    question: string;
    answer: string | null;
    deck: {
      __typename: "Deck";
      id: string;
      name: string;
      owner: string | null;
    };
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  total: number | null;
};

export type OnCreateDeckSubscription = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      question: string;
      answer: string | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type OnUpdateDeckSubscription = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      question: string;
      answer: string | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type OnDeleteDeckSubscription = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      question: string;
      answer: string | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
  owner: string | null;
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
  owner: string | null;
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDeck(
    input: CreateDeckInput,
    condition?: ModelDeckConditionInput
  ): Promise<CreateDeckMutation> {
    const statement = `mutation CreateDeck($input: CreateDeckInput!, $condition: ModelDeckConditionInput) {
        createDeck(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              question
              answer
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDeckMutation>response.data.createDeck;
  }
  async UpdateDeck(
    input: UpdateDeckInput,
    condition?: ModelDeckConditionInput
  ): Promise<UpdateDeckMutation> {
    const statement = `mutation UpdateDeck($input: UpdateDeckInput!, $condition: ModelDeckConditionInput) {
        updateDeck(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              question
              answer
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDeckMutation>response.data.updateDeck;
  }
  async DeleteDeck(
    input: DeleteDeckInput,
    condition?: ModelDeckConditionInput
  ): Promise<DeleteDeckMutation> {
    const statement = `mutation DeleteDeck($input: DeleteDeckInput!, $condition: ModelDeckConditionInput) {
        deleteDeck(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              question
              answer
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDeckMutation>response.data.deleteDeck;
  }
  async CreateCard(
    input: CreateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<CreateCardMutation> {
    const statement = `mutation CreateCard($input: CreateCardInput!, $condition: ModelCardConditionInput) {
        createCard(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
          deck {
            __typename
            id
            name
            cards {
              __typename
              nextToken
            }
            owner
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardMutation>response.data.createCard;
  }
  async UpdateCard(
    input: UpdateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<UpdateCardMutation> {
    const statement = `mutation UpdateCard($input: UpdateCardInput!, $condition: ModelCardConditionInput) {
        updateCard(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
          deck {
            __typename
            id
            name
            cards {
              __typename
              nextToken
            }
            owner
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardMutation>response.data.updateCard;
  }
  async DeleteCard(
    input: DeleteCardInput,
    condition?: ModelCardConditionInput
  ): Promise<DeleteCardMutation> {
    const statement = `mutation DeleteCard($input: DeleteCardInput!, $condition: ModelCardConditionInput) {
        deleteCard(input: $input, condition: $condition) {
          __typename
          id
          question
          answer
          deck {
            __typename
            id
            name
            cards {
              __typename
              nextToken
            }
            owner
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardMutation>response.data.deleteCard;
  }
  async GetDeck(id: string): Promise<GetDeckQuery> {
    const statement = `query GetDeck($id: ID!) {
        getDeck(id: $id) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              question
              answer
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDeckQuery>response.data.getDeck;
  }
  async ListDecks(
    filter?: ModelDeckFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDecksQuery> {
    const statement = `query ListDecks($filter: ModelDeckFilterInput, $limit: Int, $nextToken: String) {
        listDecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            cards {
              __typename
              nextToken
            }
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDecksQuery>response.data.listDecks;
  }
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          __typename
          id
          question
          answer
          deck {
            __typename
            id
            name
            cards {
              __typename
              nextToken
            }
            owner
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardQuery>response.data.getCard;
  }
  async ListCards(
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            question
            answer
            deck {
              __typename
              id
              name
              owner
            }
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardsQuery>response.data.listCards;
  }
  async SearchCards(
    filter?: SearchableCardFilterInput,
    sort?: SearchableCardSortInput,
    limit?: number,
    nextToken?: string
  ): Promise<SearchCardsQuery> {
    const statement = `query SearchCards($filter: SearchableCardFilterInput, $sort: SearchableCardSortInput, $limit: Int, $nextToken: String) {
        searchCards(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            question
            answer
            deck {
              __typename
              id
              name
              owner
            }
            owner
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchCardsQuery>response.data.searchCards;
  }
  OnCreateDeckListener: Observable<OnCreateDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDeck($owner: String!) {
        onCreateDeck(owner: $owner) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              question
              answer
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<OnCreateDeckSubscription>;

  OnUpdateDeckListener: Observable<OnUpdateDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDeck($owner: String!) {
        onUpdateDeck(owner: $owner) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              question
              answer
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<OnUpdateDeckSubscription>;

  OnDeleteDeckListener: Observable<OnDeleteDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDeck($owner: String!) {
        onDeleteDeck(owner: $owner) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              question
              answer
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<OnDeleteDeckSubscription>;

  OnCreateCardListener: Observable<OnCreateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard($owner: String!) {
        onCreateCard(owner: $owner) {
          __typename
          id
          question
          answer
          deck {
            __typename
            id
            name
            cards {
              __typename
              nextToken
            }
            owner
          }
          owner
        }
      }`
    )
  ) as Observable<OnCreateCardSubscription>;

  OnUpdateCardListener: Observable<OnUpdateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCard($owner: String!) {
        onUpdateCard(owner: $owner) {
          __typename
          id
          question
          answer
          deck {
            __typename
            id
            name
            cards {
              __typename
              nextToken
            }
            owner
          }
          owner
        }
      }`
    )
  ) as Observable<OnUpdateCardSubscription>;

  OnDeleteCardListener: Observable<OnDeleteCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCard($owner: String!) {
        onDeleteCard(owner: $owner) {
          __typename
          id
          question
          answer
          deck {
            __typename
            id
            name
            cards {
              __typename
              nextToken
            }
            owner
          }
          owner
        }
      }`
    )
  ) as Observable<OnDeleteCardSubscription>;
}
