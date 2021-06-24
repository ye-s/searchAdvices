import { useRef, useReducer, useCallback } from "react";

// type UseFetchState = {
//   isLoading: Boolean;
//   error: any;
//   data: any[];
// };

interface UseFetchState {
  isLoading: boolean;
  error: any;
  data: any;
}

type UseFetchAction = {
  type: string;
  payload?: any;
};

export const useFetchAdvice = (
  //url: string,
  checkCache: boolean = false
): [UseFetchState, (value: string) => void] => {
  const cache: Record<string, any> = useRef({});

  const initialState: UseFetchState = {
    isLoading: false,
    error: null,
    data: []
  };

  const [state, dispatch] = useReducer(
    (state: UseFetchState, action: UseFetchAction) => {
      switch (action.type) {
        case "LOADING":
          return { ...initialState, isLoading: true };
        case "FETCHED":
          return { ...initialState, isLoading: false, data: action.payload };
        case "ERROR":
          return { ...initialState, isLoading: false, error: action.payload };
        default:
          return state;
      }
    },
    initialState
  );

  const fetchData = useCallback(async (url): Promise<any> => {
    dispatch({ type: "LOADING" });
    if (cache.current[url] && checkCache) {
      const rawData = cache.current[url];
      const data = rawData.slips ? rawData.slips : rawData.slip;
      dispatch({ type: "FETCHED", payload: data });
    } else {
      try {
        const response = await fetch(url);
        const rawData = await response.json();
        let data = rawData?.slips ? rawData?.slips : rawData?.slip;

        // Check if no data was found and update
        if (!data && rawData.message) {
          data = [];
        } else if (!data) {
          throw Error("No match for any advice.");
        }
        cache.current[url] = data;
        //if (cancelRequest) return;
        dispatch({ type: "FETCHED", payload: data });
      } catch (error) {
        console.log("err", error);
        //if (cancelRequest) return;
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  }, []);

  // const fetchData = useCallback(async (url): Promise<any> => {
  //   dispatch(dataFetchInit());
  //   const options = {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     auth: {
  //       username: `${process.env.REACT_APP_API_AUTH_USER}`,
  //       password: `${process.env.REACT_APP_API_AUTH_PWD}`
  //     }
  //   };
  //   try {
  //     const { data } = await get(url, options);
  //     if (!didCancel) {
  //       dispatch(dataFetchSuccess(data));
  //     }
  //   } catch (error) {
  //     if (!didCancel) {
  //       dispatch(dataFetchFailure(error));
  //     }
  //   }
  //}, []);

  return [state, fetchData];
};
