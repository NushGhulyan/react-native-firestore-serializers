import { FirebaseFirestoreTypes} from '@react-native-firebase/firestore'

declare function serializeDocumentSnapshot(
    documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot
): string;

declare function serializeQuerySnapshot(
    querySnapshot: FirebaseFirestoreTypes.QuerySnapshot
): string;

declare function deserializeDocumentSnapshot<T = FirebaseFirestoreTypes.DocumentData>(
    input: string,
    firestore: FirebaseFirestoreTypes.Module,
    geoPoint: typeof FirebaseFirestoreTypes.GeoPoint,
    timestamp: typeof FirebaseFirestoreTypes.Timestamp
): FirebaseFirestoreTypes.DocumentSnapshot<T>;

declare function deserializeDocumentSnapshotArray<T = FirebaseFirestoreTypes.DocumentData>(
    input: string,
    firestore: FirebaseFirestoreTypes.Module,
    geoPoint: typeof FirebaseFirestoreTypes.GeoPoint,
    timestamp: typeof FirebaseFirestoreTypes.Timestamp
): FirebaseFirestoreTypes.DocumentSnapshot<T>[];
