import React from 'react'

const CreateTask = () => {
    return (
        <div className="mb-4 input-group">
            <input type="text" placeholder='Serach your task' className='form-control' />
            <button type='submit' className='btn btn-success'>Add</button>
        </div>
    )
}

export default CreateTask