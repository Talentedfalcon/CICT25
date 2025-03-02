import React from 'react'

function SponsorshipTable() {
	return (
	  <table className="border border-collapse w-full text-left my-20 text-center">
		<thead>
		  <tr className="bg-gray-200">
			<th className="border p-2">S.No.</th>
			<th className="border p-2">Sponsorship Type</th>
			<th className="border p-2">Charges</th>
			<th className="border p-2">Presentation Slot</th>
			<th className="border p-2">Booth</th>
			<th className="border p-2">Free Registrations</th>
			<th className="border p-2">Additional Benefits</th>
		  </tr>
		</thead>
		<tbody>
		  <tr>
			<td className="border p-2">1</td>
			<td className="border p-2">Diamond</td>
			<td className="border p-2">
			  ₹500000<br />
			  OR <br />
			  $6000
			</td>
			<td className="border p-2">
			  Company overview/product presentation slot in industrial technical session (30 Min)/ workshop session approved by organizing committee
			</td>
			<td className="border p-2">
			  1 unit (prime exhibit area)
			</td>
			<td className="border p-2">
			  8 delegates
			</td>
			<td className="border p-2">
			  Citation in conference technical; Logos on website, banners, and other such material.
			</td>
		  </tr>
		  <tr>
			<td className="border p-2">2</td>
			<td className="border p-2">Platinum</td>
			<td className="border p-2">
			  ₹300000<br />
			  OR <br />
			  $4000
			</td>
			<td className="border p-2">
			  Company overview/product presentation slot in industrial technical session (15 Min)
			</td>
			<td className="border p-2">
			  1 unit
			</td>
			<td className="border p-2">
				5 delegates
			</td>
			<td className="border p-2">
				Logos on website, banners, and other such material
			</td>
		  </tr>
		  <tr>
			<td className="border p-2">3</td>
			<td className="border p-2">Gold</td>
			<td className="border p-2">
			  ₹200000<br />
			  OR<br />
			  $3000
			</td>
			<td className="border p-2">
			  -
			</td>
			<td className="border p-2">
			  1 unit
			</td>
			<td className="border p-2">
			  3 delegates
			</td>
			<td className="border p-2">
			  Logos on website, banners, and other such material
			</td>
		  </tr>
		  <tr>
			<td className="border p-2">4</td>
			<td className="border p-2">Silver</td>
			<td className="border p-2">
			  ₹100000<br />
			  OR<br />
			  $2000
			</td>
			<td className="border p-2">
			  -
			</td>
			<td className="border p-2">
			  Booth area
			</td>
			<td className="border p-2">
			  2 delegates
			</td>
			<td className="border p-2">
			  Logos on website, banners, and other such material
			</td>
		  </tr>
		  <tr>
			<td className="border p-2">5</td>
			<td className="border p-2">Stalls only</td>
			<td className="border p-2">
			  ₹30000
			</td>
			<td className="border p-2">
			  -
			</td>
			<td className="border p-2">
			  One stall
			</td>
			<td className="border p-2">
			  -
			</td>
			<td className="border p-2">
			  -
			</td>
		  </tr>
		</tbody>
	  </table>
	);
}  

const page = () => {
  return (
    <div className='mx-20'>
		<div className='mt-12'>
			We cordially invite notable businesses to think about supporting the 9th IEEE CICT.
		</div>
		<div>
			Your sponsorship guarantees that your company's products and facilities will be widely seen in addition to aligning your brand with this globally renowned event. 
			This conference typically attracts a lot of faculty and students from premier academic institutes like IITs, NITs,  and IIITs. 
			In 2025, the conference organisers are concentrating on include not just academic institutions but also industries, information and communication regulatory authorities, and standardisation bodies.
			We're also thrilled to announce a special Industry Session on the conference schedule, which will provide a few chosen sponsors a chance to speak exclusively and highlight their products.
		</div>
		<div>
			The table below lists all of the sponsorship opportunities in detail
		</div>
		<SponsorshipTable/>
	</div>
  )
}

export default page