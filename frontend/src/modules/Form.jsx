import React from 'react';
import Axios from "axios";
import '../css/common.css';


function Form(){
	const inputRef = React.createRef()
	// const handleSubmit = event => {
    //    event.preventDefault();
    //    console.log(inputRef.current.value); 
	// }

	const postMemo = () => {
		Axios.post("/api/insert/memo", {
			content: inputRef.current.value
		}).catch((err) => {
			console.log(err)
		})
	}

	return(
		<>
			<div className='Form common_frame'>
				<p>メモ</p>
				<input ref={inputRef} type="text" name=""></input>
				<input type="submit" name="" value="保存する" className="submit" onClick={postMemo} />
			</div>
		</>
	)
}

export default Form;