import React from 'react'

export interface BioSectionPropType {

    isDraggable: boolean

}

function BioSection({isDraggable}: BioSectionPropType) {


    return (
        <div>
            This is a bio section
        </div>
    )
}

export default BioSection