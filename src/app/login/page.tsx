"use client";

import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { login, LoginResponse } from '../services/api';

interface LoginForm {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prevState => ({ ...prevState, username: e.target.value }));
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prevState => ({ ...prevState, password: e.target.value }));
    };

    const onLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            const data: LoginResponse = await login(form.username, form.password);
            localStorage.setItem('token', data.token);
            router.push('/dashboard');
            console.log(data);
        } catch (err) {
            setError('Failed to login. Please check your username and password.');
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
                                placeholder="Enter username"
                                value={form.username}
                                onChange={onUsernameChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="password" className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={form.password}
                                onChange={onPasswordChange}
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