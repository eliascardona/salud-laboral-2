import { firestore } from '../../../lib/sdk/firebase'
import { where } from 'firebase/firestore'
import { useFirestore } from '../../../lib/hooks/useFirestoreSnapshot'
import ColumnComponent from '../../../components/retrieving/surverys/columnsUI/ui/ColumnComponent'
import ScrollEffect from '../../../components/retrieving/surverys/columnsUI/ui/ScrollEffect'
import '../../../components/(completePages)/surveys/styles/SurveyPageUI.css'


export default function SurveysPage() {
	const { data, loading, error } = useFirestore(
		firestore,
		"empresa",
		[],
		[]
	)

	if (loading) return <p>Cargando datos en tiempo real...</p>
	if (error) return <p>Error: {error}</p>

	return (
		<div className='Survey__grid'>
			<div className='Survey__col'>
			{
				data.map((tupleData, i) => {
					let keyFmt = `enterprise__${Math.random().toString()}__${i}`
					return (
						<div className='Survey__col' key={keyFmt}>
							<ColumnComponent
								index={i}
								trustedData={{ ...tupleData }}
							/>
						</div>
					)
				})
			}
			<ScrollEffect />
			</div>
			<div className='Survey__col'>
				<h2>2da columna</h2>
			</div>
			<div className='Survey__col'>
				<h2>2da columna</h2>
			</div>
		</div>
	)
}