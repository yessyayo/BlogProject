import { collection, addDoc } from "firebase/firestore";
import db from './fireStoreData';


// Add a new document with a generated id.
export const addDocument = async (input_author, input_description, input_title, input_img) => {
    const newItem = await addDoc(collection(db, "Blog_DB"), {
        author: input_author,
        description: input_description,
        title: input_title,
        img: input_img,
      }
    );
//   console.log("Document written with ID: ", newItem.id);
return newItem.id;
      
}
