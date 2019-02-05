/**
 * @flow
 * @relayHash e3c6655d13ccfa7b7510819925ded9fb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateItemInput = {|
  id: string,
  name?: ?string,
  quantity?: ?number,
|};
export type UpdateItemMutationVariables = {|
  input: UpdateItemInput
|};
export type UpdateItemMutationResponse = {|
  +updateItem: {|
    +item: ?{|
      +id: string,
      +quantity: number,
    |}
  |}
|};
export type UpdateItemMutation = {|
  variables: UpdateItemMutationVariables,
  response: UpdateItemMutationResponse,
|};
*/

/*
mutation UpdateItemMutation(
  $input: UpdateItemInput!
) {
  updateItem(input: $input) {
    item {
      id
      quantity
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'input',
        type: 'UpdateItemInput!',
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'updateItem',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input',
            type: 'UpdateItemInput!'
          }
        ],
        concreteType: 'ItemPayload',
        plural: false,
        selections: [
          {
            kind: 'LinkedField',
            alias: null,
            name: 'item',
            storageKey: null,
            args: null,
            concreteType: 'Item',
            plural: false,
            selections: [
              {
                kind: 'ScalarField',
                alias: null,
                name: 'id',
                args: null,
                storageKey: null
              },
              {
                kind: 'ScalarField',
                alias: null,
                name: 'quantity',
                args: null,
                storageKey: null
              }
            ]
          }
        ]
      }
    ];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'UpdateItemMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    operation: {
      kind: 'Operation',
      name: 'UpdateItemMutation',
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    params: {
      operationKind: 'mutation',
      name: 'UpdateItemMutation',
      id: null,
      text:
        'mutation UpdateItemMutation(\n  $input: UpdateItemInput!\n) {\n  updateItem(input: $input) {\n    item {\n      id\n      quantity\n    }\n  }\n}\n',
      metadata: {}
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = '0a2afa6f258b9510c3feaf0c1e1e0f13';
module.exports = node;