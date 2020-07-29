// /nodes/id  <-- route in browser
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


// const Page = () => {
//   const router = useRouter();

//   //router.query associates to the filename inside the [ ]
//   /*
//   router.query.id
//                 |
//                 |
//                [id].jsx
//   */
//   //catch all route file name = [...params].jsx
//   // params will be an array ex. /notes/1/2/3/4  params will be [1,2,3,4]
//   const { params } = router.query

//   return (
//     <h1>
//       Note {params}
//       {console.log(params)}
//     </h1>
//   )
// }

// export default Page

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div>
      <h1 id="body">Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  )
}