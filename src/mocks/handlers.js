import { rest } from "msw";
export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, async (req, res, ctx) => {
    const resp = res(
      ctx.json([
        {
          name: "Charles",
          image: "https://image.flaticon.com/icons/png/512/1228/1228248.png",
          surname: "Andrew",
          height: 198,
          weight: 85,
          times: ["619d0c79b30c0f15a054414a"],
          __v: 0,
          id: "61992888ae09b4da2d7cefe0",
        },
        {
          name: "Caroline",
          image: "https://image.flaticon.com/icons/png/512/1228/1228248.png",
          surname: "Griffin",
          birthdate: "1998-12-06T00:00:00.000Z",
          height: 178,
          weight: 67,
          __v: 0,
          id: "61992a5f29e95e7ccc4b5bca",
        },
      ])
    );
    return resp;
  }),
];
