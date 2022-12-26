import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'

export default function YearsLinks(props) {
    const [years, setYears] = useState([]) // שימוש בסטייט על מנת לבצע פילטר מבחינת השנים לראות אילו סרטים היו
    let nav = useNavigate(); //שימוש נאבי גייט על מנת להציג תפריט

    useEffect(() => {
        let temp_ar = []
        for (let index = 1950; index <= (new Date()).getFullYear(); index++) { // I מתחיל בשנת 1950 ואפשר אפילו בשנה יותר מאוחרת או מקודמת לא חובה
            temp_ar.push({
                label: index,
                value: index
            })
        }
        setYears(temp_ar)
    }, [])

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand><Link className='yearLinks-link text-white bold' to='/'>Top Years</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto bold">
                            <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchP}/year/1950`}>1950</Link></Nav.Link> {/* התחלה המיקום שהתפריט מתחיל */}
                            <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchP}/year/1960`}>1960</Link></Nav.Link>
                            <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchP}/year/1970`}>1970</Link></Nav.Link>
                            <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchP}/year/1980`}>1980</Link></Nav.Link>
                            <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchP}/year/1990`}>1990</Link></Nav.Link>
                            <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchP}/year/2000`}>2000</Link></Nav.Link>
                            <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchP}/year/2010`}>2010</Link></Nav.Link>
                            <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchP}/year/2020`}>2020</Link></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div className='container '>
                <Select onChange={item => {
                    nav(`/search/${props.searchP}/year/${item.value}`);
                }} options={years} className=' w-25 text-center yearLinx_select'>
                </Select>
            </div>
        </React.Fragment>)
}