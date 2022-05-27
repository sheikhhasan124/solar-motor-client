import React from 'react';

const Blog = () => {
    return (
        <div className='grid  gap-3 md:w-3/4 my-8'>
            <div>
                <h2 className='text-4xl'>How will you improve the performance of a React Application?</h2>
                <p className='text-gray-500 font-semibold'>To optimize React rendering, you need to make sure that components receive only necessary props.There are many other things for example: Keeping component state local where necessary, Memoizing React components to prevent unnecessary re-renders, Code-splitting in React using dynamic import, Windowing or list virtualization in React, Lazy loading images in React.
 </p>
            </div>
            <div>
                <h2 className='text-4xl'> What are the different ways to manage a state in a React application?</h2>
                <p className='text-gray-500 font-semibold'>There are four ways to manage react components state . To manage local state in react is used useStete It can take accept any valid data value, including primitive and object values.
                    To manage global state is used useReducer and UseContext . To manage server state is used useState and useEffect , useEffect has a callback and dependency. After all here are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.
                    And Redux, particularly, gives the developer a single place to put all their state that seems great .
                </p>
            </div>
            <div>
                <h2 className='text-4xl'> How does prototypical inheritance work?</h2>
                <p className='text-gray-500 font-semibold'>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

</p>
            </div>
            <div>
                <h2 className='text-4xl'>Why you do not set the state directly in React.</h2>
                <p className='text-gray-500 font-semibold'>when we update the state of a component all it's children are going to be rendered as well. or our entire component tree rendered.

but when i say our entire component tree is rendered that doesn’t mean that the entire DOM is updated. when a component is rendered we basically get a react element, so that is updating our virtual dom.

React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn’t update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM.

then react will figure out what is changed and based on that it will update the real DOM accordingly </p>
            </div>
            <div>
                <h2 className='text-4xl'>What is a unit test? Why should write unit tests?</h2>
                <p className='text-gray-500 font-semibold'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process</p>
            </div>
        </div>
    );
};

export default Blog;