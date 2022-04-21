import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import {hasIn} from "lodash";

export function itemIsDocumentReference(item: any): item is FirebaseFirestoreTypes.DocumentReference {
    return [
        hasIn(item, 'id'),
        hasIn(item, 'parent'),
        hasIn(item, 'path'),
        hasIn(item, 'get'),
    ].every(e => e === true);
}

export function itemIsGeoPoint(item: any): item is FirebaseFirestoreTypes.GeoPoint {
    return [
        hasIn(item, 'latitude'),
        hasIn(item, 'longitude')
    ].every(e => e === true);
}

export function itemIsTimestamp(item: any): item is FirebaseFirestoreTypes.Timestamp {
    return [
        hasIn(item, 'seconds'),
        hasIn(item, 'nanoseconds'),
        hasIn(item, 'toDate')
    ].every(e => e === true)
}