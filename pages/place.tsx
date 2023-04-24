import React from "react";
import Header from "@/components/layout/place/header";
import Footer from "@/components/layout/place/footer";
import placeClass from "@/styles/place.module.css";
import { Box, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import pageAuth from "@/components/pageAuth";
import { useAppDispatch } from "@/store/store";
import {
  SearchResultsSelector,
  SearchStatusSelector,
  queryNextPage,
} from "@/store/slices/searchSlice";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";

const Place = () => {
  // useEffect(() => {}, []);
  const dispatch = useAppDispatch();
  const searchStatus = useSelector(SearchStatusSelector);
  const searchResult = useSelector(SearchResultsSelector);

  return (
    <>
      <Header searchBar={true} />
      <Box className={placeClass.contentBody} bgcolor="background.default">
        {searchStatus == "idle" ? (
          "ค้นหาร้านอาหาร..."
        ) : (
          <Box>
            <Grid container spacing={2} className="flex">
              {(searchResult?.results || []).map((e, i) => (
                <Grid key={i} item xs={12} lg={6} xl={4}>
                  <Link href={e.link || ""} target="_blank">
                    <Card sx={{ display: "flex" }} className="w-auto">
                      <CardMedia
                        component="img"
                        sx={{ width: 151, height: 151 }}
                        image={e.image || "/next.svg"}
                        alt={e.name}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxHeight: 151,
                        }}
                      >
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Box className="font-bold text-lg">{e.name}</Box>
                          <Box className="text-md">{e.formatted_address}</Box>
                        </CardContent>
                      </Box>
                    </Card>
                  </Link>
                </Grid>
              ))}
              <Box className="flex w-full justify-center mt-5">
                {searchResult?.next_page_token &&
                  (searchStatus == "loading" ? (
                    <CircularProgress
                      sx={{ color: "black" }}
                    ></CircularProgress>
                  ) : (
                    <Button
                      onClick={() => {
                        dispatch(queryNextPage(searchResult?.next_page_token!));
                      }}
                      size="large"
                      style={{
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      ดูเพิ่ม
                    </Button>
                  ))}
              </Box>
            </Grid>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default pageAuth(Place);
