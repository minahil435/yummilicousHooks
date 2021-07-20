import React, {Component} from "react";

export class BackgroundImagesDisplay extends Component {

    onHandleEditSubmit = (index,mode) => {
        if (mode && (index > 3)){
            return true
        }
        return false
       
    };

    render (){
        return (
            <div>
                <img
                    className="wallpaper"
                    src = {this.props.item}
                    alt = {this.props.item}
                    height = {this.onHandleEditSubmit(this.props.index , this.props.searchModeOn) ? "0" : "230"}
                    />
            </div>
        )
    }
}

export default BackgroundImagesDisplay;