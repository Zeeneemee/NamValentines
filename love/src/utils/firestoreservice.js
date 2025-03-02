import { db } from "./firebase-config";
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore";

const COLLECTION_NAME = "birthdayExperiences";

// **Get all experiences from Firestore (sorted by latest first)**
export const getExperiences = async () => {
  const q = query(collection(db, COLLECTION_NAME), orderBy("date", "desc")); // Sort by latest
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// **Save all three experiences in one document**
export const saveExperiencesBatch = async (experiences) => {
  await addDoc(collection(db, COLLECTION_NAME), {
    ...experiences,
    date: serverTimestamp() // Store timestamp
  });
};

// **Clear all experiences from Firestore**
export const clearExperiences = async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  
  const deletePromises = querySnapshot.docs.map(experience =>
    deleteDoc(doc(db, COLLECTION_NAME, experience.id))
  );

  await Promise.all(deletePromises); // Ensure all deletes complete before finishing
};
