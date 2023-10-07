import React from 'react';
import '../css/common.css';
import '../css/List.css';

function List() {
	return(
		<>
			<div className="List common_frame">
			<ul className="item">
                <li>メモ</li>
            </ul>
            <ul className="result">
                <li>スーパー行く</li>
                <li></li>					
                <li></li>
            </ul>
			</div>
		</>
	);
}

export default List;