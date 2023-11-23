import React from 'react'
import BackBar from '../Navbars/BackBar'
import Container from '../Containers/Container'

const CompleteArticle = () => {
  return (
    <React.Fragment>
    <BackBar pageLabel={"Article Details"}/>
    <Container className="lg:max-w-[65%] p-3">
        <h2  className='text-2xl font-bold'>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis sunt maiores ab deleniti iusto possimus vitae fugit commodi suscipit expedita aperiam reiciendis quae aliquam quos, ipsum temporibus, delectus amet?
        </h2>
        <img className='w-full h-[65vh] rounded-lg mt-4' src="https://images.unsplash.com/photo-1700308234428-c619d7408fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
        <div className='flex justify-between px-5 mt-4'>
           <span>Al-Jazeera News</span>
           <span>3 days ago</span>
        </div>
        <div className='mt-4'>
        <h2  className='font-bold text-lg'>Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quia cumque repellendus atque corporis. Quos ut, ipsa quasi at quidem maiores neque nisi! Dolores nostrum debitis velit expedita. Nobis voluptatibus ex sed non enim.
        </p>
        </div>
        <div  className='mt-5'>
        <h2  className='font-bold text-lg'>Description</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quia cumque repellendus atque corporis. Quos ut, ipsa quasi at quidem maiores neque nisi! Dolores nostrum debitis velit expedita. Nobis voluptatibus ex sed non enim.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quia cumque repellendus atque corporis. Quos ut, ipsa quasi at quidem maiores neque nisi! Dolores nostrum debitis velit expedita. Nobis voluptatibus ex sed non enim.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quia cumque repellendus atque corporis. Quos ut, ipsa quasi at quidem maiores neque nisi! Dolores nostrum debitis velit expedita. Nobis voluptatibus ex sed non enim.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quia cumque repellendus atque corporis. Quos ut, ipsa quasi at quidem maiores neque nisi! Dolores nostrum debitis velit expedita. Nobis voluptatibus ex sed non enim.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quia cumque repellendus atque corporis. Quos ut, ipsa quasi at quidem maiores neque nisi! Dolores nostrum debitis velit expedita. Nobis voluptatibus ex sed non enim.
        </p>
        </div>
        <button type="button" className="focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-500 font-medium rounded-[4px] text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Officail site</button>
    </Container>
    </React.Fragment>
  )
}

export default CompleteArticle