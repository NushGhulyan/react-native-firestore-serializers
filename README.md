# React Native firestore-serializers
[![Coverage Status](https://coveralls.io/repos/github/palkerecsenyi/firestore-serializers/badge.svg?branch=master)](https://coveralls.io/github/palkerecsenyi/firestore-serializers?branch=master)
![Unit tests](https://github.com/palkerecsenyi/firestore-serializers/workflows/Unit%20tests/badge.svg)

An automatic JavaScript serialization/deserialization system for React Native Firestore

## Features
- Simple to use – just pass a string to deserialize, or a DocumentSnapshot to serialize

- Also supports QuerySnapshot serialization and deserialization

- Can serialize/deserialize cyclical Firestore structured (i.e. DocumentReference) automatically

- Deep serialization/deserialization, including array members

- Comes with full TypeScript type definitions

- Tested with high code coverage

## Why?
Firestore provides offline support, but it's fairly primitive: if your device doesn't have an internet connection, it uses the cached data, but otherwise it uses live data. So when you're on a slow connection, it often takes ages to query data.

A fix for this is to manually store Firestore data in your own caching system (e.g. React Native's AsyncStorage). However, this often presents challenges because Firestore documents can contain non-serializable values.

This library does the heavy lifting for you, by converting special Firestore types (e.g. GeoPoint or DocumentReference) in your documents to serializable values, and vice-versa.

## Installation
```
yarn add react-native-firestore-serializers
```
or
```
npm install react-native-firestore-serializers
```

## Usage
```typescript

import firestore from "@react-native-firebase/firestore";
import {
  serializeDocumentSnapshot,
  serializeQuerySnapshot,
  deserializeDocumentSnapshot,
  deserializeDocumentSnapshotArray,
} from "react-native-firestore-serializers";

const doc = await firestore()
    .collection('my-collection')
    .doc('abc')
    .get();

const collection = await firestore()
    .collection('my-collection')
    .get();

// stringify document (returns string)
const serializedDoc = serializeDocumentSnapshot(doc);
 
// stringify query snapshot (returns string)
const serializedCollection = serializeQuerySnapshot(collection);

/*
returns DocumentSnapshot-like object
This matches the actual DocumentSnapshot class in behavior and properties,
but is NOT an instance of the DocumentSnapshot class.
*/
deserializeDocumentSnapshot(serializedDoc);

/*
returns an array of DocumentSnapshot-like objects, like the ones above.
Does NOT return a QuerySnapshot.
Think of it as returning the contents of the 'docs' property of a QuerySnapshot
*/
deserializeDocumentSnapshotArray(serializedCollection);
```

## License
Licensed under the MIT license. Copyright Pal Kerecsenyi.
