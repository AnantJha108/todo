import React from 'react'

const List = ({data}) => {
    return (
        <div className="list-group">
            {
                data.map((item, index) => (
                    <div key={index} className="list-group-item list-group-item-action d-flex justify-content-between" style={{ fontSize: "20px" }}>
                        <span>{item.name}</span>
                        <span className='float-end'><div className="bi bi-check"></div></span>
                    </div>
                ))
            }
        </div>
    )
}

export default List