// import React, { use } from "react";
"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { MoonLoader } from "react-spinners";
// import TableMain from "../components/table/tableMain";
import { createColumnHelper } from "@tanstack/react-table";
import { useReactTable } from "@tanstack/react-table";
import TableMain from "../table/tableMain";
import { Searchbar } from "../searchbar/searchbar";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "fsq3EXcq9aWwDojQT7YfGvqMa6RBZ0dRhVvxHQuCn6YyvwQ=",
  },
};

const lagosBaseUrl =
  "https://api.foursquare.com/v3/places/search?query=hospital&ll=6.592943960178358%2C3.3582838029157145";

const ibadanBaseUrl =
  "https://api.foursquare.com/v3/places/search?query=hospital&ll=7.39167649621762%2C3.9136388580951045";
// fetch('https://api.foursquare.com/v3/places/search?query=hospital&ll=6.592943960178358%2C3.3582838029157145', options)
//   .then(response => response.json())
//   .then(response => console.log(response, "===================="))
//   .catch(err => console.error(err));

const PlaceLocation = () => {
  const [homePageData, setHomePageData] = useState();
  const [ibadanDatas, setIbadanDatas] = useState();
  const [inputValue, setInputValue] = useState();
  const [dataNeeded, setDataNeeded] = useState();
  const [dataNeededIbadan, setDataNeededIbadan] = useState();

  const [loading, setLoading] = useState(true);

  const locations = [
    "lagos",
    "ibadan",
    "abuja",
    "kano",
    "jos",
    "kaduna",
    "enugu",
    "owerri",
    "portharcourt",
    "calabar",
    "asaba",
    "warri",
    "benin",
    "akure",
    "ilorin",
    "ibadan",
    "abakaliki",
    "uyo",
    "makurdi",
    "minna",
    "zaria",
    "bauchi",
    "yola",
    "sokoto",
    "katsina",
    "gusau",
    "jalingo",
    "lafia",
    "damaturu",
    "maiduguri",
    "awka",
    "onitsha",
    "umahia",
    "bayelsa",
    "yenagoa",
    "abakaliki",
    "nsukka",
    "nsit ibom",
    "ikot ekpene",
    "ikom",
    "orlu",
    "ogbomosho",
    "abeokuta",
    "sagamu",
    "ijebu ode",
    "oshogbo",
    "ile ife",
    "ilesha",
    "akure",
    "ondo",
  ];

  useEffect(() => {
    axios.get(lagosBaseUrl, options).then((response) => {
      setHomePageData(response.data);
      console.log(response.data.results, "==============");
      setLoading(false);
    });

    const needed = homePageData?.results.map((gender, index) => {
      // homePageData?.results
      return {
        id: gender.categories[0].id,
        name: gender.name,
        categories: gender.categories[0].id,
        distances: gender.distance,
        region: gender.location.region,
        address: gender.location.address,
        timezone: gender.timezone,
        latitude:
          gender.geocodes.main.latitude +
          " " +
          "," +
          " " +
          gender.geocodes.main.longitude,
      };
    });
    console.log(dataNeeded, "====================");
    setDataNeeded(needed);
  }, [homePageData]);

  useEffect(() => {
    axios.get(ibadanBaseUrl, options).then((response) => {
      setIbadanDatas(response.data);
      console.log(response.data.results, "==============");
      setLoading(false);
    });
    const needed = ibadanDatas?.results.map((ibadanData, index) => {
      // homePageData?.results
      return {
        id: ibadanData.categories[0].id,
        name: ibadanData.name,
        categories: ibadanData.categories[0].id,
        distances: ibadanData.distance,
        region: ibadanData.location.region,
        address: ibadanData.location.address,
        timezone: ibadanData.timezone,
        latitude:
          ibadanData.geocodes.main.latitude +
          " " +
          "," +
          " " +
          ibadanData.geocodes.main.longitude,
      };
    });
    console.log(dataNeededIbadan, "====================");
    setDataNeededIbadan(needed);
  }, [ibadanDatas]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  // if (loading)
  //   return (
  //     <div className="flex items-center justify-center pt-[200px]">
  //       <MoonLoader
  //         color={"#0D0C64"}
  //         loading={loading}
  //         // cssOverride={override}
  //         size={150}
  //         aria-label="Loading Spinner"
  //         data-testid="loader"
  //       />
  //     </div>
  //   );

  // create columnHelper
  const columnHelper = createColumnHelper();
  // Table columns
  const columns = [
    columnHelper.accessor("id", {
      header: "S/N",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span className="">{info.renderValue()}</span>,
      header: () => <span>HOSPITAL NAME</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("distances", {
      cell: (info) => <span className="">{info.renderValue()}</span>,
      header: () => <span>EMAIL</span>,
      footer: (info) => info.column.id,
    }),

    columnHelper.accessor("address", {
      cell: (info) => <span>{info.renderValue()}</span>,
      header: () => <span>ADDRESS</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("region", {
      cell: (info) => <span>{info.renderValue()}</span>,
      header: () => <span>REGION</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("latitude", {
      cell: (info) => <span>{info.renderValue()}</span>,
      header: () => <span>LONG/LAT</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("timezone", {
      cell: (info) => <span>{info.renderValue()}</span>,
      header: () => <span>TIME ZONE</span>,
      footer: (info) => info.column.id,
    }),
  ];

  return (
    <div className="px-4">
      <p className="mt-8 text-[20px]">Select your Location</p>

      <select
        name="location"
        id="location"
        onChange={handleInputChange}
        className="w-full p-4 border-[.23px] border-[#1F4D36] my-4 "
      >
        <option>Search by Location</option>
        {locations?.map((location, idx) => (
          <option key={idx}>{location}</option>
        ))}
      </select>
      {/* search filter and others */}
      <div className="flex gap-4 my-8">
        <div className="w-full md:w-1/2">
          <Searchbar
            placeholderInfo="Filter by Hospital Name"
            // onChange={handleNameFilterChange}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Searchbar
            placeholderInfo="Filter by Email"
            // onChange={handleDescriptionFilterChange}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Searchbar
            placeholderInfo="Filter by Latitude/Longitude"
            // onChange={handleStatusFilterChange}
          />
        </div>
      </div>

      <p className="mt-8 text-[20px]">List of Hospitals around {inputValue}</p>

      <TableMain
        //  data={dataNeededIbadan || dataNeeded  || []}
        data={
          inputValue === "lagos"
            ? dataNeeded
            : inputValue === "ibadan"
            ? dataNeededIbadan
            : []
        }
        columns={columns}
        tableClass=" font-medium text-small"
      />

      {/* {inputValue === "lagos" ? (
        <div>
          {homePageData?.results.map((heroData, idx) => (
            <div key={idx}>
              <p>{heroData.name}</p>
              <p>{heroData.location.address}</p>
              <p>{heroData.categories[0].id}</p>
              <Image
                src={`${heroData.categories[0].icon.prefix}${heroData.categories[0].icon.suffix}`}
                width={100}
                height={100}
                alt="icon"
              />
            </div>
          ))}
        </div>
      ) : inputValue === "ibadan" ? (
        <div>
          {ibadanDatas?.results.map((ibadanData, idx) => (
            <div key={idx}>
              <p>{ibadanData.name}</p>
              <p>{ibadanData.location.address}</p>
              <p>{ibadanData.categories[0].id}</p>
              <Image
                src={`${ibadanData.categories[0].icon.prefix}${ibadanData.categories[0].icon.suffix}`}
                width={100}
                height={100}
                alt="icon"
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default PlaceLocation;
