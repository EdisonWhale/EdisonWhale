
# Whales Chat Application

Whales Chat is a mobile chat application built using React Native and Expo, providing users with a platform to communicate with each other through text messaging and real-time chat functionalities.

## Features

### User Authentication
- Users can sign up and sign in securely using email and password authentication.
- Ability to manage user credentials and perform automatic user login.

### Chat Functionality
- Real-time messaging feature allowing users to send and receive messages instantly.
- Support for creating new chat groups and adding or removing participants.
- Options for replying to messages and obtaining message history.

### Profile Management
- Users can manage their profiles, including the ability to upload and edit their profile images.

### Navigation
- Smooth and intuitive navigation features, including an organized chat list and settings screens.

## Detailed description
   
The following is a Markdown table with a brief description of each file's function:

| File             | Description                                                                                  |
|------------------|----------------------------------------------------------------------------------------------|
| `userSlice.js`   | Defines the user storage slice, handling state updates and storage of user data.              |
| `chatSlice.js`   | Defines the chat storage slice, managing state updates and storage of chat data.              |
| `authSlice.js`   | Defines the authentication storage slice, managing user authentication and auto-login state. |
| `messagesSlice.js` | Defines the message storage slice, managing state updates and storage of message data.      |
| `MainNavigator.js` | Defines the main navigation logic of the application, including bottom navigation and page stack navigation. |
| `AppNavigator.js` | Determines the navigation logic to display authentication, main navigation, or splash screen based on user authentication state. |
| `colors.js`      | Exports a constant object of color constants for styling and theming in the application.      |
| `commonStyles.js` | Contains commonly used styles such as centering styles, reusable throughout the application. |
| `DataItem.js`    | Used to display data items, including title, subtitle, image, and various types of icons.    |
| `Input.js`       | Renders an input field along with related labels, icons, and error messages.                 |
| `SignUpForm.js`  | Renders the user registration form, handling form input and submission logic.                 |
| `Bubble.js`      | Used to render chat message bubbles along with related action menus.                          |
| `SubmitButton.js` | Creates a submit button with different styles and behaviors based on different states.       |
| `ProfileImage.js` | Displays user avatars and provides functionality to edit and remove avatars.                 |
| `ReplyTo.js`     | Displays reply information to messages and provides functionality to cancel replies.          |
| `CustomHeaderButton.js` | Defines a custom header button component for creating custom buttons in the application.   |
| `PageContainer.js` | Defines a React Native component for wrapping page content and applying styles.              |
| `SignInForm.js`  | Implements a form for user sign-in, including data validation, handling user sign-in requests, and displaying loading states. |
| `PageTitle.js`   | Defines a React Native component for displaying page title text.                              |
| `validationConstraints.js` | Contains data validation functions such as length validation, string validation, email validation, and password validation. |
| `imagePickerHelper.js` | Provides helper functions for image selection and uploading, including launching image library picker, opening camera, and uploading images to Firebase storage. |
| `firebaseHelper.js` | JavaScript module for connecting to Google Firebase, initializing the application, and retrieving configuration information. |
| `userActions.js` | Contains functions for user data and chat record operations, using Firebase real-time database for operations. |
| `formActions.js` | Handles form input validation operations, including validating input data.                   |
| `authActions.js` | Contains authentication operations for user authentication and management, including user registration, user login, and user logout. |
| `chatActions.js` | Implements chat application functionality module, storing messages and related information in Firebase database. |
| `formReducer.js` | Implements a reducer function for updating state objects based on action objects.             |

## Technologies Used

- **React Native**
- **Expo**
- **Firebase** (for authentication, database, and storage)
- **Redux** (for state management)


## Installation

To run the application locally, follow these steps:

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/yourusername/whales-chat.git
   ```
2. Navigate to the project directory:
   ```sh
   cd whales-chat
   ```
3. Install the required dependencies using npm:
   ```sh
   npm install
   ```
4. Run the application using Expo CLI:
   ```sh
   npm start
   ```

   
## Get Started

To further explore and contribute to the Whales Chat application, follow these steps:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine:
   ```sh
   git clone https://github.com/yourusername/whales-chat.git
   ```
3. Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and commit them with descriptive commit messages:
   ```sh
   git commit -m "Description of your feature or fix"
   ```
5. Push your changes to your branch on your remote repository:
   ```sh
   git push origin feature/your-feature-name
   ```
6. Create a pull request to merge your changes to the original repository.

## Contact
Made with ❤️ by Edison
www.Edisonwhale.com

Have any questions?
Email me!
edisonapply@gmail.com

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


