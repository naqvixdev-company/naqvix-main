

// "use client";

// import dynamic from "next/dynamic";

// const Map = dynamic(() => import("./MapComponent"), {
//   ssr: false,
//   loading: () => (
//     <div className="w-[90%] m-auto h-96 my-10 flex items-center justify-center border rounded-2xl shadow-lg">
//       <p>Loading map...</p>
//     </div>
//   ),
// });

// export default function LeafletMap() {
//   return <Map />;
// }

"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div 
      className="w-[90%] m-auto h-96 my-10 flex items-center justify-center border rounded-2xl shadow-lg"
      role="status"
      aria-label="Loading interactive map"
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-zinc-400">Loading map...</p>
        <p className="sr-only">Interactive map showing Naqvix office location is loading</p>
      </div>
    </div>
  ),
});

export default function LeafletMap() {
  return (
    <div role="region" aria-labelledby="map-title">
      <h3 id="map-title" className="sr-only">Naqvix Office Location</h3>
      <Map />
    </div>
  );
}
