import React from 'react'
import "./Widgets.css"
function Widgets() {
    return (
			<div className="widgets">
				<iframe
					src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvoogueme%2Fposts%2F1371105909925715&width=500&show_text=true&height=763&appId"
					width="500"
					height="763"
                style={{ border: "none", overflow: "hidden" }}
					scrolling="no"
					frameborder="0"
					allowfullscreen="true"
					allow="encrypted-media"></iframe>
			</div>
		);
}

export default Widgets
