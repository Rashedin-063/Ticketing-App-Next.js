"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react'


const TicketForm = () => {
  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'Hardware Problem',
  };

  const [formData, setFormData] = useState(startingTicketData);
  
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
   
    
    e.preventDefault();
    const res = await fetch('/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({formData}),
    });

    if (!res.ok) {
      throw new Error('Failed to create ticket');
    }
    router.refresh();
    router.push('/');
  }

   const categories = [
     'Hardware Problem',
     'Software Problem',
     'Application Deveopment',
     'Project',
   ];

  return (
    <div className='flex justify-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-1 w-3/4 lg:w-1/2 border p-4'
      >
        <h3 className='text-center'>Create Your Ticket</h3>
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
        <div >
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
          className='btn w-full mt-4'
          value={'Create Ticket'}
        />
      </form>
    </div>
  );
}
export default TicketForm