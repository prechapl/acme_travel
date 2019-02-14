module.exports = (user) => (`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ACME TRAVEL</title>
</head>
<body>
    <div>
      ${ UserId}
    </div>
    <div>
        ${ UserId }
    </div>
    <div>
        ${ UserId }
    </div>

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
