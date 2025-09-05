
// const UHeading = ({ text }) => {
//   return (
//     <div className="flex items-center gap-4">
//       {/* Line before heading */}
//       <div className="w-20 h-[6px] bg-gradient-to-r rounded-full from-blue-500 via-purple-500 to-purple-700 dark:from-white dark:via-zinc-300 dark:to-zinc-500"></div>

//       {/* Heading */}
//       <h2
//         className="text-[7vw] md:text-[4.25vw] font-extrabold leading-tight 
//           bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
//           bg-clip-text text-transparent
//           dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
//       >
//         {text}
//       </h2>
//     </div>
//   );
// };

// export default UHeading;
const UHeading = ({ text }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Line before heading */}
      <div className="w-15 h-[6px] bg-gradient-to-r rounded-full from-blue-500 via-blue-400 to-purple-500 dark:from-white dark:via-zinc-300 dark:to-zinc-500"></div>
       
      {/* Heading */}
      <h2
        className="text-[7.5vw] md:text-[3.5vw] font-extrabold leading-tight
           bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500
           bg-clip-text text-transparent
          dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
      >
        {text}
      </h2>
    </div>
  );
};

export default UHeading;