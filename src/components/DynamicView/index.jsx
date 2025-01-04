import {useState} from 'react'
import styles from "./index.module.css"

function DynimicInput() {
    const [fields, setFields] = useState([]);

    function handleAddInput() {
        let input = {
            id: Date.now(),
            value: ""
        }

        let copied = [...fields];
        copied.push(input)
        setFields(copied);
    }

    function handleSave(e) {
        e.preventDefault();
        console.log(fields);
    }

    function handleOnDelete(e, field) {
        e.preventDefault();
        
        let copied = [...fields]
        let newArray = copied.filter((oldField) => {
            return oldField !== field
        })

        setFields(newArray);
    }

    return (
        <>
            <button className={styles.justBtn} onClick={handleAddInput}>Add</button>
            
            <form className={styles.form}>
                {
                    fields.length > 0 && fields.map((field, index) => {
                        return (
                            <div className={styles.newBox} key={index}>
                                <input className={styles.newInput} type="text" value={field.value} onChange={(e) => {handleChangeInput(e, field)}}/>
                                <button className={styles.btnDelete} onClick={(e) => {handleOnDelete(e, field)}}>Delete</button>
                            </div>
                        );
                    })
                }

                <button className={styles.saveBtn} onClick={(e) => {handleSave(e)}}>Save</button>
            </form>
        </>
    )
}

export default DynimicInput