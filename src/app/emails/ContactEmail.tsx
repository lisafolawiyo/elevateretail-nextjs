import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
} from '@react-email/components';

type Props = {
  name: string;
  email: string;
  phone: string;
  referer: string;
  message: string;
};

const ContactEmail = ({ name, email, phone, referer, message }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>New message from contact form</Preview>
      <Body style={{ backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
        <Container>
          <Text><strong>Name:</strong> {name}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Text><strong>Phone:</strong> {phone}</Text>
          <Text><strong>How did you hear about us?:</strong> {referer}</Text>
          <Text><strong>Message:</strong> {message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
