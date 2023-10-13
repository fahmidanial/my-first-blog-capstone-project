import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    cover,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          Read More
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
