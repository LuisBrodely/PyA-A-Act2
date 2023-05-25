import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from "../context/context.jsx";

export default function Home() {
	const { handleColumnaChange, handleInputChange, handleFileUpload, columnaIndex, columnas, tableHTML, filePath } = useContext(Context)

	return (
		<>
			<header>

				{
					tableHTML ?
						<div className='py-5'>
							<div>
								<h1 className="px-24 text-3xl font-bold leading-tight tracking-tight text-gray-900 pb-5">Tabla Completa</h1>
							</div>
							<div className='table px-5' dangerouslySetInnerHTML={{ __html: tableHTML }}></div>
						</div>
						:
						<div className='flex justify-center mt-5'>
							<div>
								<h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Subir archivo</h1>
								<input type="text" 
								className='p-2.5 rounded-md w-[500px] mt-3 border border-gray-400'
								value={filePath} 
								onChange={handleInputChange} 
								placeholder="Ruta absoluta del archivo" 
								/>
								<button 
									onClick={handleFileUpload}
									className='mx-2 w-[200px] bg-[#00809D] p-2.5 rounded-md text-white'
								>
									Enviar
								</button>
							</div>
						</div>
				}
			</header>
		</>
	)
}
