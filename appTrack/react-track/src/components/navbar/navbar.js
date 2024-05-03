import React from 'react'
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'


export const NavBar = () => {
    return (
        <Nav variant="tabs bg-warning-subtle" className="container mt-4" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link className="text-dark" to="/opportunities">Opportunities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-dark" to="/applications">Apps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-dark" to="/oa">OAs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark" to="/next">Next Steps</Nav.Link>
                </Nav.Item>
        </Nav.Item>
    </Nav>
    );
};