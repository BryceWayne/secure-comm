# SecureComm: E2E Encrypted Messaging and P2P Financial Transactions

## Overview
Secure Comm is an end-to-end encrypted messaging and financial transaction application. It leverages the Signal Protocol for secure messaging and uses the XRP Ledger for financial transactions.

## Tech Stack
- Backend: Go with Fiber framework
- Frontend: React for Web, React Native for Mobile
- Messaging Encryption: Signal Protocol
- Financial Transactions: XRP Ledger
- Cloud Service: Google Cloud Platform
- Real-Time Database: Firebase

## Installation

### Prerequisites
- Go 1.16+
- Node.js 14+
- Yarn or npm
- Firebase CLI
- Google Cloud SDK

### Backend Setup
1. Clone the repo
   ```
   git clone https://github.com/BryceWayne/secure-comm.git
   ```
2. Navigate to the backend directory and install dependencies.
   ```bash
   cd backend
   go mod download
   ```

### Frontend Setup
1. Navigate to the frontend directory and install dependencies.
   ```bash
   cd frontend
   yarn install  # or npm install
   ```

## Running Locally

### Backend
Run the Go server.
```bash
go run main.go
```

### Frontend
Start the React development server.
```bash
yarn start  # or npm start
```

## Testing
Run unit tests for both frontend and backend components. Replace with actual test commands for your setup.

## Deployment
Follow GCP and Firebase deployment guides for deploying to production.

## Contributing
Please read `CONTRIBUTING.md` for details on code contributions.
