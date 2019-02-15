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


// const moeStays = () => {
//   return Stay.findAll({where: { userId: 1 }})
//   // .then((stays => {
//   //   console.log(stays)}))
// };
// moeStays()
  // .then(())
// console.log(moeStays())

      // return Stay.findAll();
    //   const moeStays = await ( Stay.findAll({
    //       where: { userId: 1 }
    //     })
    //   );
    //   const larryStays = await ( Stay.findAll({
    //       where: { userId: 2 }
    //     })
    //   );
    //   const curlyStays = await ( Stay.findAll({
    //       where: { userId: 3 }
    //     })
    //   );
    //   return [ moeStays, larryStays, curlyStays ]
