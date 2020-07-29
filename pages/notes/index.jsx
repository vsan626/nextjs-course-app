//when you create index.jsx file inside a subfolder, it will create the sub route

import React from 'react'
import Link from 'next/link'

// const Page = () => (
//   <div>
//     <h1> Note index path</h1>
//     {/* client side routing with Link tag from next.js */}
//     {/* using 'as' will let next.js know what value the param is. only for dynamic routes */}
//     <Link href="/notes/[id]" as={`/notes/1`}>
//       <a>
//         Note 1
//       </a>
//     </Link>
//   </div>
// )

// export default Page

export default () => {
  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))

  return (
    <div>
      <h1>Notes</h1>

      {notes.map(note => (
        <div>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}