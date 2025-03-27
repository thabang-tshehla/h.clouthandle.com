'use client'
import { LabelOption } from "./AddLabel"

const LabelSelection = ({ options, setLabel }: { options: LabelOption[], setLabel: (label: LabelOption | null) => void } ) => {


    const handleSelect = (option: LabelOption) => {

        setLabel(option)
        
    }

    return (
        <div className="shadow my-1 p-2">
            {options.map(option => (
                <div
                    onClick={() => handleSelect(option)}
                    className='cursor-pointer' key={option.id}>
                    {option.name}
                </div>
            ))}
        </div>
    )
}

export default LabelSelection;