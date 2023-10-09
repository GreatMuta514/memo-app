import '../css/common.css';
import '../css/List.css';

function List({memos}) {
	return(
		<>
			<div className="List common_frame">
			<ul className="item">
                <li>メモ</li>
            </ul>
            <ul className="result">
				{memos.map((memo) =>
					 <li>{memo.content}</li>
				)}
            </ul>
			</div>
		</>
	);
}

export default List;