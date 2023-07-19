import React from "react";
import Emoji from "./sub_components/Emoji";
import EmojiName from "./sub_components/EmojiName";
import Meaning from "./sub_components/Meaning";

function Dictionary(props) {
    return(
        <div className="term">
          <dt>
            <Emoji spanEmoji={props.spanEmoji} />
            <EmojiName spanName={props.spanName}/>
          </dt>

          <dd>
            <Meaning ddMeaning={props.ddMeaning}/>
          </dd>
        </div>
    )
}

export default Dictionary;