import React from 'react'


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}


const TableBody = props => {
    const {charactersData, removeCharacter} = props
    const rows = charactersData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


class Table4 extends React.Component{
    render(){
        const {charactersData, removeCharacter} = this.props
        return(
            <table>
                <TableHeader></TableHeader>
                <TableBody charactersData={charactersData} removeCharacter={removeCharacter}></TableBody>
            </table>
        )
    }
}

export default Table4