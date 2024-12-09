"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react'


const TicketForm = () => {
  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not-started',
    category: 'Hardware Problem',
  }

  const { formData, setFormData } = useState(startingTicketData);

  const handleChange = () => { 
    
  }


  return (
    <div className='flex justify-center'>
      <form>
        <h3>Create Your Ticket</h3>
          <label>Title</label>
          <input
            id='title'
            name='title'
            type='text'
            onChange={handleChange}
            required={true}
            value={formData.title}
          />
          <label>Description</label>
          <textarea
            id='description'
            name='description'
            onChange={handleChange}
            required={true}
            value={formData.description}
            rows='5'
          />
          <label>Category</label>
          <select
            name='category'
            value={formData.category}
            onChange={handleChange}
          >
            {categories?.map((category, _index) => (
              <option key={_index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label>Priority</label>
          <div>
            <input
              id='priority-1'
              name='priority'
              type='radio'
              onChange={handleChange}
              value={1}
              checked={formData.priority == 1}
            />
            <label>1</label>
            <input
              id='priority-2'
              name='priority'
              type='radio'
              onChange={handleChange}
              value={2}
              checked={formData.priority == 2}
            />
            <label>2</label>
            <input
              id='priority-3'
              name='priority'
              type='radio'
              onChange={handleChange}
              value={3}
              checked={formData.priority == 3}
            />
            <label>3</label>
            <input
              id='priority-4'
              name='priority'
              type='radio'
              onChange={handleChange}
              value={4}
              checked={formData.priority == 4}
            />
            <label>4</label>
            <input
              id='priority-5'
              name='priority'
              type='radio'
              onChange={handleChange}
              value={5}
              checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
          <label>Progress</label>
          <input
            type='range'
            id='progress'
            name='progress'
            value={formData.progress}
            min='0'
            max='100'
            onChange={handleChange}
          />
          <label>Status</label>
          <select name='status' value={formData.status} onChange={handleChange}>
            <option value='not started'>Not Started</option>
            <option value='started'>Started</option>
            <option value='done'>Done</option>
          </select>
          <input
            type='submit'
            className='btn max-w-xs'
            value={EDITMODE ? 'Update Ticket' : 'Create Ticket'}
          />
     
      </form>
    </div>
  );
}
export default TicketForm