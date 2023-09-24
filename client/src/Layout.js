import React from 'react';
import TodoApp from './TodoApp';
function Layout() {
  return (
    <div className="Layout">
      
      <div className="header">
        <h1> My First React Application </h1>
      </div>
      
      <div className="content">
        {/* <h1> Content</h1> */}
        <TodoApp />
      </div>
      
      <div className="footer">
        <h1> footer</h1>
      </div>
      
    </div>
  );
}

export default Layout;
