import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function FormContact() {
    return (
        <Container fluid='md'>
            <h1 style={{
                marginTop: 60, textAlign: 'center'
                , fontSize: 60, fontWeight: 700
            }}>CONTACT ME</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button style={{
                width: 200, fontSize: 20, fontWeight: 600, display: 'block', marginLeft: 500
            }} variant="success">Success</Button>{' '}

        </Container>
    );
}

export default FormContact;