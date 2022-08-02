import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, get, remove } from "firebase/database";
import moment from "moment";

import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const returnSuccessfully = (data) => {
  return {
    status: true,
    data: data
  }
}

const returnError = (error) => {
  return {
    status: false,
    errorCode: error.code,
    errorMessage: error.message
  }
}

const currentTimestamp = () => moment().valueOf();

const Firebase = {
  utils: {
    currentTimestamp
  },
  database: {
    post: async (data, path) => {
      return new Promise((resolve, reject) => {
        push(ref(db, path), data).then(() => {
          resolve(data);
        })
          .catch((error) => {
            reject(error)
          });
      }).then((data) => {
        return returnSuccessfully(data);
      }).catch((error) => {
        return returnError(error);
      });
    },
    update: async (data, path) => {
      return new Promise((resolve, reject) => {
        set(ref(db, path), data).then(() => {
          resolve(data);
        })
          .catch((error) => {
            reject(error)
          });
      }).then((data) => {
        return returnSuccessfully(data);
      }).catch((error) => {
        return returnError(error);
      });
    },
    get: async (path) => {
      return new Promise((resolve, reject) => {

        get(ref(db, path)).then((snapshot) => {
          resolve(snapshot.val());
        })
          .catch((error) => {
            reject(error)
          });
      }).then((data) => {
        return returnSuccessfully(data);
      }).catch((error) => {
        return returnError(error);
      });
    },
    remove: async (path) => {
      return new Promise((resolve, reject) => {
        remove(ref(db, path)).then(() => {
          resolve(path);
        })
          .catch((error) => {
            reject(error)
          });
      }).then((data) => {
        return returnSuccessfully(data);
      }).catch((error) => {
        return returnError(error);
      });
    }
  },
};

export default Firebase;
