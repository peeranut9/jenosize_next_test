import { AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "@/store/store";
import { SearchStatusSelector, searchQuery } from "@/store/slices/searchSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

interface Props {
  searchBar?: boolean;
}

export default function Header(props: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const searchStatus = useSelector(SearchStatusSelector);

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value || "");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(searchQuery(searchValue));
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Box className="h-16 flex px-5 py-2">
        <Link className="self-center" href="/">
          <Image src="/next.svg" alt="logo" width={166} height={40} />
        </Link>
        {props.searchBar && (
          <>
            <form onSubmit={handleSubmit} className="flex border ml-auto">
              <Box className="mr-2">
                <InputBase
                  sx={{ ml: 1 }}
                  className="ml-auto px-2 h-full"
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </Box>
              {searchStatus == "loading" ? (
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  className="bg-black"
                >
                  <CircularProgress
                    size={24}
                    className="self-center"
                  ></CircularProgress>
                </IconButton>
              ) : (
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              )}
            </form>
          </>
        )}
      </Box>
    </AppBar>
  );
}
