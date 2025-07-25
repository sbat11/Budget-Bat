# 🦇 BudgetBat

**BudgetBat** is a full-stack personal finance management app built with TypeScript and modern web technologies. It helps users track expenses, link bank accounts, and manage budgets securely and efficiently. The app leverages powerful APIs like Plaid for financial data, Dwolla for transfers, and Appwrite for backend services and user authentication.

---

## 🚀 Features

- 🔐 **Authentication**
  - Secure user signup and login with Appwrite
- 🏦 **Bank Integration**
  - Connect to bank accounts using Plaid
  - Fetch real-time balances and transactions
- 💸 **Payments and Transfers**
  - Set up and manage ACH transfers via Dwolla
- 📊 **Budget Management**
  - Track expenses by category
  - Visual breakdowns of income and spending
- 📈 **Insights**
  - Personalized analytics and monthly summaries
- 💻 **Responsive Design**
  - Mobile-friendly UI built with React and TypeScript

---

## 🛠 Tech Stack

| Technology   | Role                                  |
|--------------|----------------------------------------|
| **TypeScript** | Language used throughout the stack   |
| **React**     | Frontend framework                    |
| **Node.js**   | Backend server                        |
| **Appwrite**  | Authentication and database backend   |
| **Plaid**     | Bank account linking and transaction data |
| **Dwolla**    | ACH payments and customer onboarding  |

---

## 📂 Project Structure


<pre>budgetbat/
├── client/           # React frontend (TypeScript)
├── server/           # Node.js backend (TypeScript)
├── appwrite/         # Appwrite configuration
├── README.md
</pre>

---

## ⚙️ Getting Started

### 1. Clone the Repository


<pre>git clone https://github.com/yourusername/budgetbat.git
cd budgetbat</pre>

### 2. Setup Backend

<pre>cd server
npm install
npm run dev</pre>

### 3. Setup Frontend

<pre>cd ../client
npm install
npm start
</pre>

---

## 🔐 Environment Variables

### \`.env\` (Backend)


<pre>PLAID_CLIENT_ID=your_client_id
PLAID_SECRET=your_secret
DWOLLA_API_KEY=your_dwolla_key
DWOLLA_API_SECRET=your_dwolla_secret
APPWRITE_ENDPOINT=https://your-appwrite-endpoint.com
APPWRITE_PROJECT_ID=your_project_id</pre>

### \`.env\` (Frontend)


<pre>REACT_APP_API_URL=http://localhost:5000
REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-endpoint.com
REACT_APP_APPWRITE_PROJECT_ID=your_project_id</pre>

---

## 🧪 Future Improvements

- Dark mode toggle
- Email notifications and reminders
- Shared budgets for families or roommates
- Recurring income/expense tracking
- PWA support

---

## 🙋‍♂️ Author

Built with care by [Your Name](https://your-portfolio-link.com)  
[GitHub](https://github.com/yourusername) • [LinkedIn](https://linkedin.com/in/yourusername)
