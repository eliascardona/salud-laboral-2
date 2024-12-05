import { redirect, useNavigate } from 'react-router-dom'
import SampleBar from './SampleBar'
import MainHeader from '../../ui/headers/MainHeader'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import './styles/AdminPageUI.css'


export default function AdminPageUI() {
    const navigate = useNavigate()
    function navigateTo(path) {
        navigate(path)
    }

    return (
        <>
            <SampleBar />
            <MainHeader />
            <SectionOne />
            <SectionTwo sectionTitle={"Estadísticos básicos"} />
            <SectionTwo sectionTitle={"Estadísticos básicos"} />
        </>
    )
}