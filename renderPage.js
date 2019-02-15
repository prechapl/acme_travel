// const { moeStays }= require('./db')
 
// const userStays = syncAndSeed()
// const moeStays = moeStays()

module.exports = (stays) => (`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ACME TRAVEL</title>
</head>
<body>
    <h1>
      ${ stays }
    </h1>
    <h1>
        ${ stays }
    </h1>
    <h1>
        ${ stays }
    </h1>

</body>
</html>`)


// const renderContents = (contents)=> {
//   return `
//     <ul>
//       ${
//         contents.map( content => {
//           return `
//             <li>
//               ${ content.title }
//               <br />
//               ${ content.body }
//             </li>
//           `;
//         }).join('')
//       }
//     </ul>
//   `;
// };

// const renderPage = ({ page, pages, contents})=> {
//   return `
//     <html>
//       <head>
//         <title>Acme Web ${ page.title }</title>
//       </head>
//     <body>
//     ${ renderNav(pages, page)}
//     <h1>${page.title}</h1>
//     ${ renderContents(contents)}
//     </body>
//     </html>
//   `;
// };
