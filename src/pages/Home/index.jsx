import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import Footer from '../../components/Home/Footer';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs] = useState(blogList);

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default Home;
