import React from 'react'
import BlogPost from './Pages/BlogPost';
import SearchBar from './components/SearchBar';
const App = () => {
  return (
    <div className="container">
  <SearchBar/>
  <BlogPost/>
  </div>
  )
}
export default App
