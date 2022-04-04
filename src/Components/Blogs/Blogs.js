import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='question-container'>
            <div>
                <h2>What is Context API? Purpose of context api.</h2>
                <p>With context api we can share data with multiple components. We don't have pass data through props manually. It provides us a way to make particular data available to all component throughout the component tree. It doesnt matter how deeply nested that component are.</p>
            </div>
            <div>
                <h2>What is Semantic Tag?</h2>
                <p>
                    Semantic element are thos which describes their meaning in human and machine-readable way.
                    header , footer, article are all semantic element and they accurately describe the purpose of the element. For those reason it is much easier to read and It has greater accessibility also.
                </p>
            </div>
            <div>
                <h2>Difference between Inline, Block, Inline-block? </h2>
                <p>In Inline element it doesn't start on a new line. its only occupied the required width and we can't set it's height and width.
                    In Block element it start on a new line and occupy whole available width. We can set it's height and width.
                    Inline block element is just like inline element but we can set its height and width.</p>
            </div>
        </div>
    );
};

export default Blogs;