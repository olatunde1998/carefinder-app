// import { FilterIcon } from 'assets/icons/HomePageIcons';

export const Searchbar = ({placeholderInfo, className, classNameTwo,onChange}) => {
  return (
    <div>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className={`relative w-full ${classNameTwo}`}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {/* <FilterIcon className="text-black" /> */}
          </div>
          <input
            type="text"
            className={`w-full p-2.5 pl-5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 ${className}`}
            placeholder={placeholderInfo}
            onChange={onChange}
            required=""
          />
        </div>
      </form>
    </div>
  );
};
