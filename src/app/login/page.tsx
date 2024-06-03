"use client";

import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { login } from '../services/api';
import { LoginForm } from '../models/LoginForm';
import { LoginResponse } from '../models/LoginResponse';
import { setAuthToken } from '../utils/Authutils';


const Login: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            const response: LoginResponse = await login(form.username, form.password);
            if(response.status == 200){
                router.push('/home');
            }
        } catch (err: any) {
           setError(err.message)     
        }
    };

    const onAlertClose = () => {
        setError(null);
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Form onSubmit={onLoginFormSubmit}>
                        <Form.Group controlId="username" className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Enter username"
                                value={form.username}
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="password" className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={form.password}
                                onChange={onInputChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        {error && <Alert variant="danger" className="mt-3" onClose={onAlertClose} dismissible>{error}</Alert>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;