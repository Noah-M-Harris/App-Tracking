import React from 'react'


import Nav from 'react-bootstrap/Nav'


export const NavBar = () => {
    return (
        <Nav variant="tabs bg-warning-subtle" className="container mt-4" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link className="text-dark" href="/home">Opportunities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-dark" href="#">Apps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-dark" eventKey="link-1">OAs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark" eventKey="link-2">Next Steps</Nav.Link>
                </Nav.Item>
        </Nav.Item>
    </Nav>
    );
};