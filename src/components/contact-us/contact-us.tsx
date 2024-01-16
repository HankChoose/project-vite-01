import classNames from 'classnames';
import styles from './contact-us.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card,Table,ListGroup} from 'react-bootstrap';

export interface ContactUsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ContactUs = ({ className }: ContactUsProps) => {
    return <div className={classNames(styles.root, className)}>
        <Card style={{ width: '60vw' }}>
            <Card.Body>
                <Card.Title>
                    <h1>Contact Us</h1>
                </Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    Please feel free to contact us if need further information.
                </ListGroup.Item>

                <ListGroup.Item>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th style={{ width: '150px' }}>Itme</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Email:</td>
                                <td>zhiyouyuec.@gmail.om</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>hankchenv@gmail.om</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>+1 587-936-1806</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#"></Card.Link>
            </Card.Body>
        </Card>
    </div>;
};
