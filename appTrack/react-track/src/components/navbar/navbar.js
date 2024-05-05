import React from 'react'

import Nav from 'react-bootstrap/Nav'


export const NavBar = () => {
    return (
        <Nav variant="tabs bg-warning-subtle" className="container mt-4" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link className="text-dark" href="/opportunities">Opportunities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-dark" href="/applications">Apps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-dark" href="/oa">OAs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark" href="/next">Next Steps</Nav.Link>
                </Nav.Item>
        </Nav.Item>
    </Nav>
    );
};