import { signInUser, signupUser, redirectIfLoggedIn } from './fetch-utils.js';


const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');
// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/other-page');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/other-page');
    }
});