import { createRoot } from 'react-dom/client' // named import
// import <names> from "<pakage>"

createRoot(document.getElementById("root")).render(
  <div>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ol>
    <img width="500" height="500" src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=avif&quality=85&format=webp&iar=0&w=1920&imdensity=1" alt="" />
  </div>
);

// Syncing the virtual DOM with the real DOM