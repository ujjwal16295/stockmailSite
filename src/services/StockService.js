import { db } from "./FirebaseConfig";
import { collection, doc  ,setDoc,getDoc} from "firebase/firestore";

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




}

export default new StockService()