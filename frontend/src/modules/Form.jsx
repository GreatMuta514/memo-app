import React, {useState} from 'react';
import '../css/common.css';

function Form(){
	return(
		<>
			<div className='Form common_frame'>
				<p>メモ</p>
				<input type="text" name=""></input>
				<input type="submit" name="" value="保存する" className="submit" />
			</div>
		</>
	)
}

export default Form;