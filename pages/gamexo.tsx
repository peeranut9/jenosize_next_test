import { initBoard, moveBoard } from "@/services/xoService";
import { Box, Grid, Snackbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "@/store/slices/userSlice";
import Face2Icon from "@mui/icons-material/Face2";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Header from "@/components/layout/place/header";
import placeClass from "@/styles/place.module.css";
import Footer from "@/components/layout/place/footer";
import pageAuth from "@/components/pageAuth";

interface XOResult {
  board?: string[][];
  winner?: string | null;
  error?: string | null;
}

const GameXO = () => {
  const [board, setBoard] = useState<string[][] | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const authen = useSelector(isAuthenticatedSelector);
  useEffect(() => {
    if (authen) {
      setWinner(null);
      setRefresh(false);
      setBoard(null);
      initBoard().then((response: string[][] | null) => {
        if (response) {
          setBoard(response);
        } else {
          setBoard([]);
        }
      });
    }
  }, [authen, refresh]);

  return (
    <>
      <Header />
      <Box className={placeClass.contentBody} bgcolor="background.default">
        {!board ? (
          <CircularProgress></CircularProgress>
        ) : board.length == 0 ? (
          <Button
            size="large"
            variant="contained"
            className="bg-black hover:bg-gray-500 self-center"
            onClick={() => {
              setRefresh(true);
            }}
          >
            {"Try Again"}
          </Button>
        ) : (
          <Box
            className="w-screen h-screen relative self-center"
            sx={{ maxWidth: 500, maxHeight: 500, boxShadow: 2 }}
            bgcolor="background.paper"
          >
            {winner && (
              <Box className="absolute w-full h-full bg-black flex justify-center items-center opacity-90">
                <Box>
                  <Box
                    color="white"
                    className="text-center font-bold mb-2 text-3xl"
                  >
                    {winner.toLocaleLowerCase() === "x" ? (
                      <>
                        <Face2Icon
                          color="primary"
                          sx={{ width: 50, height: 50 }}
                        ></Face2Icon>
                        <Box className="self-center">WIN</Box>
                      </>
                    ) : winner.toLocaleLowerCase() === "o" ? (
                      <>
                        <SmartToyIcon
                          color="warning"
                          sx={{ width: 60, height: 60 }}
                        ></SmartToyIcon>
                        <Box className="self-center">WIN</Box>
                      </>
                    ) : (
                      "DRAW"
                    )}
                  </Box>
                  <Button
                    size="large"
                    variant="contained"
                    className="bg-white text-black hover:text-white"
                    onClick={() => {
                      setRefresh(true);
                    }}
                  >
                    {"Try Again"}
                  </Button>
                </Box>
              </Box>
            )}
            {board.map((row: string[], i) => (
              <Grid
                key={i}
                container
                className="h-2/6"
                sx={
                  i == 1
                    ? {
                        borderTop: "1px solid purple",
                        borderBottom: "1px solid purple",
                      }
                    : null
                }
              >
                {row.map((col, j) => (
                  <Grid
                    key={j}
                    item
                    xs={4}
                    className="cursor-pointer flex justify-center items-center"
                    sx={
                      j == 1
                        ? {
                            borderRight: "1px solid purple",
                            borderLeft: "1px solid purple",
                          }
                        : null
                    }
                    onClick={() => {
                      if (col.toLocaleLowerCase() === "") {
                        moveBoard(i, j).then((response: XOResult | null) => {
                          if (response) {
                            if (response.error) {
                              setError(response.error);
                            }
                            if (response.winner) {
                              setWinner(response.winner);
                            }
                            if (response.board) {
                              setBoard(response.board);
                            }
                          } else {
                            setError("Error");
                          }
                        });
                      }
                    }}
                  >
                    {col.toLocaleLowerCase() === "x" ? (
                      <Face2Icon
                        color="primary"
                        sx={{ width: 50, height: 50 }}
                      ></Face2Icon>
                    ) : col.toLocaleLowerCase() === "o" ? (
                      <SmartToyIcon
                        color="warning"
                        sx={{ width: 60, height: 60 }}
                      ></SmartToyIcon>
                    ) : (
                      ""
                    )}
                  </Grid>
                ))}
              </Grid>
            ))}
          </Box>
        )}
        <Snackbar
          className="w-full justify-center"
          open={error != null}
          autoHideDuration={1000}
          onClose={() => {
            setError(null);
          }}
          message={error}
        />
      </Box>
      <Footer />
    </>
  );
};
export default pageAuth(GameXO);
