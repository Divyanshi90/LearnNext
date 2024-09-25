

import { useCallback, useEffect, useState } from "react";
// import { fetchRequest, getFullUrl } from "Api";
// import { URLRoutes } from "URLRoutes";
// import { CONFIG } from "config";
// import { useFingerprint } from "./FingerPrintContext";

export function useThumbnailImage(
    executionID: string,
    slideRef: string,
    imageId: number,
    callback: (link: string, imageId: number) => void,
    waitForFetching: boolean,
    quality: "thumb" | "hd",
    disableCallbackAPI?: boolean
) {
    const [downloadStarted, setDownloadStarted] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>(undefined!);
    const [error, setError] = useState<string>(undefined!);
    //   const {fingerprint} = useFingerprint();
    // console.log(executionID , slideRef  , "data")

    const fetchThumbnail = useCallback(async () => {
        try {
            setError(undefined!);
            const response = await fetch(`https://dev.keynoteslides.com/ppt/v1/assets/${executionID}/${slideRef}/${quality}`, {
                headers: {
                    'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6IjYzNDA5NjMiLCJleHAiOjE3MjcyNjUzMjZ9.aWS7makU9qLcERCgGFCzQcx_azg2d5WvbKZ54nO_AgM",
                    'Content-Type': 'application/json'  // Add Content-Type header
                }
            });
            const data = await response.json() || {};
            console.log(data, "data")
            setImageUrl(data.data);
            if (disableCallbackAPI && typeof callback === "function") {
                callback(data, imageId);
            } else if (typeof callback === "function") {
                const hdResponse = await fetch(`https://dev.keynoteslides.com/ppt/v1/assets/${executionID}/${slideRef}/hd`, {
                    headers: {
                        'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6IjYzNDA5NjMiLCJleHAiOjE3MjcyNjUzMjZ9.aWS7makU9qLcERCgGFCzQcx_azg2d5WvbKZ54nO_AgM",
                        'Content-Type': 'application/json'  // Add Content-Type header
                    }
                });
                const data = await hdResponse.json() || {};
                callback(data.data, imageId);
                console.log(hdResponse, "data")

            }
            setDownloadStarted(false);
        } catch (error) {
            console.error("Error fetching thumbnail:", error);
            setImageUrl(undefined!);
            setDownloadStarted(false);
            setError("Failed To load Image");
        }
    }, [slideRef, waitForFetching]);

    useEffect(() => {
        if (slideRef && !downloadStarted && !waitForFetching) {
            setDownloadStarted(true);
            setImageUrl(undefined!);
            fetchThumbnail();
        }
    }, [slideRef, waitForFetching]);

    return { imageUrl, error };
}