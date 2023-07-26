/* context provider */
import React, { createContext } from "react";
import usePostApi from "../API/PostApi";
import useUserApi from "../API/UserApi";
import useCommentApi from "../API/CommentApi";
import useProductApi from "../API/ProductApi";
export const DataContext = createContext();

function DataProvider(props) {

    const data = {
        postApi: usePostApi(),
        userApi: useUserApi(),
        commentApi: useCommentApi(),
        productApi: useProductApi()
    }

    return (
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider