import React from 'react';
import Link from 'next/link';
//css does not work if we try to import css '../src/components/styles.css'  it needs to go into _app.js within pages
// creating routes like myapp.com/project/settings. Just need to create folders inside pages folder

export default () => (
  <div>
    <h1>Index page</h1>

    <Link href="/notes">
      <a>Link</a>
    </Link>
  </div> 
)

