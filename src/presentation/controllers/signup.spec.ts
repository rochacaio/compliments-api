import { SignUpController } from "./signup";

describe('SignUp Controller', () =>
{
    test('Should return 400 if no name is provided', () =>{
        const sut = new SignUpController();
        const httpRequest = {
            body: {
                email: 'email@mail.com',
                password: '1234anypass',
                passwordConfirmation: '1234anypass'
            }
        }

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.statusCode).toBe(400)
    })
})