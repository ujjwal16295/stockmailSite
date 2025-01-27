import { db } from "./FirebaseConfig";
import { collection, doc  ,setDoc,getDoc, deleteDoc, updateDoc} from "firebase/firestore";

const ref= collection(db,"stocks")

class StockService{

   addStockToDatabase = async (docName, data) => {
    try {
      const docRef = doc(db, "Email", docName);
      const docSnapshot = await getDoc(docRef);
  
      if (docSnapshot.exists()) {
        console.log("Document already exists!");
        return { error: true, message: "Document already exists" };
      }
  
      await setDoc(docRef, data);
      console.log("Document successfully written!");
      return { error: false, message: "No error" };
    } catch (error) {
      console.error("Error writing document: ", error);
      return { error: true, message: "error occurred"};
    }
  };

  updateStockInDatabase = async (docName, data) => {
    try {
      const docRef = doc(db, "Email", docName);
  
      // Update the existing document with the provided fields
      await updateDoc(docRef, {data}); // This will only update the fields specified in 'data'
      console.log("Document successfully updated!");
      return { error: false, message: "Document updated successfully" };
    } catch (error) {
      console.error("Error in updating the document: ", error);
      return { error: true, message: "Error occurred while updating the document" };
    }
  };


}

export default new StockService()