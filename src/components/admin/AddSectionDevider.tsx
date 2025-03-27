import { useAdminBioContext } from '@/app/admin/bio/page'
import React from 'react'
import AddSocials from '../AddSocials'


const SectionOptions = () => {

	return(
		<div className='flex gap-2'>
			<AddSocials />
			<AddSocials />
			<AddSocials />
		</div>
	)
}

function AddSectionDevider() {

	const {setDialogComponent} = useAdminBioContext()
	

	return (
		<div className='relative flex items-center justify-center'>
			<div className='w-full border absolute -z-10 border-dashed'></div>
			<button className='bg-white' onClick={() => setDialogComponent(<SectionOptions />)}>
				<svg height={'24px'} viewBox="0 0 14 14" fill="#2B94CD">
					<path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.8662 14 14 10.866 14 7C14 3.13403 10.8662 0 7 0C3.13379 0 0 3.13403 0 7C0 10.866 3.13379 14 7 14ZM6.52832 11.3386H7.81152V7.8103H11.3389V6.52759H7.81152V3H6.52832V6.52759H3V7.8103H6.52832V11.3386Z" />
				</svg>
			</button>
		</div>
	)
}

export default AddSectionDevider