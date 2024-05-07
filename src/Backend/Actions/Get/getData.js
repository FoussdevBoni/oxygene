import { onValue, ref, get } from "firebase/database";
import { db } from "../../Data/config";

export const dataSize = (dataRef1) => {
  return new Promise((resolve, reject) => {
    onValue(dataRef1, (snapshot) => {
      if (snapshot) {
        const size = snapshot.size;
        resolve(size);
      } else {
        reject(new Error("Snapshot is empty"));
      }
    });
  });
};

