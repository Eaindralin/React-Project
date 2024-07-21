import {useSessionStorage,useLocalStorage} from "./useStorage";
export default function StorageComponent(){
    const [name,setName,removeName] = useSessionStorage("name","Kyle");
    const [age,setAge,removeAge] = useLocalStorage("age",26)
    return (
      <div>
        <div>
          {name} - {age}
        </div>
        <button
          onClick={() => setName("John")}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Set Name
        </button>
        <button
          onClick={() => setAge("40")}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Set Age
        </button>
        <button
          onClick={removeName}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Remove Name
        </button>
        <button
          onClick={removeAge}
          style={{ width: "100pt", height: "20pt", margin: "1rem" }}
        >
          Remove Age
        </button>
      </div>
    );
}