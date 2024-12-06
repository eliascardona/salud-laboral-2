import { useEffect, useState, useCallback } from "react"
import { query, collection, onSnapshot } from "firebase/firestore"

const useFirestore = (firestore, collectionName, queryConstraints = [], dependencies = []) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const callback = useCallback(() => {
        const colRef = collection(firestore, collectionName)
        const q = query(colRef, ...queryConstraints)

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const payload = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setData(payload)
                setLoading(false)
            },
            (err) => {
                console.error("Error al suscribirse a Firestore:", err.message)
                setError(err.message)
                setLoading(false)
            }
        )

        return () => unsubscribe()
    }, [firestore, collectionName, ...queryConstraints])

    useEffect(() => {
        setLoading(true)
        setError(null)

        const unsubscribe = callback()
        return () => unsubscribe()
    }, [callback, ...dependencies])

    return { data, loading, error }
}

export { useFirestore }