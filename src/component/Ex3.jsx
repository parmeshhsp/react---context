import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Comment from "../screens/Comment";

function Ex3(props) {

    const context = useContext(DataContext)
    const [comments] = context.commentApi.comments
    return (
        <div className="DataContext">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className=" display-3 text-success" >
                        Comment
                    </h3>
                </div>
            </div>
            <div className="row">
                {
                    comments && comments.map((item, index) => {
                        return (
                            < Comment key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ex3