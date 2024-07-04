# ChaiFund

ChaiFund is a dedicated crowdfunding platform designed to fuel the creativity of innovators and creators. Join us to bring your projects to life with the support of a vibrant community.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Authentication**: Secure login and registration via NextAuth.js.
- **Profile Update**: Users are redirected to update their profile for dashboard and Razorpay process after logging in.
- **Dashboard**: Personalized dashboard displaying user information and activities.
- **Leaderboard**: A leaderboard showcasing top contributors and their contribution amounts.
- **Payment Processing**: Seamless payment transfers using Razorpay as the payment gateway.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (or any preferred database)

### Installation

1.  Clone the repository:

    ```sh
    git clone https://github.com/reetjain01/chaifund.git
    cd chaifund
    ```

2.  Install dependencies:

    ```sh
    npm install
    ```

3.  Set up environment variables:

        Create a `.env` file in the root directory with the following variables:

        ```env
        GITHUB_ID=your-github-developer-id
        GITHUB_SECRET=your-github-developer-secret
        NEXT_PUBLIC_KEY_ID=your-razorpay-id
        KEY_SECRET=your-razorpay-secret
        NEXT_PUBLIC_URL=http://localhost:3000
        NEXTAUTH_URL=http://localhost:3000
        NEXTAUTH_SECRET=your-nextauth-secret

    ```

    ```

4.  Run the development server:

    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Authentication**:

   - Navigate to the login/register page.
   - Register a new account or log in with an existing account using NextAuth.js.

2. **Profile Update**:

   - After logging in, you will be redirected to a form to update your profile.
   - Complete the form to update your dashboard and Razorpay process information.

3. **Dashboard**:

   - After updating your profile, you will be redirected to your personalized dashboard.
   - Your username and other relevant information will be displayed here.

4. **Leaderboard**:

   - The dashboard includes a leaderboard section.
   - This section displays details of top contributors and their contribution amounts.

5. **Payment Processing**:
   - Use the payment option provided in the dashboard to transfer money using Razorpay.
   - Follow the on-screen instructions to complete the payment process securely.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please contact us at [jainreet112@gmail.com]jainreet112@gmail.com .
