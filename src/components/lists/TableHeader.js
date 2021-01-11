import React from 'react'

function TableHeader({headers}) {
    return (
        <thead>
            <tr>
                {headers.map(({name}) => (
                    <th
                        key={name}
                        
                    >
                        {name}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader;
