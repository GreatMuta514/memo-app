import React, { memo } from 'react';
import '../css/common.css';
import '../css/List.css';

function List({memo}) {
	return(
		<>
			<div className="List common_frame">
			<ul className="item">
                <li>メモ</li>
            </ul>
            <ul className="result">
                <li>{memo}</li>
                <li></li>					
                <li></li>
            </ul>
			</div>
		</>
	);
}

export default List;