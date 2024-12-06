import { firestore } from '../../../lib/sdk/firebase'
import { where } from 'firebase/firestore'
import { useFirestore } from '../../../lib/hooks/useFirestoreSnapshot'
import './styles/SurveyPageUI.css'

export default function SurveyPageUI() {
	const { data, loading, error } = useFirestore(
		firestore,
		"empresa",
		[],
		[]
	)

	if (loading) return <p>Cargando datos en tiempo real...</p>
	if (error) return <p>Error: {error}</p>

	return (
		<ul>
			{data.map((doc) => (
				<li key={doc.id}>{JSON.stringify(doc)}</li>
			))}
		</ul>
	)
}
