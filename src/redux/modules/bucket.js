import { db } from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";
const LOADING = "bucket/LOADING";

const initState = {
  loading: true,
  list: [],
};

// Action Creators
export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list };
}

export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function updateBucket(index) {
  return { type: UPDATE, index };
}

export function deleteBucket(index) {
  return { type: DELETE, index };
}

export function loadingBucket(loading) {
  return { type: LOADING, loading };
}

// Firebase middlewares
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, "bucket"));

    let bucket_list = [];
    bucket_data.forEach((bucket) => {
      bucket_list.push({ id: bucket.id, ...bucket.data() });
    });

    dispatch(loadBucket(bucket_list));
  };
};

export const addBucketFB = (bucket) => {
  return async function (dispatch) {
    // dispatch(loadingBucket(true));
    const docRef = await addDoc(collection(db, "bucket"), bucket);
    dispatch(createBucket({ id: docRef.id, ...bucket }));
  };
};

export const updateBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    if (!bucket_id) {
      alert("bucket_id not found");
      return;
    }
    const docRef = doc(db, "bucket", bucket_id);
    await updateDoc(docRef, { completed: true });

    const get_list = getState().bucket.list;
    const bucket_index = get_list.findIndex((v) => v.id === bucket_id);
    dispatch(updateBucket(bucket_index));
  };
};

export const deleteBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    if (!bucket_id) {
      alert("bucket_id not found");
      return;
    }
    const docRef = doc(db, "bucket", bucket_id);
    await deleteDoc(docRef);

    const get_list = getState().bucket.list;
    const bucket_index = get_list.findIndex((v) => v.id === bucket_id);
    dispatch(deleteBucket(bucket_index));
  };
};

// Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
      return { loading: false, list: action.bucket_list };
    }

    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { ...state, list: new_bucket_list };
    }

    case "bucket/UPDATE": {
      const new_bucket_list = state.list.map((v, i) => {
        if (i === Number(action.index)) {
          return { ...v, completed: true };
        } else {
          return v;
        }
      });
      return { ...state, list: new_bucket_list };
    }

    case "bucket/DELETE": {
      const new_bucket_list = state.list.reduce((acc, cur, idx) => {
        if (idx !== Number(action.index)) acc.push(cur);
        return acc;
      }, []);
      return { ...state, list: new_bucket_list };
    }

    case "bucket/LOADING": {
      return { ...state, loading: action.loading };
    }

    default:
      return state;
  }
}
