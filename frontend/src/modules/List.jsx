import React from 'react';
import '../css/common.css';
import '../css/List.css';

function List() {
	return(
		<>
			<div className="List common_frame">
			<ul className="item">
                <li>Day</li>
                <li>Title</li>
                <li>Content</li>
            </ul>
            <ul className="result">
                <li>12/1</li>
                <li>欲しいモノリスト</li>
                <li>きつね、たぬき、ねこ、スイカ</li>
            </ul>
			</div>
		</>
	);
}

export default List;