import clouthandleAPI from "@/lib/clouthandleAPI";
import { useEffect, useState, useRef } from "react"
import LabelSelection from "./LabelSelection";




export interface LabelOption {
    name: string; id: string
}
const AddLabel = () => {

    const [results, setResults] = useState<LabelOption[] | null>(null)
    const [value, setValue] = useState<string>('')
    const [debouncedQuery, setDebouncedQuery] = useState("");
    
    const [label, setLabel ] = useState<LabelOption | null>(null)

    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setValue(event.target.value)
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(value);
        }, 300); // Adjust delay as needed

        return () => clearTimeout(handler);
    }, [value]);

    // Effect to fetch results when debouncedQuery changes
    useEffect(() => {
        if (!debouncedQuery) {
            setResults([]);
            return;
        }

        const fetchResults = async () => {

            try {

                const response = await clouthandleAPI.post('/labels/search', {
                    searchInput: debouncedQuery
                })

                const data = response.data;

                // a list of options as suggestion, TODO: prevent user from assigning same label, e.g content creator more than once
                setResults(data);



            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        fetchResults();
    }, [debouncedQuery]);

    const handleSave =  () => {
        
        if(label){ // A suggested option was selected
            console.log(label);
        }

    }


    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-30">
            <div className="relative w-full h-full">
                <div className="w-full h-full bg-black opacity-75"></div>
                <div className="absolute top-0 w-full h-full  flex items-center justify-center">
                    <div className="h-80 w-80 bg-white p-3">
                        <input
                            ref={inputRef}
                            onChange={(e) => handleChange(e)}
                            value={value}
                            className="p-2 bg-gray-100 w-full" type="text" placeholder="" />

                        {(results && results.length > 0) && <LabelSelection options={results} setLabel={setLabel}/>}
                        <button
                            onClick = {() => handleSave()}
                            className="bg-black text-white w-full">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddLabel