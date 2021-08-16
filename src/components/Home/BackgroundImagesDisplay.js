import React from "react";

function BackgroundImagesDisplay (props) {


   function onHandleEditSubmit (index, mode) {
        if (mode && (index > 3)) {
            return true
        }
        return false

    };

        return (
            <div>
                <img
                    className={`wallpaper ${onHandleEditSubmit(props.index, props.searchModeOn) ? "hide" : ""} ${(props.index > 1) ? "mobile" : ""} `}
                    src={props.item}
                    alt={props.item}
                    height={onHandleEditSubmit(props.index, props.searchModeOn) ? "0" : "230"}
                />
            </div>
        )
}

export default BackgroundImagesDisplay;