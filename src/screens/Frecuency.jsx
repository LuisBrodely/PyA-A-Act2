import React, { useContext } from 'react';
import { Context } from '../context/context';

export default function Frecuency() {
	const { chartImage, chartImage2, chartImage3, chartImage4, chartImage5, tableHTML2 } = useContext(Context)

	return (
		<div className='px-24 mt-5'>
			<h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-5">Tabla de Frecuencias</h1>
			{
				tableHTML2 &&
				<div className='table' dangerouslySetInnerHTML={{ __html: tableHTML2 }}></div>
			}
		</div>
	)
}
