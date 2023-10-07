import React, {useState} from 'react';
import '../css/common.css';

function Form(){
	return(
		<>
			<div className='Form common_frame'>
				<p>ユーザー名</p>
				<input type="text" name=""></input>
				<input type="submit" name="" value="検索する" className="submit" />
			</div>
		</>
	)
}

export default Form;